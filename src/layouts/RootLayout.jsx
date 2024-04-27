import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
