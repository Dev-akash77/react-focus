import React, { useContext } from "react";
import { FaRegCircle } from "react-icons/fa";
import { StoreContext } from "../Context/Store";

const InputFilds = () => {
  const { handleInputChange, inputfillData } = useContext(StoreContext);

  return (
    <div className="flex flex-col gap-7 mt-6">
      {["firstData", "secondData", "thirdtData"].map((cur, id) => {
        const fieldName = Object.keys(inputfillData[cur])[0]; // Extract field name (e.g., "first")
        return (
          <div
            key={id}
            className="w-full h-[4rem] border-2 rounded-2xl overflow-hidden flex items-center px-5 gap-2"
          >
            <FaRegCircle className="text-[#4e4e4e] cursor-pointer" />
            <input
              name={fieldName} // Set the correct name for the input
              onChange={(e) => handleInputChange(e)} // Update state on input change
              type="text"
              value={inputfillData[cur][fieldName]} // Bind value to the correct field
              className="outline-none w-full h-full border-none bg-transparent"
              placeholder="Add a new goal..."
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputFilds;
