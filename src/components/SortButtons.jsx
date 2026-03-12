"use client";
import React from "react";
import { ArrowDownAZ, ArrowDownZA } from "lucide-react";

const SortButtons = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "none" : "asc")}

      >
        <ArrowDownAZ
          className={`w-5 h-5 hover:cursor-pointer ${
            sortOrder === "asc" ? "text-yellow-400" : "text-white"
          }`}
        />
      </button>
      <button
        onClick={() => setSortOrder(sortOrder === "desc" ? "none" : "desc")}
      >
        <ArrowDownZA
          className={`w-5 h-5 hover:cursor-pointer ${
            sortOrder === "desc" ? "text-yellow-400" : "text-white"
          }`}
        />
      </button>
    </div>
  );
};

export default SortButtons;
