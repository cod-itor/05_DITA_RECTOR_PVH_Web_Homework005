"use client";
import React from "react";

export default function ViewButtonDetail({ item, isOpen, onOpen, onClose }) {
  return (
    <div>
      <button
        onClick={onOpen}
        className="bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:cursor-pointer"
      >
        View
      </button>

      {isOpen && (
        <dialog
          open
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50"
        >
          <div className="w-120 bg-white rounded-3xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-bold text-lg">Item Details</h1>
              <button
                onClick={onClose}
                className="bg-red-300 hover:bg-red-400 rounded-lg px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div>ID: {item.id}</div>
              <div>Name: {item.item_name}</div>
              <div>Price: ${item.item_price}</div>
              <div>Description: {item.item_description}</div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
