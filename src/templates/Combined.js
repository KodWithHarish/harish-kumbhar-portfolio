import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

function Combined() {
  return (
    <div className="p-10 bg-yellow-50">
      <TopBar />
      <NavBar />
      <div className="flex mt-5">
        <SideBar className="w-1/4 m-2 rounded" />
        <MainSection className="w-3/4 m-2 rounded" />
      </div>
    </div>
  );
}

export default Combined;
