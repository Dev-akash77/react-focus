import React from "react";

const Bar = () => {
  return (
    <div className="mt-4">
      <p className="text-[.8rem]">Raise the bar by completing your goals!</p>
      <div className="mt-4 bg-transback w-full h-5 rounded-2xl overflow-hidden">
        <div className={`h-full w-[70%] bg-[highlight] bar`}></div>
      </div>
      <p className="mt-3 text-red-600 text-[.8rem]">Please set all the 3 goals!</p>
    </div>
  );
};

export default Bar;
