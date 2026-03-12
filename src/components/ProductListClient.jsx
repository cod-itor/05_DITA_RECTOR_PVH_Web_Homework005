"use client";
import React, { useState } from "react";
import { items } from "@/data/Item";
import Image from "next/image";

import BackButton from "./BackButton";
import BookMarkSave from "./BookMarkSave";
import SortButtons from "./SortButtons";
import BookmarkButton from "./BookmarkButton";
import ViewButtonDetail from "./ViewButtonDetail";

const ProductListClient = () => {
  const [bookmarkList, setBookmarkList] = useState(items);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  const toggleSave = (id) => {
    setBookmarkList(
      bookmarkList.map((item) => {
        if (item.id === id) {
          return { ...item, saved: !item.saved };
        }
        return item;
      }),
    );
  };

  const filteredItems = showSavedOnly
    ? bookmarkList.filter((item) => item.saved === true)
    : bookmarkList;

  const displayedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") return a.item_name.localeCompare(b.item_name);
    if (sortOrder === "desc") return b.item_name.localeCompare(a.item_name);
    return 0;
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Top bar */}
      <div className="flex items-center justify-between text-white px-1">
        <BackButton />
        <div className="flex items-center gap-3">
          <BookMarkSave
            showSavedOnly={showSavedOnly}
            onToggle={() => setShowSavedOnly((prev) => !prev)}
          />
          <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>
      </div>

      {/* Product list */}
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
              <BookmarkButton
                saved={item.saved}
                onToggle={() => toggleSave(item.id)}
              />
            </div>
            <p className="text-sm text-gray-400">{item.item_description}</p>
          </div>

          <ViewButtonDetail item={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductListClient;
