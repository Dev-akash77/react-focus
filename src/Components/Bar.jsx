import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";

const Bar = () => {
  const {showFill,totalFillData,information}= useContext(StoreContext);
  const totalValue = (Math.round((totalFillData/3)*100));
  return (
    <div className="mt-4">
      <p className="text-[.8rem]">{information[totalFillData]}</p>
      <div className="mt-4 bg-transback w-full h-5 rounded-2xl overflow-hidden">
        <div className={`h-full bg-[highlight] bar`} style={{ width: `${totalValue}%` }} ></div>
      </div>
      {/*! if all the fils are not true then click then show this error!*/}
      {showFill&&<p className="mt-3 text-red-600 text-[.8rem]">Please set all the 3 goals!</p>}
    </div>
  );
};

export default Bar;
