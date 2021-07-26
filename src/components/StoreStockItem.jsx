import React, { useState } from "react";

const StoreDorayaki = ({ flavor, desc, imgUrl, stock, _id }) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand(!expand);
  return (
    <div>
      <div className="flex flex-grow items-center w-full bg-white px-4 py-2 rounded-md border border-black mt-2">
        <button className="inline" onClick={toggleExpand}>
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </button>
        <div className="w-full lg:flex justify-between">
          <div>
            <p className="lg:inline">{flavor}</p>
            <small className="block lg:inline lg:ml-4 text-gray-600">
              {desc.substring(0, 25) + "..."}
            </small>
          </div>
          <span className="block text-sm lg:inline">Stok: {stock}</span>
        </div>
      </div>
      {/* Dropdown menu */}
      <div
        className={`${
          expand ? "h-40" : "h-0"
        } bg-gray-100 rounded-lg mx-0.5 transition-all duration-500 ease-out overflow-hidden`}
      >
        <StockItemDropdown />
      </div>
    </div>
  );
};

export default StoreDorayaki;
