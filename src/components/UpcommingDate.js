import React from "react";

function UpcommingDate({ item }) {
  const dateTime =
    item.startTime.slice(11, 16) + "-" + item.endTime.slice(11, 16);

  return (
    <div className="">
      <div className="text-gray-300 ">{dateTime}</div>
      <div className="text-white text-2xl ">{item.title}</div>
    </div>
  );
}

export default UpcommingDate;
