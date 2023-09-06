import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/input";
import { useState, useEffect } from "react";
import Showing from "./Components/showing";
function App() {
  const [showInput, setShowInput] = useState(false);
  const [data, setdata] = useState([]);
  const handleAddExpenseClick = () => {
    setShowInput(true);
  };
  const [filteryear, setFilteryear] = useState("2023");
  const years = ["2023", "2022", "2021", "2020", "2019"];
  const ssm = (ps) => {};
  const value = (es) => {
    setdata((prevData) => [es, ...prevData]);
  };
  return (
    <div className="bg-blue-400 h-screen">
      <div className="flex justify-center items-center bg-blue-400">
        {showInput && <Input val={ssm} value={value} />}
        {!showInput && (
          <button
            onClick={handleAddExpenseClick}
            className="border w-15 h-10 px-10 font-bold mt-20"
          >
            Add Expense
          </button>
        )}
      </div>
      <div className="h-[5%] mt-[2%]">
        <select
          className="rounded-sm md:ml-[75%] xl:w-[15%] md:w-[15%] ml-[75%] w-[20%]"
          value={filteryear}
          onChange={(e) => {
            setFilteryear(e.target.value);
          }}
        >
          {years.map((i) => (
            <option value={i} className="">
              {i}
            </option>
          ))}
        </select>
      </div>
      <Showing data={data} year={filteryear} />
    </div>
  );
}

export default App;
