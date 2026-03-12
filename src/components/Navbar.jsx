import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-black  flex items-center text-white justify-between p-4">
      <div className="flex items-center gap-3">
        <Image
          src=""
          width={48}
          height={48}
          alt="Dashboard logo"
        />
        <h1 className="text-xl font-semibold">DashBoard</h1>
      </div>
      <div>
        <input
          className="rounded-2xl bg-gray-400 p-2"
          type="text"
          placeholder="Search by item name.."
        />
      </div>
    </div>
  );
};

export default Navbar;
