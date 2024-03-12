import React from "react";
import "./App.css";
import { useCalender } from "./context/calenderContext";

function App() {
  // interface stateType {
  //   year: number;
  //   month: number;
  //   date: number;
  // }
  const { state, dispatch, monthArr } = useCalender();
  // const { year, month, date } = state;
  console.log(state, dispatch, monthArr);

  return (
    <div className='flex flex-column items-start justify-center p-[20px] min-h-[100vh] w-full'>
      <div className='flex justify-between items-center w-[700px]'>
        <div>
          {monthArr[state.month]}, {state.year}
        </div>
        <div>
          <button className='bg-blue-700 pt-1 pb-1 pr-3 pl-3 text-white rounded-xl mr-3'>
            Prev
          </button>
          <button className='bg-blue-700 pt-1 pb-1 pr-3 pl-3 text-white rounded-xl'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
