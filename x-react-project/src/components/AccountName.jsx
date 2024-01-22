import React from "react";

function AccountName() {
  return (
    <>
      <section>
        <div className="flex justify-center items-center ">
          <div className=" flex justify-around items-center w-60 cursor-pointer rounded-full hover:bg-[#E7E7E8] ">
            <div className=" flex justify-center items-center gap-x-5">
              <div className="rounded-full  w-14">
                <img
                  src="https://cdn-icons-png.freepik.com/128/1144/1144760.png?ga=GA1.1.554408806.1703345920&semt=ais"
                  alt="user profile image"
                  className="object-fit rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">Name</p>
                <p className="text-[#a0a0a0] text-sm">@userName</p>
              </div>
            </div>
            <img
              src="https://cdn-icons-png.freepik.com/128/3661/3661476.png?ga=GA1.1.554408806.1703345920&semt=ais"
              alt="more"
              className="w-4 ml-11"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AccountName;
