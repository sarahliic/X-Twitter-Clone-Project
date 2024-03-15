import React, { useEffect, useState } from "react";
import Actions from "./Actions";

function Posted({ tweets, setTweets, inputText }) {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  // Here Get the data
  const fetchPost = async () => {
    const response = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/tweet`
    );
    const data = await response.json();
    setTweets(data);
    setLoading(false);
  };
  // Here Delete the data
  const deleteTweetPost = async (id) => {
    const response = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/tweet/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      setTweets(
        tweets.filter((tweet) => {
          return tweet.id !== id;
        })
      );
    } else {
      return;
    }
    // alert("Posts deleted successfully");
  };
  //Set Favorite Tweets
  const setPostFavorites = async (tweetId, tweetText) => {
    const api = await fetch(
      `https://65b2a1429bfb12f6eafe3674.mockapi.io/likes`,
      {
        method: "POST",
        body: JSON.stringify({
          tweetId: tweetId,
          tweetText: tweetText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const favoritesPost = await api.json();
    setFavorites((favorites) => [favoritesPost, ...favorites]);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <section>
        {loading ? (
          /* JSX code when loading is true */
          <div className="flex justify-center items-center pt-20 pb-20">
            <span className="loading loading-spinner text-info"></span>
          </div>
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
                    <ul className="menu menu-horizontal px-4">
                      <li>
                        <details>
                          <summary>
                            {/* <img
                              src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
                              alt="more"
                              className="w-4 ml-11 cursor-pointer "
                            /> */}
                          </summary>
                          <ul className="p-2 bg-base-500 rounded-md border border-[#a09e9e73] relative z-10">
                            <li>
                              <a
                                className="text-xs text-red-600 font-bold "
                                onClick={() => deleteTweetPost(item.id)}
                              >
                                {" "}
                                delete
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center items-center ">
                  <div className="w-[80%] ">
                    <p className="text-justify">{item.inputText}</p>
                  </div>
                </div>
                <div>
                  <Actions
                    setPostFavorites={setPostFavorites}
                    tweetId={item.id}
                    tweetText={item.inputText}
                  />
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
