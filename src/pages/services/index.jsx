import { Link } from "react-router-dom";
import HeroServices from "../../component/HeroServices";

import service1 from "../../assets/images/service/pchel2.jpg";
import service2 from "../../assets/images/service/category-1.jpg";
import service3 from "../../assets/images/service/paa6.jpg";

export default function Services() {
  return (
    <>
      <div className="hero bg-img-services">
        <HeroServices />
      </div>

      <div className="hero min-h-[85vh] bg-slate-200 text-black">
        <div className="hero-content flex-col lg:flex-row gap-12 my-6">
          <div>
            <img className="max-w-sm rounded-lg " src={service1} alt="" />
            <h1 className="text-3xl font-semibold text-opacity-85  mt-6 mb-14">
              Restaurant
            </h1>
            <Link
              to="/services/restaurant"
              className="btn mt-6 bg-blue-800 text-white"
            >
              More information
            </Link>
          </div>
          <div>
            <img className="max-w-sm rounded-lg " src={service2} alt="" />
            <h1 className="text-3xl font-semibold text-opacity-85 mt-6 mb-14">
              Service Inclueded
            </h1>
            <Link
              to="/services/service-inclueded"
              className="btn mt-6 bg-blue-800 text-white"
            >
              More information
            </Link>
          </div>
          <div>
            <img className="max-w-sm rounded-lg " src={service3} alt="" />
            <h1 className="text-3xl font-semibold text-opacity-85 mt-6 mb-14">
              Service on request
            </h1>
            <Link
              to="/services/service-on-request"
              className="btn mt-6 bg-blue-800 text-white"
            >
              More information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
