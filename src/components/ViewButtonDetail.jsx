"use client";
import React, { useState } from "react";

export default function ViewButtonDetail({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-xl shrink-0 transition-colors"
      >
        View
      </button>

      {open && (
        <dialog
          open
          className="fixed inset-0 bg-pink-100/30 p-5 rounded-md flex justify-center items-center w-full h-full"
        >
          <div className="w-125 h-100 bg-white rounded-3xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-bold text-lg">Item Details</h1>
              <button
                onClick={() => setOpen(false)}
                className="bg-red-300 rounded-lg px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-2 clear-both">
              <div>ID: {item.id}</div>
              <div>Name: {item.item_name}</div>
              <div>Description: {item.item_description}</div>
              <div>Price: ${item.item_price}</div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
