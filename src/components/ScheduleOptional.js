import React from "react";
import ScheduleCard from "./ScheduleCard";

function ScheduleOptional() {
  return (
    <div className="w-3/5 ">
      <div className="bg-[#EFEEEC] w-full flex h-40 flex-wrap-reverse px-16">
        <div className="w-3/5 flex  justify-between h-1/2 items-center  ">
          <div className="text-gray-400 hover:text-black font-semibold flex items-center hover:border-b-black hover:underline hover:underline-offset-8  h-full ">
            THIS WEEK
          </div>
          <div className="text-gray-400 hover:text-black font-semibold flex items-center hover:border-b-black hover:underline hover:underline-offset-8  h-full">
            NEXT WEEK
          </div>
          <div className="text-gray-400 hover:text-black font-semibold flex items-center hover:border-b-black hover:underline hover:underline-offset-8  h-full">
            WHOLE MONTH
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-32">
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </div>
  );
}

export default ScheduleOptional;
