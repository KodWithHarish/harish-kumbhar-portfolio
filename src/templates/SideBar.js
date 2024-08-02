import React from "react";
import Logo from "../assets/imgs/me.jpg";

function SideBar({ className }) {
  return (
    <div className={`${className} relative`}>
      <img
        src={Logo}
        className="absolute top-[-50%] left-1/2 w-44 rounded-full transform -translate-x-1/2 mt-24"
        alt="logo"
      />
      <div className="bg-yellow-100 h-screen pt-[50%]">
        <h1>SideBar</h1>
      </div>
    </div>
  );
}

export default SideBar;
