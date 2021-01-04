import React from "react";
import "./styles.css";

import TodoListItem from "../TodoListItem";
import { useTodo } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <table className="table">
      <caption>Task List</caption>
      <thead>
        <tr>
          <th className="table-item-id">#</th>
          <th className="table-item-title">tasks</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
