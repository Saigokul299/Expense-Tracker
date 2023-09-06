import { useState } from "react";
import "../App.css";
// import tailwindConfig from "../../tailwind.config";
const Input = (p) => {
  const [textvalue, settextvalue] = useState("");
  const [numvalue, setnumvalue] = useState("");
  const [yearvalue, setyearvalue] = useState("");

  const handle = () => {
    const ex = {
      text: textvalue,
      number: numvalue,
      year: new Date(yearvalue).getFullYear(),
      month: new Date(yearvalue).toLocaleString("en-US", {
        month: "long",
      }),
      day: new Date(yearvalue).getDate(),
    };
    console.log(ex.month);
    setnumvalue("");
    settextvalue("");
    setyearvalue("");
    p.value(ex);
    // console.log(ex);
  };

  return (
    <div className="justify-center bg-gray-500 p-10 xl:w-[70%] w-[95%] md:w-[65%] rounded-md md:mt-[2%] mt-[4%]">
      <div className="md:grid md:grid-cols-2 gap-[10%] h-15 justify-around flex flex-col">
        <input
          className="h-10 mb-2"
          onChange={(e) => settextvalue(e.target.value)}
          value={textvalue}
          placeholder="Text"
        ></input>
        <input
          type="number"
          className="h-10"
          onChange={(e) => setnumvalue(e.target.value)}
          value={numvalue}
          placeholder="Number"
        ></input>
      </div>
      <div className="md:mt-8 md:grid md:grid-cols-2 gap-[10%] h-15 justify-around flex flex-col mt-2">
        <input
          type="date"
          max={new Date().toISOString().split("T")[0]}
          min="2019-01-01"
          className="h-10 mb-2"
          onChange={(e) => setyearvalue(e.target.value)}
          value={yearvalue}
          placeholder="Date"
        ></input>
        <button
          className="bg-red-300 border-s-violet-100 h-10"
          onClick={() => {
            p.val("true");
            handle();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
