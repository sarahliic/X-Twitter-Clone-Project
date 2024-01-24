import React from "react";

function Acted() {
  return (
    <>
      <div className="w-full flex justify-around items-center ">
        <div className="flex items-center gap-x-1  ">
          <div className="flex justify-center items-center p-1 cursor-pointer hover:bg-[#ebebebe1]">
            <p className="font-bold  p-3 hover:after:block  hover:after:absolute  hover:after:h-1  hover:after:w-10  hover:after:bg-[#1A8CD8]  hover:after:bottom-2">
              Posts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-1  ">
          <div className="flex justify-center items-center p-1 cursor-pointer hover:bg-[#ebebebe1]">
            <p className="font-bold  p-3 hover:after:block  hover:after:absolute  hover:after:h-1  hover:after:w-14  hover:after:bg-[#1A8CD8]  hover:after:bottom-2">
              Replies
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-1  ">
          <div className="flex justify-center items-center p-1 cursor-pointer hover:bg-[#ebebebe1]">
            <p className="font-bold  p-3 hover:after:block  hover:after:absolute  hover:after:h-1  hover:after:w-10  hover:after:bg-[#1A8CD8]  hover:after:bottom-2">
              Likes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acted;
