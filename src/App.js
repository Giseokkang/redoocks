import React from "react";
import Header from "./Header";
import Screen from "./Screen";
import UserContextProvider from "./context";

function App() {
  return (
    <UserContextProvider>
      <Screen></Screen>
    </UserContextProvider>
  );
}

export default App;
