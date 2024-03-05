import React, { useContext, useEffect } from "react";
import PostContext from "../PostContext";

function BtnPost({ inputText, setInputText }) {
  // const [listProperties, setListProperties] = useContext(PostContext);
  // Post Api tweets data
  // const getPostDatatoApi = async () => {
  //   const data = await fetch(
  //     `https://65ce02fcc715428e8b3fb9c2.mockapi.io/tweet`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(inputText),
  //     }
  //   );
  //   const response = await data.json();
  //   setInputText([...listProperties, response]);
  //   console.log([...listProperties, response]);
  // };
  // // Handle submit tweet function
  // const handlePostSubmit = () => {
  //   getPostDatatoApi();
  //   setInputText((prevInputText) => ({ ...prevInputText, tweet: "" }));
  // };
  return (
    <>
      <button className="bg-[#1A8CD8] text-white font-bold w-56 rounded-full h-10 mt-3 flex justify-center items-center hover:bg-[#1D9BF0]">
        Post
      </button>
    </>
  );
}

export default BtnPost;
