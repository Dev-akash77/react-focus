import React, { useContext } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { StoreContext } from "../Context/Store";

const InputFilds = () => {
  const { handleInputChange, inputfillData, handleToggle } = useContext(StoreContext);
  return (
    <div className="flex flex-col gap-7 mt-6">
      {["firstData", "secondData", "thirdtData"].map((cur, id) => {
        const fieldName = Object.keys(inputfillData[cur])[0];
        return (
          <div
            key={id}
            className={`w-full h-[4rem] border-2 rounded-2xl overflow-hidden flex items-center px-5 gap-2 ${inputfillData[cur].check&&"bg-transback border-[#aaadff]"}`}
          >
            {inputfillData[cur].check ? (
              <FaRegCheckCircle
                className="text-highlight cursor-pointer"
                onClick={() => handleToggle(cur)}
              />
            ) : (
              <FaRegCircle
                className="text-[#4e4e4e] cursor-pointer"
                onClick={() => handleToggle(cur)}
              />
            )}
            <input
              name={fieldName}
              onChange={(e) => handleInputChange(e)}
              disabled={inputfillData[cur].check}
              value={inputfillData[cur][fieldName]}
              className={`outline-none w-full h-full border-none bg-transparent ${
                inputfillData[cur].check && "text-highlight"
              }`}
              placeholder="Add a new goal..."
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputFilds;
