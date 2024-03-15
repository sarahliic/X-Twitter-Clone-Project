import React, { useEffect, useRef, useState } from "react";
import Heart from "../assets/images/heart.png";

function Actions({ setPostFavorites, tweetId, tweetText }) {
  const heartRef = useRef(null);
  const [likedPosts, setLikedPosts] = useState(
    JSON.parse(localStorage.getItem("likedPosts")) || []
  );
  const isLiked = likedPosts.includes(tweetId);

  useEffect(() => {
    if (isLiked) {
      heartRef.current.src = Heart;
    } else {
      heartRef.current.src =
        "https://cdn-icons-png.freepik.com/128/6521/6521659.png?ga=GA1.1.554408806.1703345920&semt=ais";
    }
  }, [isLiked]);

  const handleLikesPost = () => {
    setPostFavorites(tweetId, tweetText);
    if (isLiked) {
      const updatedLikedPosts = likedPosts.filter((post) => post !== tweetId);
      setLikedPosts(updatedLikedPosts);
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
    } else {
      const updatedLikedPosts = [...likedPosts, tweetId];
      setLikedPosts(updatedLikedPosts);
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
    }
  };

  // localStorage.clear();
  return (
    <>
      <div className="w-full flex justify-around items-center ">
        <div className="flex items-center gap-x-1  ">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/128/3942/3942698.png?ga=GA1.1.554408806.1703345920&semt=ais"
              alt="comments icon"
              className="w-4"
            />
          </div>
          <p>8</p>
        </div>
        <div className="flex items-center gap-x-1  ">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/128/3674/3674815.png?ga=GA1.1.554408806.1703345920&semt=ais"
              alt="retween icon"
              className="w-4"
            />
          </div>
          <p>9</p>
        </div>
        <div className="flex items-center gap-x-1  ">
          <div>
            <img
              ref={heartRef}
              src={
                isLiked
                  ? Heart
                  : "https://cdn-icons-png.freepik.com/128/6521/6521659.png?ga=GA1.1.554408806.1703345920&semt=ais"
              }
              alt="heart icon"
              className="w-4 cursor-pointer"
              onClick={() => handleLikesPost()}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-1  ">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/128/3580/3580382.png?ga=GA1.1.554408806.1703345920&semt=ais"
              alt="share icon"
              className="w-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Actions;
