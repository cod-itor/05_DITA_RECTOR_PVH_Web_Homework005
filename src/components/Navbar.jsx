import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black  flex items-center text-white justify-between p-4">
      <div className="flex items-center gap-3">
        <img
        className="rounded-full border broder-white"
          src="https://a.pinatafarm.com/750x691/29465c37d5/sad-cat-e963aa04f163b1b2ecdc0a24e0ac53fa-meme.jpeg"
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
