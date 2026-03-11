"use client";
import React, { useState } from "react";
import { items } from "@/data/Item";
import Image from "next/image";
import { BookMarked, ArrowDownAZ, ArrowDownZA } from "lucide-react";

import ViewButtonDetail from "./ViewButtonDetail";

const ViewProduct = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-white px-1">
        <button className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-2xl hover:bg-gray-200 transition-colors">
          Back
        </button>

        <div className="flex items-center gap-3">
          <span className="font-bold text-base">Your Bookmark</span>
          <BookMarked className="w-5 h-5" />
          <ArrowDownAZ className="w-5 h-5" />
          <ArrowDownZA className="w-5 h-5" />
        </div>
      </div>

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
                onClick={() => toggleSave(item.id)}
                className="focus:outline-none transition-colors"
                aria-label="Save item"
              >
                {/* <Bookmark
                  className="w-5 h-5 transition-colors duration-200"
                  fill={saved[item.id] ? "#facc15" : "none"}
                  stroke={saved[item.id] ? "#facc15" : "currentColor"}
                /> */}
              </button>
            </div>
            <p className="text-sm text-gray-400">{item.item_description}</p>
          </div>

          <ViewButtonDetail item={item} />
        </div>
      ))}
    </div>
  );
};

export default ViewProduct;
