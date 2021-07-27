import React from "react";
import DorayakiCard from "./DorayakiCard";

const BuyDorayakiForm = ({ toggleClose }) => {
  return (
    <div
      className="fixed bg-pink-100 z-50 top-1/2 left-1/2 w-1/2
    transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg"
    >
      <button className="absolute right-4 top-4" onClick={toggleClose}>
        x
      </button>
      <p className="text-lg font-bold mb-4">Tambah Varian Dorayaki</p>
      <div className="flex justify-between w-100 overflow-y-auto bg-purple-500 p-4">
        <DorayakiCard />
      </div>
      <p className="">Jumlah</p>
      <input type="number" name="" id="" />
      <button type="submit" className="block">
        Submit
      </button>
    </div>
  );
};

export default BuyDorayakiForm;
