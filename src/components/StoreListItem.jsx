import React from "react";
import { Link } from "react-router-dom";

const StoreListItem = ({ name, address, _id }) => {
  return (
    <div className="flex justify-between w-full bg-white px-4 py-2 rounded-md border border-black my-2">
      <p className="">
        {name}
        <small className="block lg:inline lg:ml-4 text-gray-600">{`${address.district}, ${address.province}`}</small>
      </p>
      <Link
        to={`/stores/show/${_id}`}
        className="transition bg-white px-2 rounded-md border
  border-black text-base text-blue-900 font-normal hover:text-white hover:bg-blue-800"
      >
        Atur
      </Link>
    </div>
  );
};

export default StoreListItem;
