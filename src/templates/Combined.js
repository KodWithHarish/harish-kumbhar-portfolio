import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

function Combined() {
  return (
    <div className="pl-10 pr-10 pt-3 bg-yellow-50">
      <TopBar />
      <NavBar />
      <div className="flex mt-1">
        <SideBar className="w-1/4 mr-2 rounded h-80" />
        <MainSection className="w-3/4 ml-2 rounded h-svh" />
      </div>
    </div>
  );
}

export default Combined;
