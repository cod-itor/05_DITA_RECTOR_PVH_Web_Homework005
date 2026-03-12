"use client";
import React, { useState } from "react";
import { items } from "@/data/Item";
import Image from "next/image";
import { Bookmark, ArrowDownAZ, ArrowDownZA } from "lucide-react";

import ViewButtonDetail from "./ViewButtonDetail";
import BookMarkSave from "./BookMarkSave";

const ViewProduct = () => {
  const [bookmarkList, setbookmarkList] = useState(items);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  const toggleSave = (id) => {
    setbookmarkList(
      bookmarkList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            saved: !item.saved,
          };
        }
        return item;
      }),
    );
  };

  const filteredItems = showSavedOnly
    ? bookmarkList.filter((item) => item.saved === true)
    : bookmarkList;

  const displayedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.item_name.localeCompare(b.item_name);
    }
    if (sortOrder === "desc") {
      return b.item_name.localeCompare(a.item_name);
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-white px-1">
        <button className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-2xl hover:bg-gray-200 transition-colors">
          Back
        </button>

        <div className="flex items-center gap-3">
          <BookMarkSave
            showSavedOnly={showSavedOnly}
            onToggle={() => setShowSavedOnly((prev) => !prev)}
          />
          <button onClick={() => setSortOrder("asc")} aria-label="Sort A to Z">
            <ArrowDownAZ
              className={`w-5 h-5 transition-colors ${sortOrder === "asc" ? "text-yellow-400" : "text-white"}`}
            />
          </button>
          <button onClick={() => setSortOrder("desc")} aria-label="Sort Z to A">
            <ArrowDownZA
              className={`w-5 h-5 transition-colors ${sortOrder === "desc" ? "text-yellow-400" : "text-white"}`}
            />
          </button>
        </div>
      </div>

      {displayedItems.map((item) => (
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
                className="hover: cursor-pointer "
                aria-label="Save item"
              >
                <Bookmark
                  className="w-5 h-5 transition-colors duration-200"
                  fill={item.saved ? "#facc15" : "none"}
                  stroke={item.saved ? "#facc15" : "currentColor"}
                />
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
