import React, { useState, useEffect, useRef } from "react";
import { EDIT } from "../actions";
import { useDispatch } from "../context";

const useFocus = () => {
  const element = useRef();
  useEffect(() => {
    if (element) {
      element.current.focus();
    }
  }, []);
  return element;
};

export default ({ toDo }) => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const el = useFocus();

  const onSubmit = e => {
    e.preventDefault();
    if (newToDo !== "") {
      dispatch({ type: EDIT, payLoad: newToDo, toDo });
    }
  };

  const onChage = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Update</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={toDo.text}
          onChange={onChage}
          value={newToDo}
          ref={el}
        ></input>
        <button type="submit">Update</button>
      </form>
    </>
  );
};
