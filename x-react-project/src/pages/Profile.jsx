import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Trending from "../components/Trending";
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

            <p className=" ps-5 text-xs text-[#c9c9c9e1]">125 post</p>
          </div>
          <div>
            <div>
              <img src="" alt="profile background image" />
            </div>
            <div>
              <img src="" alt="personal image" />
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
