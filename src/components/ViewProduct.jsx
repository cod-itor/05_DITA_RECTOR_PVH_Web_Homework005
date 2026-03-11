"use client";
import React, { useState } from "react";
import { items } from "@/data/Item";
import Image from "next/image";

const ViewProduct = () => {


  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-gray-900 text-white rounded-2xl p-4 gap-4"
        >
          <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.item_name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>


          <div className="flex flex-col flex-1 gap-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-base">{item.item_name}</h1>
              <p className="text-sm text-gray-300">${item.item_price}</p>

              <button

                className="ml-1 focus:outline-none transition-colors"
                aria-label="Save item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill={saved[item.id] ? "#facc15" : "none"}
                  // stroke={saved[item.id] ? "#facc15" : "currentColor"}
                  strokeWidth={2}
                  className="w-5 h-5 transition-colors duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3h14a1 1 0 0 1 1 1v17l-8-4-8 4V4a1 1 0 0 1 1-1z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-400">{item.item_description}</p>
          </div>


          <button className="bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-xl shrink-0 transition-colors">
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewProduct;
