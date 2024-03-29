import { createContext, useContext, useReducer } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};
type InitialStateType = {
  year: number;
  month: number;
  date: number;
};
type MonthActionType = {
  type: string;
  payload?: number;
};

type MonthContextType = {
  state: InitialStateType | null;
  // action: MonthActionType | null;
  dispatch: React.DispatchWithoutAction;
  monthArr: string[];
};
// type ReducerFuncType = {};

const CalenderContext = createContext<MonthContextType | null>(null);

const CalenderProvider = ({ children }: ContextProviderProps) => {
  const monthArr = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateString = new Date(); //Gives date as afull string "Fri Jun 17 2022 10:54:59 GMT+0100 (British Summer Time)"
  const initialState = {
    year: dateString.getFullYear(), // current year 2024
    month: dateString.getMonth() + 1, //gives index of month from 0-11,
    date: dateString.getDate(),
  };
  console.log(initialState.year, initialState.month, initialState.date);

  const reducerFunction = (
    state: InitialStateType,
    action: MonthActionType
  ) => {
    switch (action.type) {
      case "NEXT_MONTH":
        if (state.month === 12) {
          return { ...state, month: 1, year: state.year + 1 };
        } else {
          return { ...state, month: state.month++ };
        }
    }
  };

  const [state, dispatch] = useReducer<InitialStateType>(
    reducerFunction,
    initialState
  );

  // const handleNextMonth = () => {};

  return (
    <CalenderContext.Provider value={{ state, dispatch, monthArr }}>
      {children}
    </CalenderContext.Provider>
  );
};

const useCalender = () => useContext(CalenderContext);
export { CalenderProvider, useCalender };
