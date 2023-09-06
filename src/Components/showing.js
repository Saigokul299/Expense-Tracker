const Showing = (data) => {
  const fil = data.data.filter((i) => i.year == data.year);
  console.log(fil);
  console.log(data);
  return !(fil.length == 0) ? (
    <div className="bg-black md:w-[80%] mx-auto rounded-md py-[1%] w-[95%] overflow-x-auto max-h-[45%] md:max-h-[50%]">
      {fil.map((i, index) =>
        !(
          i.number === "" ||
          i.text === "" ||
          i.day === "" ||
          i.month === "" ||
          i.year === ""
        ) ? (
          <div className="flex justify-start bg-green-300 mx-auto my-3 xl:w-[80%] md:w-[80%] rounded-md max-h-[30%] md:max-h-[29%] w-[95%]">
            <div className="flex flex-col xl:w-[20%] md:w-[20%] w-[30%] ml-1 text-center bg-gray-500 rounded-md my-1 md:text-[18px] xl:text-[16px] text-16px">
              <h2 className="h-[33%]">{i.day}</h2>
              <h2 className="h-[33%]">{i.month}</h2>
              <h2 className="h-[33%]">{i.year}</h2>
            </div>
            <div className="xl:w-[80%] md:w-[50%] w-[40%] justify-center text-center my-auto mx-auto text-2xl font-mono">
              <h2>{i.text}</h2>
            </div>
            <div className="flex my-auto xl:w-[20%] items-center justify-center md:w-[20%] w-[20%]">
              <button className="bg-red-600 px-[10%] rounded-md" disabled>
                {i.number}
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  ) : null;
};

export default Showing;
