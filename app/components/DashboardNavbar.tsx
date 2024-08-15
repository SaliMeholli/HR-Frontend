import React from "react";
import DashboardSearch from "./DashboardSearch";

function DashboardNavbar() {
  return <div className="w-full p-10 ">
    <div  className="bg-white p-5 w-auto rounded-lg flex justify-start">
        <DashboardSearch />
    </div>
  </div>;
}

export default DashboardNavbar;
