"use client";
import React from "react";
import { Bookmark } from "lucide-react";

const BookmarkButton = ({ saved, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="hover:cursor-pointer"
      aria-label="Save item"
    >
      <Bookmark
        className="w-5 h-5"
        fill={saved ? "#facc15" : "none"}
        stroke={saved ? "#facc15" : "currentColor"}
      />
    </button>
  );
};

export default BookmarkButton;
