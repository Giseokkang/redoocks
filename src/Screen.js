import React from "react";
import Header from "./Header";
import { useFns } from "./context";

const Screen = () => {
  const fn = useFns();
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={fn.logUserIn}>Log user in</button>
    </div>
  );
};

export default Screen;
