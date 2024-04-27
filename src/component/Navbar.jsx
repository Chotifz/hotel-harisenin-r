import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-slate-100 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52"
            >
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
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Hotel Harisenin</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li className="dropdown dropdown-hover">
              <Link to="/services">Services</Link>
              <ul className="dropdown-content z-[1] mt-4 p-2 pt-0 bg-slate-100 border shadow pr-16">
                <li>
                  <a href="#">Restaurant</a>
                </li>
                <li>
                  <a href="#">Service included</a>
                </li>
                <li>
                  <a href="#">Service on request</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-8 bg-blue-600 text-white hover:bg-orange-200 border-none">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
