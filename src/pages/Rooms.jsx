import React from "react";
import HeroServices from "../component/HeroServices";
import CardRoom from "../component/CardRoom";

import roomOne from "../assets/images/room/roomOne.jpg"
import roomTwo from "../assets/images/room/roomTwo.jpg"
import roomThree from "../assets/images/room/roomThree.jpg"
import roomFour from "../assets/images/room/roomFour.jpg"
import roomFive from "../assets/images/room/roomFive.jpg"
import roomSix from "../assets/images/room/roomSix.jpg"

export default function Rooms() {
    const rooms = [
        {
            title:"Two King Bedrooms",
            subtitle: "Gratify yourself with the privacy and ample space of our Two King Bed guest rooms, which feature two distinct bedrooms, each furnished with a luxurious king-size bed. You can also relish a complimentary cup of coffee while watching your favorite shows on one of our premium LED TVs. This suite ensures that everyone enjoys the room they require in a truly lavish manner.",
            image: roomOne
        },
        {
            title:"Two King Bedrooms",
            subtitle: "Gratify yourself with the privacy and ample space of our Two King Bed guest rooms, which feature two distinct bedrooms, each furnished with a luxurious king-size bed. You can also relish a complimentary cup of coffee while watching your favorite shows on one of our premium LED TVs. This suite ensures that everyone enjoys the room they require in a truly lavish manner.",
            image: roomTwo
        },
        {
            title:"Two King Bedrooms",
            subtitle: "Gratify yourself with the privacy and ample space of our Two King Bed guest rooms, which feature two distinct bedrooms, each furnished with a luxurious king-size bed. You can also relish a complimentary cup of coffee while watching your favorite shows on one of our premium LED TVs. This suite ensures that everyone enjoys the room they require in a truly lavish manner.",
            image: roomThree
        },
        {
            title:"Two King Bedrooms",
            subtitle: "Gratify yourself with the privacy and ample space of our Two King Bed guest rooms, which feature two distinct bedrooms, each furnished with a luxurious king-size bed. You can also relish a complimentary cup of coffee while watching your favorite shows on one of our premium LED TVs. This suite ensures that everyone enjoys the room they require in a truly lavish manner.",
            image: roomFour
        },
        {
            title:"Two King Bedrooms",
            subtitle: "Gratify yourself with the privacy and ample space of our Two King Bed guest rooms, which feature two distinct bedrooms, each furnished with a luxurious king-size bed. You can also relish a complimentary cup of coffee while watching your favorite shows on one of our premium LED TVs. This suite ensures that everyone enjoys the room they require in a truly lavish manner.",
            image: roomFive
        },
        {
            title:"Two King Bedrooms",
            subtitle: "Gratify yourself with the privacy and ample space of our Two King Bed guest rooms, which feature two distinct bedrooms, each furnished with a luxurious king-size bed. You can also relish a complimentary cup of coffee while watching your favorite shows on one of our premium LED TVs. This suite ensures that everyone enjoys the room they require in a truly lavish manner.",
            image: roomSix
        },
    ]


  return (
    <>
      <div className="hero bg-img-services">
        <HeroServices
          title="Discover Our Rooms!"
          subtitle="Experience comfort and luxury with our range of meticulously designed rooms."
        />
      </div>
      <section className="w-full min-h-[65vh]">
        <h1 className="text-center text-2xl text-black font-semibold mb-4">
          Explore
        </h1>
        <div className="max-m[70%] h-full flex flex-wrap mx-8 justify-center gap-8 pb-20">
            {rooms.map((room, index) => (
                <CardRoom
                    key={index}
                    title={room.title}
                    subtitle={room.subtitle}
                    image={room.image}
                />
            ))}
        </div>
      </section>
    </>
  );
}
