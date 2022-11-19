import React from "react";
import UpcommingDate from "../components/UpcommingDate";
import dateFormat from "dateformat";

function DateOptional({ getRoomById, roomIdName }) {
  const today = new Date("2019-09-28");
  const nToday = "2019-09-28";
  const newToday = dateFormat(today, "dddd,mmm,dd");
  // const newToday = dateFormat(today, "dddd,mmm,dd");
  const arrToday = newToday.split(",");

  const getToday = getRoomById.filter(
    (item) => item.startTime.slice(0, 10) == nToday
  );

  return (
    <>
      <div className="w-2/5 bg-[#46529D] h-screen pl-28 ">
        <div className="w-full bg-[#2EBAEE] h-40 font-bold text-6xl pt-12 px-6 text-white text-justify ">
          {roomIdName}
        </div>
        <div className=" flex flex-col h-[80vh] justify-around">
          <div className="text-white text-xl "> Upcoming</div>
          <div>
            <div className="text-7xl text-gray-300 font-thin ">
              {" "}
              {arrToday[0]}
            </div>
            <div className="text-7xl text-white font-thin ">
              {" "}
              {arrToday[2]} {arrToday[1]}{" "}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            {getToday.map((item) => {
              return <UpcommingDate key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DateOptional;
