import React from "react";
import Logo from "../assets/imgs/me.jpg";
function TopBar() {
  return (
    <div className="inline-flex">
      <img src={Logo} className="p-1 w-1 rounded-full" alt="logo" />
      <h1 className="text-xl mt-2 uppercase font-bold">Harish Kumbhar</h1>
    </div>
  );
}
export default TopBar;
