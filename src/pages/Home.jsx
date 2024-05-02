import becraund from "../assets/images/hompage/bedrooml.jpg"
import widowp from "../assets/images/hompage/windowp.jpg"
import img01 from "../assets/images/hompage/pchel2.jpg"
import img02 from "../assets/images/hompage/paa6.jpg"
import img03 from "../assets/images/hompage/room01.jpg"

export default function Home() {
  return (
    <>
    
    <main className="flex flex-col relative bg-white">
        <section id="hero" class=" " >
            <div className="relative hero " >
              <img
              src={becraund}
              // className="background-image"
              />
                <div className="overlay min-h-screen "></div>
                <div className="content text-center text-neutral-content m-7 justify-start ">
                  <div className="max-w-md">
                    <h1 className="mb-2 text-5xl font-semibold text-black">Start Your Events At Traveldoorz</h1>
                    <p className="mb-5 text-gray-600 font-sans">Discover Unfrogetable Moments at Traveldoorz 
                        Enjoy your gatway to Exquisite Experience with us</p>
                    <button className="btn btn-neutral">Get Started</button>
                  </div>
                </div> 
              </div>

              <div id="check" className="flex flex-col items-center bottom-0 left-1/2 px-8 py-4 bg-white
              ">
                <form className=" justify-around items-center inset-x-0 top-0 bottom-0 h-16  gap-8 text-black lg:flex " action="">
                  <div className="flex flex-col mb-4"><label for="check-in">Check-In</label>
                  <input className="p-2 rounded-lg" type="date" />
        </div>
                  <div className="flex flex-col mb-4"><label for="check-out">Check-Out</label> <input className="p-2 rounded-lg" type="date" /></div>
                  <div className="flex flex-col mb-4"><label for="">Room</label> <input className="p-2 rounded-lg" type="text" /></div>
                  <button className="bg-slate-700 px-3 py-3 rounded-lg text-white">Check Availability</button>
                </form>
            </div>
        </section>

        <section id="about" className="flex justify-center pt-20 pb-24 bg-white">
            <div className="flex container flex-row ">
            <div className="flex flex-col bg-white lg:flex-row">
                <div className="flex w-full flex-col justify-center lg:w-1/2 ">
                    <h1 className=" font-bold uppercase text-lg text-black mb-3">Welcome to hotel Traveldoorz</h1>
                    <p className="py-6 font-medium text-base text-slate-500"> Welcome to Traveldoorz, seamlessly blends comfort and luxury, providing guests with an unforgettable stay. Nestled in a prime location with breathtaking views, this hotel offers a serene and lavish retreat. Upon arrival,
                        guests are welcomed by elegant architecture that exudes sophistication and charm. The spacious and opulent lobby sets the tone for a warm and professional reception by the experienced hotel staff. The rooms are tastefully
                        designed with modern amenities to ensure maximum comfort. Each room is adorned with elegant touches and charming details, creating a cozy and inviting atmosphere. Luxurious bedding with high-quality linens guarantees a
                        restful night's sleep.</p>
                  </div>
                <div className=" flex w-full justify-center lg:w-1/2">
                  <img src={widowp} 
                  className="max-w-sm justify-items-center rounded-lg shadow-2xl"/>
                </div>
              </div>
            </div>
        </section>

      </main>
    </>
  );
}
