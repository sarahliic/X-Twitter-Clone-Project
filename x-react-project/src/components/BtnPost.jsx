import React, { useEffect } from "react";

function BtnPost({ setOnAddTweet, setInputText, tweetsText }) {
  const postTweets = async () => {
    try {
      const response = await fetch(
        "https://65b2a1429bfb12f6eafe3674.mockapi.io/tweets",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tweetsText),
        }
      );

      if (!response.ok) {
        throw new Error("Error posting data");
      }

      const tweets = await response.json();
      console.log(tweets);
      setOnAddTweet(tweets);
      // setOnAddTweet({
      //   ...tweets,

      //   text: inputText,
      // });
    } catch (error) {
      console.error("there is error: " + error);
    }
  };

  // Handle click button
  const handlePostBtn = () => {
    console.log("it's work");
    setInputText("");
    postTweets();
  };
  return (
    <>
      <button
        onClick={handlePostBtn}
        className="bg-[#1A8CD8] text-white font-bold w-56 rounded-full h-10 mt-3 flex justify-center items-center hover:bg-[#1D9BF0]"
      >
        Post
      </button>
    </>
  );
}

export default BtnPost;
