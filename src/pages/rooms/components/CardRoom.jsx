import React from "react";

export default function CardRoom({title, subtitle, image}) {
  return (
    <>
      <div id="room1" className="flex flex-col">
        <div className="w-96 h-auto text-black">
          <div id="img" className="mb-5">
            <img src={image} alt="Hotel" className="" />
          </div>
          <h2 className="font-bold mb-8">{title}</h2>
          <p className="mb-5 text-sm">
            {subtitle}
          </p>
          <button
            id="payment"
            className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg text-sm font-bold"
          >
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
}
