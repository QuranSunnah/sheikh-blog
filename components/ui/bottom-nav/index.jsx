import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Bottomnav() {
    return (
      <>
			<div className="bg-sky-50  w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Quran<span className="text-blue-600">Sunnah</span>
						</p>
            <img src="" ></img>
						
					</ul>
				</div>
				
			
				<div className="p-5 ">
					<h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, </h1>
				</div>
        <div>
        <div className="flex gap-6 pb-5">
              <a href="https://www.facebook.com/sheikhrafiqmadani" target="blank">
              <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600"  />
              </a>
							
							<a href="https://www.youtube.com/watch?v=jrGur3uRcZI" target="blank">
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </a>
						
						</div>
        </div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					©  All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						QuranSunnah{" "}
					</span>
				</h1>
			</div>
		</>
     
    );
  }
  
  export default Bottomnav;
  