import { createContext, useContext } from "react";

const CalenderContext = createContext({});

const CalenderProvider = ({ children }: any) => {
  return (
    <CalenderContext.Provider value={{}}>{children}</CalenderContext.Provider>
  );
};

const useCalender = () => useContext(CalenderContext);
export { CalenderProvider, useCalender };
