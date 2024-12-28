import React from "react";
import { FaRegCircle } from "react-icons/fa";

const InputFilds = () => {
  return (
    <div className="flex flex-col gap-7 mt-6">
      {[1, 2, 3].map((id) => {
        return (
          <div key={id} className="w-full h-[4rem] border-2 rounded-2xl overflow-hidden flex items-center px-5 gap-2">
            <FaRegCircle className="text-[#4e4e4e] cursor-pointer"/>
            <input
              type="text"
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
