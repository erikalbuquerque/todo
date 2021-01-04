import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";

import "./../styles/styles.css";
import "./../styles/globalStyles.css";
import TodoList from "./TodoList";
import { TodoProvider } from "../contexts/TodoContext";
import AddTodo from "./AddTodo";

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <div className="container">
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/create" component={AddTodo} />
          </Switch>
        </div>
      </Router>
    </TodoProvider>
  );
};

export default App;
