import React from "react";

import "./styles.css";

import { useTodo } from "../../contexts/TodoContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

interface AddTodoForm {
  title: string;
}

const schema = yup.object().shape({
  title: yup.string().required("invalid task!"),
});

const AddTodo = () => {
  const { addTodo } = useTodo();

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTodoForm, e: any) => {
    e.preventDefault();
    addTodo(data.title);
    e.target.reset();
    history.push("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
      <h4>New task</h4>
      <div className="input-title">
        <input
          type="text"
          name="title"
          id="title"
          placeholder={errors.title?.message || "title"}
          ref={register}
        />
      </div>
      <div className="button-submit">
        <button>save</button>
      </div>
    </form>
  );
};
export default AddTodo;
