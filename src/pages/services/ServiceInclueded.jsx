import HeroServices from "../../component/HeroServices";
import ServiceHead from "../../component/ServiceHead";
import ImgSi1 from "../../assets/images/service/check-in-check-out.jpg";
import ImgSi2 from "../../assets/images/service/breakfast.jpg";
import ImgSi3 from "../../assets/images/service/daily-cleaning-room.jpg";
import ImgSi4 from "../../assets/images/service/reserved-parking.jpg";

export default function ServiceInclueded() {
  return (
    <>
      <div className="hero bg-img-si">
        <HeroServices />
      </div>
      <ServiceHead />

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gray-200 items-end p-8 md:p-12">
            <div>
              <img src={ImgSi1} alt="" />
            </div>
          </div>
          <div className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Check-in e ChecK-out</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                it is possible to check in between 2 p.m. and 8 p.m. Upon
                check-in, Guests will be required to pay a deposit, which will
                be refunded at check-out or offset against services used and not
                yet paid for. <br />
                <br /> Check-in: between 2 p.m. and 8 p.m. - Late Check-in:
                €50.00 <br /> <br /> Check-out: by 10:30 a.m. - Late Check-out:
                €50.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" class="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgSi2} alt="" />
            </div>
          </div>
          <div id="2" class="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Breakfast</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                Our international breakfast offers a rich buffet and can be
                enjoyed on the terrace overlooking the lake or in the dedicated
                breakfast room, with flexible extended hours until late morning
                (8 a.m. - 10:30 a.m.).
                <br /> <br /> We offer a selection of products prepared daily by
                our staff with top-quality ingredients: from croissants and hot
                breads, to jams, cheeses, cereals and yogurt, juices, tea
                selection, espresso, cappuccino and chocolate. <br /> <br /> You
                can order tasty extras: for example, eggs freshly cooked to your
                taste, accompanied by vegetables, toast or bacon, freshly
                squeezed juices, fruit salads... Special requests are always
                welcome. With advance notice, we can make available to your
                products for celiac disease and food intolerances.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" className="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgSi3} alt="" />
            </div>
          </div>
          <div id="2" class="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Daily Cleaning Room</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                Housekeeping staff will clean the room daily, replacing linens
                and toiletries when necessary. <br /> <br />
                Daily housekeeping service is available between 09:30 am and 2
                pm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" className="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgSi4} alt="" />
            </div>
          </div>
          <div id="2" className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Reserved Parking</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                Covered parking spaces are available to our guests: security is
                guaranteed by the video surveillance system. <br /> <br />{" "}
                Electric vehicle charging stations can be used for any type of
                vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
