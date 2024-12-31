import React from "react";
import Bar from "./Bar";
import InputFilds from "./InputFilds";

const MainCard = () => {
  return (
    <div className="w-screen h-screen bg-transback cc gap-2">
      <h1 className="capitalize text-highlight text-[2.7rem] font-bold">
        Focus on <span className="text-[#30120b]">today</span>
      </h1>
      <div className="bg-[#FBFBFB] md:h-[80%] h-[72%] w-[90%] md:w-[30rem] rounded-2xl p-[1.2rem]">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Today</h2>
          <img src="..\Sun.svg" alt="sun logo" className="w-[2rem]" />
        </div>
        <Bar />
        <InputFilds />
        <p className="mt-10 text-md cc font-semibold">
          “Move one step ahead, today!”
        </p>
        <p className="mt-8 text-[.9rem] cc font-medium text-[#656565]">
          Made with ❤️ by Akash Bisaws
        </p>
      </div>
    </div>
  );
};

export default MainCard;
