import HeroServices from "../../component/HeroServices";
import ImgSon1 from "../../assets/images/service/pchel2.jpg";
import ImgSon2 from "../../assets/images/service/pexels-pietro-jeng-671956.jpg";
import ImgSon3 from "../../assets/images/service/pexels-harrison-haines-2869667.jpg";
import ServiceHead from "../../component/ServiceHead";
export default function ServicesOnRequest() {
  return (
    <>
      <div className="hero bg-img-son">
        <HeroServices />
      </div>
      <ServiceHead />
      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gray-200 items-end p-8 md:p-12">
            <div>
              <img src={ImgSon1} alt="" />
            </div>
          </div>
          <div className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Restaurant on the lake</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                The restaurant is dedicated to our guests. <br />
                Dinner is served on the veranda or outdoors, on our splendid
                terrace overlooking the lake. <br />
                The menu is à la carte and offers dishes and excellence of
                traditional Italian cuisine: it is updated frequently, following
                the different seasons. <br />
                Reservations are welcome. We ask you to inform us in advance
                about allergies and intolerances. <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div class="grid lg:grid-cols-2">
          <div id="1" className="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgSon2} alt="" />
            </div>
          </div>
          <div id="2" className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Room Service</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                For those who love small attentions and pamper themselves with
                the gestures that make you feel at home, room service is
                available. <br />
                An opportunity to taste breakfast or dinner in the privacy of
                your room, enjoying a spectacular panorama, with the freedom to
                browse the morning newspaper or entertain yourself with
                television, comfortably in pajamas or after a refreshing shower,
                in complete comfort. <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" className="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgSon3} alt="" />
            </div>
          </div>
          <div id="2" className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Transfer with driver</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                Personalized transfer services are available on request, to and
                from airports, railway stations, villas, shops, hotels or
                restaurants. <br />
                Our van has a capacity of up to 7 people and our driver will be
                at your disposal. <br />
                It is also possible to book the service for the whole day.{" "}
                <br />
                Helicopter transfers are organized. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
