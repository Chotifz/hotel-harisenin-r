import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("");

  const handleBooking = (event) => {
    event.preventDefault();

    navigate("/booking", { state: { checkIn, checkOut, room } });
  };

  return (
    <>
      <div
        className="relative -top-20 mx-4 lg:mx-32 xl:mx-44 shadow-lg"
        style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="w-full flex lg:flex-col items-center mt-4 bg-slate-200 px-8 py-6 lg:py-8 max-md:py-16">
          <form
            className="flex justify-around items-center gap-6 lg:gap-8 mx-auto text-black max-md:flex-col"
            onSubmit={handleBooking}
          >
            <div className="w-full flex flex-col lg:mb-4">
              <label htmlFor="check-in">Check-In</label>
              <input
                className="p-2 xl:px-10 rounded-lg"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="Select Date"
                required
              />
            </div>

            <div className="w-full flex flex-col lg:mb-4">
              <label htmlFor="check-out">Check-Out</label>
              <input
                className="p-2 xl:px-10 rounded-lg"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="Select Date"
                required
              />
            </div>

            <div className="flex flex-col lg:mb-4">
              <label htmlFor="room">Room</label>
              <input
                className="p-2 px-0 rounded-lg"
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder=""
                required
              />
            </div>

            <div className="w-full">
              <button
                className="bg-slate-700 px-3 py-3 rounded-lg text-white"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
