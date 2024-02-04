import React, { useEffect, useState } from "react";
import Actions from "./Actions";

function Posted() {
  const [posted, setPosted] = useState([{}]);
  const getTweets = async () => {
    const data = await fetch(
      "https://65b2a1429bfb12f6eafe3674.mockapi.io/tweets"
    );
    const tweets = await data.json();
    console.log(tweets);
    setPosted(tweets);
  };

  useEffect(() => {
    getTweets();
  }, []);
  return (
    <>
      <section>
        {posted.map((item) => {
          return (
            <div
              className="bg-white border border-[#eeebeb] hover:bg-[#f8f6f6]"
              key={item.id}
            >
              <div className="flex justify-start items-center p-3 ">
                <div className="rounded-full  w-10 flex items-end mt-3">
                  <img
                    src="https://cdn-icons-png.freepik.com/128/1144/1144760.png?ga=GA1.1.554408806.1703345920&semt=ais"
                    alt="user profile image"
                    className="object-fit rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex justify-center  items-start ml-2 pe-3 gap-x-1 cursor-pointer">
                  <p className="font-bold text-[#0e0d0d]">Sarah</p>
                  <p className="text-sm text-[#9c9c9c]">@Sarahalqahtani</p>
                  <p className="text-sm text-[#9c9c9c]">.4h</p>
                </div>
                <div className="flex justify-end  w-96 ">
                  <img
                    src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                    alt="more"
                    className="w-4 ml-11 cursor-pointer "
                  />
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <div className="w-[80%] ">
                  <p className="text-justify">{item.tweets}</p>
                </div>
              </div>
              <div>
                <Actions />
              </div>
            </div>
          );
        })}

        {/* --------------------- */}
      </section>
    </>
  );
}

export default Posted;
