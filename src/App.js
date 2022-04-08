import { createContext, useState } from "react";
import { Header, Options, Payment } from "./containers";
import { OptionsContext } from "./OptionsContext";

const App = () => {
  const [value, setValue] = useState("0");

  return (
    <OptionsContext.Provider value={{ value, setValue }}>
      <Header />
      <Options />
      <Payment />
    </OptionsContext.Provider>
  );
};

export default App;
