import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ViewProduct from "@/components/ViewProduct";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <ViewProduct />
        </div>
      </div>
    </div>
  );
};
export default Home;
