import React from "react";
import BookingCard from "./BookingCard";

function Booking() {
  const bookingData = [
    {
      id: 1,
      roomId: "A101",
      startTime: "2019-09-28 13:00:00",
      endTime: "2019-09-28 14:00:00",
      title: "Lunch with Petr",
    },
    {
      id: 2,
      roomId: "A101",
      startTime: "2019-09-28 14:00:00",
      endTime: "2019-09-28 15:00:00",
      title: "Sales Weekly Meeting",
    },
    {
      id: 3,
      roomId: "A101",
      startTime: "2019-09-28 16:00:00",
      endTime: "2019-09-28 18:00:00",
      title: "Anastasia Website Warroom",
    },
    {
      id: 4,
      roomId: "A101",
      startTime: "2019-09-29 13:00:00",
      endTime: "2019-09-29 14:00:00",
      title: "One-on-One Session",
    },
    {
      id: 5,
      roomId: "A101",
      startTime: "2019-09-29 16:00:00",
      endTime: "2019-09-29 18:00:00",
      title: "UGC Sprint Planning",
    },
    {
      id: 6,
      roomId: "A102",
      startTime: "2019-09-30 09:00:00",
      endTime: "2019-10-04 18:00:00",
      title: "5-Day Design Sprint Workshop",
    },
    {
      id: 7,
      roomId: "Auditorium",
      startTime: "2019-09-19 09:00:00",
      endTime: "2019-09-23 19:00:00",
      title: "Thai Tech Innovation 2019",
    },
    {
      id: 8,
      roomId: "A101",
      startTime: "2019-09-28 10:00:00",
      endTime: "2019-09-28 13:00:00",
      title: "Raimonland project",
    },
    {
      id: 9,
      roomId: "A102",
      startTime: "2019-09-30 18:00:00",
      endTime: "2019-09-30 20:00:00",
      title: "Management Meetinng",
    },
    {
      id: 10,
      roomId: "A101",
      startTime: "2019-10-04 14:00:00",
      endTime: "2019-10-06 11:00:00",
      title: "3-day workshop Corgi costume",
    },
  ];

  const checkAvailability = (roomId, startTime, endTime) => {
    const getRoomId = bookingData.filter((item) => item.roomId == roomId);

    if (!getRoomId.length) {
      return "no select room";
    }
    if (!startTime) {
      return "no start time";
    }
    if (!endTime) {
      return "no end time";
    }
    const sTime = new Date(startTime);
    const eTime = new Date(endTime);

    const checkStart = getRoomId.filter((item) => {
      const bsTime = new Date(item.startTime);
      const beTime = new Date(item.endTime);

      return bsTime >= sTime && beTime < eTime;
    });
    console.log("checkStart", checkStart);

    return checkStart.length === 0;
  };

  const getBookingsForWeek = (roomId, weekNo) => {
    const getRoomId = bookingData.filter((item) => item.roomId == roomId);

    const multiplier = +weekNo;

    if (!getRoomId.length) {
      return "no select room";
    }
    const today = new Date("2019-09-28");
    const startWeek = new Date(
      today.setDate(today.getDate() + 7 * (multiplier - 1))
    );
    console.log("startWeek", startWeek);
    const nextWeek = new Date(today.setDate(today.getDate() + 7));
    console.log("nextWeek", nextWeek);
    const checkBooking = getRoomId.filter((item) => {
      const bsTime = new Date(item.startTime);
      const beTime = new Date(item.endTime);

      return startWeek <= beTime <= nextWeek && bsTime >= startWeek;
    });

    return checkBooking;
  };
  const arrBooking = getBookingsForWeek("A101", 1);
  console.log("arrBooking", arrBooking);
  return (
    <>
      <h3>#2.A</h3>
      <div>Booking</div>
      {checkAvailability(
        "A101",
        "2019-09-28 13:00:00",
        "2019-09-28 16:00:00"
      ) ? (
        <div>Available</div>
      ) : (
        <div>Unavailable</div>
      )}
      <h3>#2.B</h3>
      {arrBooking.length !== 0 ? (
        arrBooking.map((item) => {
          return <BookingCard key={item.id} item={item} />;
        })
      ) : (
        <h1>No booking in this week</h1>
      )}
    </>
  );
}

export default Booking;
