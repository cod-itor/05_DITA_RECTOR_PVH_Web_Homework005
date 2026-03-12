"use client";
import React from "react";
import { ArrowDownAZ, ArrowDownZA } from "lucide-react";

const SortButtons = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "none" : "asc")}
        aria-label="Sort A to Z"
      >
        <ArrowDownAZ
          className={`w-5 h-5 transition-colors ${
            sortOrder === "asc" ? "text-yellow-400" : "text-white"
          }`}
        />
      </button>
      <button
        onClick={() => setSortOrder(sortOrder === "desc" ? "none" : "desc")}
        aria-label="Sort Z to A"
      >
        <ArrowDownZA
          className={`w-5 h-5 transition-colors ${
            sortOrder === "desc" ? "text-yellow-400" : "text-white"
          }`}
        />
      </button>
    </div>
  );
};

export default SortButtons;
