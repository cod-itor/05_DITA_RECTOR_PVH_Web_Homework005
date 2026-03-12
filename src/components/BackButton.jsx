"use client";
import React from "react";

const BackButton = ({ onBack }) => {
  return (
    <button
      onClick={onBack}
      className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-2xl hover:bg-gray-200 transition-colors"
    >
      Back
    </button>
  );
};

export default BackButton;
