import Hero from "./components/Hero";
import CardRoom from "./components/CardRoom";
import { useFetchRoom } from "../../api/useRooms";
import { Skeleton } from "./components/Skeleton";

export default function Rooms() {
  const { data, isLoading, isError } = useFetchRoom();

  if (isLoading) return <Skeleton />;
  if (isError) return <div>Loading Page Error</div>;

  return (
    <div className="bg-slate-50">
      <div className="hero bg-img-services">
        <Hero
          title="Discover Our Rooms!"
          subtitle="Experience comfort and luxury with our range of meticulously designed rooms."
        />
      </div>
      <section className="w-full min-h-[65vh]">
        <h1 className="text-center text-2xl text-black font-semibold mb-4">
          Explore
        </h1>
        <div className="max-m[70%] h-full flex flex-wrap mx-8 justify-center gap-8 pb-20">
          {data.data ? (
            data.data.map((room) => (
              <CardRoom
                key={room.id}
                id={room.id}
                name={room.name}
                description={room.description}
                image={room.image}
              />
            ))
          ) : (
            <div>No rooms available</div>
          )}
        </div>
      </section>
    </div>
  );
}
