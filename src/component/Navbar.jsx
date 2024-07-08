import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-slate-100 text-black">
        <div className="navbar-start">
          <details className="dropdown">
            <summary className="m-1 btn btn-circle btn-ghost md:hidden">
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </summary>
            <ul className="menu dropdown-content mt-3 z-[1] p-4 shadow bg-slate-100 rounded-box w-80">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </details>

          <a className="btn btn-ghost text-xl">Hotel Harisenin</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="dropdown dropdown-hover">
              <Link to="/services">Services</Link>
              <ul className="dropdown-content z-[1] mt-4 p-2 pt-0 bg-slate-100 border shadow pr-16">
                <li>
                  <Link to="/services/restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link to="/services/service-inclueded">Service included</Link>
                </li>
                <li>
                  <Link to="/services/service-on-request">
                    Service on request
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/auth/signin"
            className="btn lg:px-6 lg:h-11 btn-sm h-10 px-5 bg-blue-600 text-white hover:bg-orange-200 border-none"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
