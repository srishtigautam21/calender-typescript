import React from "react";
import "./App.css";

function App() {
  return (
    <div className='flex flex-column items-start justify-center p-[20px] min-h-[100vh] w-full'>
      <div className='flex justify-between items-center w-[700px]'>
        <div>March, 2024</div>
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
