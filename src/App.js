import React from "react";
import Add from "./components/Add";
import List from "./components/List";
import { useState } from "./context";

const App = () => {
  const state = useState();
  return (
    <>
      <Add />
      <List title={"ToDos"} stateArr={state.toDos} />
      <List title={"Completed"} stateArr={state.completed} isCompleted={true} />
    </>
  );
};

export default App;
