import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col p-4 bg-blue-950 rounded-2xl text-white min-h-screen w-48 gap-6">
      <h1 className="text-lg">Menu</h1>
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-blue-300 cursor-pointer">Overview</li>
          <li className="hover:text-blue-300 cursor-pointer">Items</li>
          <li className="hover:text-blue-300 cursor-pointer">Orders</li>
          <li className="hover:text-blue-300 cursor-pointer">Customers</li>
          <li className="hover:text-blue-300 cursor-pointer">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
