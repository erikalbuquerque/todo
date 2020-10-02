import React from "react";

import { FaTrash } from "react-icons/fa";
import { useTodo } from "../../contexts/TodoContext";
import { Todo } from "../../models/Todo";

import "./styles.css";

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useTodo();
  const { title, done } = props.todo;

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };

  const handleChange = (todo: Todo) => {
    toggle(todo);
  };
  return (
    <tr className="row">
      <td className="row-checkbox">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            checked={done}
            onChange={() => handleChange(props.todo)}
          />
        </label>
      </td>
      <td className="row-title" style={{ textDecoration: done ? "line-through" : "" }}>
        {title}
      </td>
      <td className="row-button">
        <button onClick={() => onRemove(props.todo)}>
          <FaTrash color="#e50812" />
        </button>
      </td>
    </tr>
  );
};

export default TodoListItem;
