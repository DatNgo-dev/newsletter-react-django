import React from "react";
import Button from "./Button";
import vectorImage from "../assets/freepik-image.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="justify-self-center self-center p-5 flex flex-col gap-4">
        <h1 className="text-6xl lg:text-8xl self-center text-orange-500 font-bold opacity-90">Welcome!</h1>
        <p className="text-md lg:text-2xl self-center text-orange-700">
          Join our newsletter service to stay up to date with the latest news in
          IT. If you are interested then please click the subscribe button to receive daily news article via your email
        </p>

        <Button style="self-center text-white font-bold">
          <Link to="/signup">Subscribe</Link>
        </Button>
        
      </div>

      <div className="rounded-xl h-full w-full justify-self-center self-center overflow-hidden">
        <img
          src={vectorImage}
          alt="Vector Image"
          className="object-fill h-full w-full"
        />
      </div>
    </div>
  );
};

export default Header;
