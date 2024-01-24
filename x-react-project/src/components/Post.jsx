import React from "react";
import BtnPost from "./BtnPost";
import Action from "../assets/images/actions.png";
function Post() {
  return (
    <>
      <section>
        <div className="bg-white border border-[#eeebeb] ">
          {/* <div className="flex justify-between items-center ">
            <p>X</p>
            <p>Drafts</p>
          </div> */}
          <div className="flex justify-start items-center pl-3 ">
            <div className="rounded-full w-12 flex items-end mt-3 border-4 border-[#faf7f7]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tZt2GTv3xusdfAEeIuJj-Po7TUIxUEaTzw&usqp=CAU"
                alt="user profile image"
                className="object-fit rounded-full cursor-pointer"
              />
            </div>
            <div className="flex justify-center  items-start ml-2 pe-3 gap-x-1 cursor-pointer">
              <p className=" text-sm font-medium w-24 text-center rounded-full text-[#1A8CD8] border border-[#1A8CD8]">
                Everyone
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-[90%] ">
              <input
                type="text"
                placeholder="What is happing?!"
                className="outline-none text-justify text-[#535353e1] text-lg block h-14 w-full"
              />
            </div>
          </div>
          <div className="relative ">
            <div className="absolute bottom-1">
              <img src={Action} alt="actions icon" />
            </div>
            <div className="flex justify-end w-16 text-base  relative right-[-88%] mb-1 ">
              <BtnPost />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Post;
