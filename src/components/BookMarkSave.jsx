import React from "react";
import { BookMarked } from "lucide-react";

export default function BookMarkSave({ showSavedOnly, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`font-bold text-base flex items-center gap-1 hover:cursor-pointer px-3 py-1 rounded-xl transition-colors ${
          showSavedOnly
        }`}
      >
        Your Bookmark <BookMarked className="w-5 h-5" />
      </button>
    </div>
  );
}
3