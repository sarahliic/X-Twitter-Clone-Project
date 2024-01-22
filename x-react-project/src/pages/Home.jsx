import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <section>
        {/* Side NavBar */}
        <div>
          <NavBar />
        </div>
        <nav className="flex justify-center absolute top-0  border border-black w-screen">
          <div className="border border-red-600">
            <p>For you</p>
          </div>
          <div className="border border-green-700">
            <input type="text" placeholder="search" />
          </div>
        </nav>
      </section>
    </>
  );
}

export default Home;
