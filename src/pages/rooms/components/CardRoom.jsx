import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardRoom({ id, name, description, image }) {
  const navigate = useNavigate();

  const handleCheckAvailability = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <>
      <div id="room1" className="flex flex-col">
        <div className="w-96 h-auto text-black">
          <div id="img" className="mb-5">
            <img src={image} alt="Hotel" className="" />
          </div>
          <h2 className="font-bold mb-8">{name}</h2>
          <p className="mb-5 text-sm">{description}</p>
          <button
            id="payment"
            className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg text-sm font-bold"
            onClick={handleCheckAvailability}
          >
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
}
