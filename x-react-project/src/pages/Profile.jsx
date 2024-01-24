import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Trending from "../components/Trending";
import Acted from "../components/Acted";

function Profile() {
  return (
    <>
      <section className="grid grid-cols-[25%_minmax(200px,_1.5fr)_1fr]">
        <div className="sticky top-0 h-min">
          <NavBar />
        </div>
        {/* Start Profile page */}
        <div className=" border border-[#e7e7e8]">
          <div
            className="sticky top-0 border border-[#E7E7E8] flex justify-center items-start flex-col p-1 cursor-pointer hover:bg-[#ebebebe1]"
            style={{
              background: "rgba(225,225,225, 0.0)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p className="font-bold text-xl ps-5"> Sarah🩷</p>

            <p className=" ps-5 text-xs text-[#8d8d8de1]">125 post</p>
          </div>
          <div>
            <div className="relative">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/024/992/580/small/globalization-and-communication-concept-earth-and-luminous-rays-3d-rendering-photo.jpg"
                  alt="profile background image"
                  className="w-full"
                />
              </div>
              <div className="rounded-full  w-28 absolute bottom-[-20%] left-6 z-10 border-4 border-[#eeecec]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tZt2GTv3xusdfAEeIuJj-Po7TUIxUEaTzw&usqp=CAU"
                  alt="user profile image"
                  className="object-fit rounded-full"
                />
              </div>
            </div>

            <div>
              <div className=" flex justify-end items-end p-3 pr-7">
                <p className="text-black font-bold border border-[#d4d3d3] rounded-full p-1 w-28 text-center cursor-pointer hover:bg-[#ebebebe1]">
                  Edit profile
                </p>
              </div>
              <ul className="ml-6">
                <li className="font-bold text-xl text-black">Sarah🩷</li>
                <li className=" text-base text-[#8d8d8de1] ">
                  @sarahalqahtani
                </li>
              </ul>
              <div className="flex justify-center items-center h-20">
                <div className="w-[90%] ">
                  <p className="text-left">
                    I make videos, dev tools, companies, and investments.
                    Founder of @pingdotgg (YC W22)
                  </p>
                </div>
              </div>
              <div className="ml-6">
                <p className="text-[#1A8CD8]">Translate bio</p>
              </div>
              <div className="ml-6 h-10 flex items-center">
                <p className="text-[#8d8d8de1]">Joind March 2017</p>
              </div>
              <div className="ml-6 flex  items-center gap-x-5">
                <p className="text-[#8d8d8de1]">
                  <span className="text-black"> 103 </span>
                  Following
                </p>
                <p className="text-[#8d8d8de1]">
                  <span className="text-black"> 233 </span>
                  Followers
                </p>
              </div>
            </div>
            <div>
              <Acted />
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-max">
          <Trending />
        </div>
      </section>
    </>
  );
}

export default Profile;
