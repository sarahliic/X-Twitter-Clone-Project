import React from "react";
import Search from "./Search";

function Trending() {
  return (
    <>
      <section className="h-screen ">
        <div className="grid">
          <div className="flex justify-center w-full ">
            <Search />
          </div>
          <div className="bg-[#F7F9F9] mt-7 rounded-xl w-[90%] place-self-center">
            <p className="font-bold text-black text-xl p-2 ps-4">
              What's happening
            </p>
            <div className="flex justify-center items-start flex-col w-full cursor-pointer hover:bg-[#eeebeb]">
              <p className="text-[#9b9a9a] text-sm ml-4">
                Trending in Saudi Arabia
              </p>
              <div className="flex flex-col items-end justify-end  w-[98%]">
                <img
                  src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="more"
                  className="w-4 filter-grayscale-[100%]"
                />
                <p className="font-bold text-black">المعلقة#</p>
              </div>
              <p className="text-[#9b9a9a] text-sm ml-4">4,353 posts</p>
            </div>
            {/* --2-- */}
            <div className="flex justify-center items-start flex-col w-full cursor-pointer hover:bg-[#eeebeb]">
              <p className="text-[#9b9a9a] text-sm ml-4">Trending. Sports</p>
              <div className="flex flex-col items-end justify-end  w-[98%]">
                <img
                  src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="more"
                  className="w-4 filter-grayscale-[100%]"
                />
                <p className="font-bold text-black">السعودية_ارجنتينا#</p>
              </div>
              <p className="text-[#9b9a9a] text-sm ml-4">10,353 posts</p>
            </div>
            <div className="flex justify-center items-start flex-col w-full cursor-pointer hover:bg-[#eeebeb]">
              <p className="text-[#9b9a9a] text-sm ml-4">
                Trending in Saudi Arabia
              </p>
              <div className="flex flex-col items-end justify-end  w-[98%]">
                <img
                  src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="more"
                  className="w-4 filter-grayscale-[100%]"
                />
                <p className="font-bold text-black">عيد_شوال#</p>
              </div>
              <p className="text-[#9b9a9a] text-sm ml-4">20,353 posts</p>
            </div>
            <div className="flex justify-center items-start flex-col w-full cursor-pointer hover:bg-[#eeebeb] ">
              <p className="text-[#9b9a9a] text-sm ml-4">Trending.Food</p>
              <div className="flex flex-col items-end justify-end  w-[98%]">
                <img
                  src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="more"
                  className="w-4 filter-grayscale-[100%]"
                />
                <p className="font-bold text-black">الكبسة#</p>
              </div>
              <p className="text-[#9b9a9a] text-sm ml-4">2,353 posts</p>
            </div>
            <div className="flex justify-center items-start flex-col w-full cursor-pointer hover:bg-[#eeebeb] ">
              <p className="text-[#9b9a9a] text-sm ml-4">
                Trending in Saudi Arabia
              </p>
              <div className="flex flex-col items-end justify-end  w-[98%]">
                <img
                  src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="more"
                  className="w-4 filter-grayscale-[100%]"
                />
                <p className="font-bold text-black">مدينة_القدية#</p>
              </div>
              <p className="text-[#9b9a9a] text-sm ml-4">14,353 posts</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trending;
