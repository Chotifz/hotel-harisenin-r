import widowp from "../../../assets/images/hompage/windowp.jpg";

export default function Content() {
  return (
    <div>
      <div className="pb-24 bg-white">
        <div className="relative flex flex-col lg:flex-row">
          <div className="flex w-full px-10 flex-col max-md:px-6 justify-center lg:w-1/2 ">
            <h1 className=" font-bold text-lg text-black mb-3">
              WELCOME TO HOTEL HARISENIN
            </h1>
            <p className="py-6 font-medium text-base text-slate-500">
              {" "}
              Hotel Harisenin, seamlessly blends comfort and luxury, providing
              guests with an unforgettable stay. Nestled in a prime location
              with breathtaking views, this hotel offers a serene and lavish
              retreat. Upon arrival, guests are welcomed by elegant architecture
              that exudes sophistication and charm. The spacious and opulent
              lobby sets the tone for a warm and professional reception by the
              experienced hotel staff. The rooms are tastefully designed with
              modern amenities to ensure maximum comfort. Each room is adorned
              with elegant touches and charming details, creating a cozy and
              inviting atmosphere. Luxurious bedding with high-quality linens
              guarantees a restful night's sleep.
            </p>
          </div>
          <div className=" flex w-full justify-center lg:w-1/2">
            <img
              src={widowp}
              className="max-w-sm justify-items-center rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
