import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchRoomById } from "../../api/useRooms";
import { Skeleton } from "./components/Skeleton";

export default function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useFetchRoomById(id);

  console.log(data?.data);
  if (isLoading) return <Skeleton />;
  if (isError) return <div>Error loading room details</div>;

  return (
    <div className="bg-slate-50">
      <section className="w-full min-h-[65vh]">
        <div className="max-w-[75%] h-full mx-auto p-8">
          <h1 className="text-center text-4xl text-black font-semibold mb-4">
            {data?.data.name}
          </h1>
          <img
            src={data?.data.image}
            alt={data.name}
            className={`mb-5 lg:max-h-96 ${
              !data?.data.availability ? "grayscale" : ""
            }`}
          />
          <h2 className="text-2xl font-bold mb-8">{data.name}</h2>
          <p className="mb-5 text-sm">{data?.data.description}</p>
          <p className="mb-5 text-sm">Price: ${data?.data.price}</p>
          <p className="mb-5 text-sm">
            Availability:{" "}
            {data?.data.availability ? "available" : "not available"}
          </p>
          <button
            onClick={() => navigate(`/rooms/${id}/booking`)}
            className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg text-sm font-bold"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
