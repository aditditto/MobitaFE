import React from "react";

const StoreDorayaki = ({ flavor, desc, imgUrl, _id, classes }) => {
  return (
    <div
      className={
        "border bg-white border-black rounded-lg w-44 h-60 overflow-hidden px-3 py-2 transition transform hover:scale-105 " +
        classes
      }
    >
      <img
        src={imgUrl}
        alt="dorayaki image"
        className="h-1/2 mx-auto rounded-md"
      />
      <p className="text-base">{flavor}</p>
      <p className="text-xs">{desc}</p>
    </div>
  );
};

export default StoreDorayaki;
