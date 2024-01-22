import React from "react";
import AccountName from "./AccountName";

function NavBar() {
  return (
    <>
      <section className="h-screen w-[25%] bg-[#FFFFFF] border border-black">
        <div className="flex justify-center items-center flex-col ">
          <ul className="w-[70%] pt-4  flex  justify-around">
            <div className="w-[90%]">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
                alt="x logo"
                className="w-7 mb-4 ml-4 cursor-pointer "
              />
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/263/263115.png"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">Home</p>
              </li>
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/128/3031/3031293.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">Explore</p>
              </li>
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/128/11331/11331198.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">Notifications</p>
              </li>
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/128/4546/4546924.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">Messages</p>
              </li>
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/128/2961/2961501.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">Lists</p>
              </li>
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/128/747/747376.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">Profile</p>
              </li>
              <li className="flex items-center p-4 w-max gap-x-4 pt-3 pb-3 rounded-full hover:bg-[#F1F1F1] cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/128/570/570223.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="icon"
                  className="w-7"
                />
                <p className="font-sans font-medium text-lg">More</p>
              </li>
              <button className="bg-[#1A8CD8] text-white font-bold w-56 rounded-full h-10 mt-3 flex justify-center items-center hover:bg-[#1D9BF0]">
                Post
              </button>
            </div>
          </ul>
        </div>
        <div className="flex justify-center items-center h-28">
          <AccountName />
        </div>
      </section>
    </>
  );
}

export default NavBar;
