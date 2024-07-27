import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
function Combined() {
  return (
    <div className="combined-div">
      <TopBar />
      <NavBar />
      <SideBar />
      <MainSection />
    </div>
  );
}
export default Combined;
