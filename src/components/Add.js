import React, { useState } from "react";
import { CREATE } from "../actions";
import { useDispatch } from "../context";

export default () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: CREATE, payLoad: newToDo });
    setNewToDo("");
  };

  const onChage = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Todo !!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          onChange={onChage}
          value={newToDo}
        ></input>
      </form>
    </>
  );
};
