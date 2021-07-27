import React from "react";

const Desc = ({ imgUrl, desc }) => {
  return (
    <div className="h-full my-3 flex">
      <img src={imgUrl} alt="image of dorayaki" className="w-2/5" />
      <p className="pl-4 text-justify">{desc}</p>
    </div>
  );
};

export default Desc;
