import React from "react";
import UpcommingSchedule from "./UpcommingSchedule";

function ScheduleCard() {
  return (
    <div>
      <div className="bg-[#F7F7F7] h-10 pl-20 flex items-center font-semibold text-gray-500">
        Today (Mon,28 Sep)
      </div>
      <div className="pl-14 flex flex-col gap-7 pt-11">
        <UpcommingSchedule />
        <UpcommingSchedule />
        <UpcommingSchedule />
      </div>
    </div>
  );
}

export default ScheduleCard;
