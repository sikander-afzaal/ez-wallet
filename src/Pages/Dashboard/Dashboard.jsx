import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="grid isolate min-h-screen grid-cols-[300px__1fr] area w-full  relative">
      <div className="-z-10 bg-[#000000EB] opacity-60 w-full h-full fixed top-0 left-0"></div>
      <Header setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="main flex justify-start px-8 py-7 overflow-x-hidden items-start flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
