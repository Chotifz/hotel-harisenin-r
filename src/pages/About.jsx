import barImg from "../assets/images/about/Bar.png";
import pantaiImg from "../assets/images/about/Pantai.jpg";
import poolImg from "../assets/images/about/pool.png";
import spaImg from "../assets/images/about/spa.png";

export default function About() {
  return (
    <>
      <main className="bg-slate-50">
        <div className="hero min-h-screen bg-slate-700">
          <div className="hero-content gap-16 flex-col lg:flex-row">
            <img src={pantaiImg} className="max-w-sm rounded-lg shadow-2xl " />
            <div className="ml-1 text-gray-300">
              <div className="max-w-md">
                <h1 className="text-3xl font-bold">About Us</h1>
                <p className="mt-1 font-normal"> Welcome to Harisenin Hotel</p>
                <h2 className="text-xl font-bold mt-3">Who Are We?</h2>
                <p className="mt-1">
                  Hotel Harisenin is the premier destination for travelers
                  seeking comfort and warmth of home in the heart of the city.
                  With a strategic location and outstanding amenities, we are
                  committed to providing an unforgettable stay experience to
                  each of our guests.
                </p>
              </div>
              <div className="max-w-md">
                <h2 className="mt-3 text-xl font-bold">
                  Our Vision And Mission
                </h2>
                <p className="mt-1">
                  Our vision is to be the top choice for travelers in Indonesia,
                  delivering five-star service and elevating hospitality
                  standards in the region. Our mission is to provide
                  unparalleled stay experiences by paying attention to detail
                  and fulfilling the needs of every guest.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-co">
          <div className="h-64">
            <div>
              <h2 className="text-center text-3xl font-bold mt-10">
                Facilities
              </h2>
            </div>

            <div className="items-start flex flex-row justify-center mt-10">
              <div>
                <div className="mx-8">
                  <img src={poolImg} className="h-20" />
                </div>
                <p className="text-center font-semibold">Swimming Pool</p>
              </div>
              <div>
                <div className="mx-8">
                  <img src={spaImg} className="h-20" />
                </div>
                <p className="text-center font-semibold">Spa</p>
              </div>
              <div>
                <div className="mx-8">
                  <img src={barImg} className="h-20" />
                </div>
                <p className="text-center font-semibold">Bar</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
