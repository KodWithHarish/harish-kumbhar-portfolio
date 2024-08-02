import React from "react";
import Logo from "../assets/imgs/logo.png";
function TopBar() {
  return (
    <div className="inline-flex">
      <img src={Logo} className="p-1 w-1" alt="logo" />
      <h1 className="text-xl mt-2 uppercase font-bold">Harish Kumbhar</h1>
    </div>
  );
}
export default TopBar;
