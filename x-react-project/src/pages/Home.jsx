import React from "react";
import NavBar from "../components/NavBar";
import Trending from "../components/Trending";
import Posted from "../components/Posted";
import Post from "../components/Post";

function Home() {
  return (
    <>
      <section className="grid grid-cols-[25%_minmax(200px,_1.5fr)_1fr]">
        <div className="sticky top-0 h-min">
          <NavBar />
        </div>
        <div className=" border border-[#e7e7e8]">
          <div
            className="sticky top-0 border border-[#E7E7E8] flex justify-center items-center p-1 cursor-pointer hover:bg-[#ebebebe1]"
            style={{
              background: "rgba(225,225,225, 0.0)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p className="font-bold  p-3 after:block after:absolute after:h-1 after:w-16 after:bg-[#1A8CD8] after:bottom-1">
              For you
            </p>
          </div>
          <div>
            <Post />
          </div>
          <div>
            <Posted />
          </div>
        </div>
        <div className="sticky top-0 h-max">
          <Trending />
        </div>
      </section>
    </>
  );
}

export default Home;
