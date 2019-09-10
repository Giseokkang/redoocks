import React, { useReducer } from "react";

const INCREASE = "increase";
const DECREASE = "decrease";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREASE })}>add</button>
      <button onClick={() => dispatch({ type: DECREASE })}>minus</button>
    </>
  );
};

export default App;
