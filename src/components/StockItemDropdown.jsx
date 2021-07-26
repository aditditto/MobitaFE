import React from "react";

const StockItemDropdown = () => {
  return (
    <div className="flex">
      <div className="mx-4 my-2">
        <button className="bg-white p-2 border border-r-0 border-black font-normal text-base">
          Deskripsi
        </button>
        <button className="bg-white p-2 border border-black font-normal text-base">
          Ubah Stok
        </button>
        <button className="bg-white p-2 border border-l-0 border-black font-normal text-base">
          Transfer Stok
        </button>
      </div>
    </div>
  );
};

export default StockItemDropdown;
