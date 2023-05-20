import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const TopNav = () => {
  return (
    <>
      <div className="bg-emerald-800 py-1">
        <div className=" flex items-center justify-around">
          <p className="text-white font-bold text-sm ">
            About<span className="text-blue-500">Us</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-6 pb-2">
              <a
                href="https://www.facebook.com/sheikhrafiqmadani"
                target="blank"
              >
                <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600 text-white mt-2" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=jrGur3uRcZI"
                target="blank"
              >
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 text-white mt-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
