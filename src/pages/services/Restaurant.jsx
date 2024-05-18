import HeroServices from "./components/HeroServices";
import ServiceHead from "./components/ServiceHead";
import ImgRes1 from "../../assets/images/service/appetizers.jpg";
import ImgRes2 from "../../assets/images/service/spaghetti-carbonara.jpg";
import ImgRes3 from "../../assets/images/service/pizza.jpg";
import ImgRes4 from "../../assets/images/service/green-salad.jpg";

export default function Restaurant() {
  return (
    <>
      <div className="hero bg-img-res">
        <HeroServices />
      </div>
      <ServiceHead />

      <div className="hero min-h-[20vh] bg-gray-200 text-black  pt-6">
        <h1 className="text-center font-bold font-serif text-3xl ">Menu</h1>
      </div>
      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gray-200 items-end p-8 md:p-12">
            <div>
              <img src={ImgRes1} alt="" />
            </div>
          </div>
          <div className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Appetizers</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                a specialty of harisenin hotel. 85% similar in appearance to
                tapoyaki from korea. but this tastes better.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" className="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgRes2} alt="" />
            </div>
          </div>
          <div id="2" className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>First courses</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                LASAGNA BOLOGNESE <br /> <br />
                SPAGHETTI CARBONARA <br /> <br />
                TAGLIATELLE WITH MEAT SAUCE <br /> <br />
                RISOTTO MILANESE <br /> <br />
                PASTA AND CHICKPEA SOUP <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" className="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgRes3} alt="" />
            </div>
          </div>
          <div id="2" className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Second Courses</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                ROAST VEAL WITH POTATOES <br /> <br />
                CHICKEN CURRY WITH BASMATI RICE <br /> <br />
                EGGPLANT PARMIGIANA <br /> <br />
                PIZZA WITH EMILIAN FIOCCHETTO <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-screen">
        <div className="grid lg:grid-cols-2">
          <div id="1" class="bg-gray-200 p-8 md:p-12">
            <div>
              <img src={ImgRes4} alt="" />
            </div>
          </div>
          <div id="2" className="bg-gray-200 p-8 md:p-12">
            <div className="">
              <h1 className="text-black text-3xl font-extrabold mb-2">
                <i>Side dishes</i>
              </h1>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-900 mb-4">
                PURÈ DI PATATE <br /> <br />
                GRILLED VEGETABLES <br /> <br />
                GREEN SALAD <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
