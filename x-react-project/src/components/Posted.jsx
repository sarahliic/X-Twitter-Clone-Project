import React, { useEffect, useState } from "react";
import Actions from "./Actions";
function Posted({ tweets, setTweets }) {
  const [loading, setLoading] = useState(true);
  // Here Git the data
  const fetchPost = async () => {
    const response = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/tweet`
    );
    const data = await response.json();
    console.log(data);
    setTweets(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <section>
        {loading ? (
          /* JSX code when loading is true */
          <div>Loading...</div>
        ) : (
          /* JSX code when loading is false */
          tweets.map((item) => {
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
                    <p className="text-justify">{item.inputText}</p>
                  </div>
                </div>
                <div>
                  <Actions />
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

export default Posted;
