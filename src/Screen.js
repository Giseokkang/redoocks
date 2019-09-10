import React from "react";
import { useSetLang, useT } from "./context";

const Screen = () => {
  const t = useT();
  const setLang = useSetLang();
  console.log(t, setLang);
  return (
    <div>
      <h1>{t("hello")}</h1>
      <button onClick={() => setLang("es")}>{t("translate")}</button>
    </div>
  );
};

export default Screen;
