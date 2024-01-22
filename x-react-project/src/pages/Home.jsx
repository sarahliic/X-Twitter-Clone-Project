import React from "react";
import NavBar from "../components/NavBar";
import Trending from "../components/Trending";
import Posted from "../components/Posted";

function Home() {
  return (
    <>
      <section className="grid grid-cols-[25%_minmax(200px,_1.5fr)_1fr]">
        <div>
          <NavBar />
        </div>
        <div className=" border border-[#E7E7E8]">
          <div className="border border-[#E7E7E8] flex justify-center items-center relative p-1 cursor-pointer hover:bg-[#ebebebe1]">
            <p className="font-bold  p-3 after:block after:absolute after:h-1 after:w-16 after:bg-[#1A8CD8] after:bottom-1">
              For you
            </p>
          </div>
          <div>
            <Posted />
          </div>
        </div>
        <div>
          <Trending />
        </div>
      </section>
    </>
  );
}

export default Home;
