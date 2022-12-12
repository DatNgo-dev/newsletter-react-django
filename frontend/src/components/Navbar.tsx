import logo from "../assets/logo-transparent.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-full px-2 xl:px-5 shadow-xl z-[100]">
      <img src={logo} alt="" width={125} height={50} />

      <nav className="flex justify-center gap-8">
        <NavLink
          to="/"
          className="lg:text-3xl text-lg text-orange-500 font-semibold"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "orange" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="lg:text-3xl text-lg text-orange-500 font-semibold"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "orange" };
          }}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
