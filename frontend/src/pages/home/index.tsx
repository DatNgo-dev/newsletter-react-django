import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[7%_91%_2%] h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default index;
