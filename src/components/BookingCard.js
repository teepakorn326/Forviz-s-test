import React from "react";

function BookingCard({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <div> Room id : {item.roomId} </div>
      <div> Start Time : {item.startTime} </div>
      <div> End Time : {item.endTime} </div>
    </div>
  );
}

export default BookingCard;
