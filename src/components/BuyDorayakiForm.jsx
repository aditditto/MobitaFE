import React, { useState, useEffect } from "react";
import DorayakiCard from "./DorayakiCard";
import { getAllDorayaki } from "../services/dorayaki";
import { newStock } from "../services/stock";

const BuyDorayakiForm = ({ toggleClose, storeID, ownedStockIDs }) => {
  const [fetchedDorayaki, setFetchedDorayaki] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getAllDorayaki().then((dorayakis) => {
      dorayakis = dorayakis.filter(
        (dorayaki) => !ownedStockIDs.includes(dorayaki._id)
      );
      console.log(ownedStockIDs);
      console.log(dorayakis);
      setFetchedDorayaki(dorayakis);
      setSelectedID(dorayakis[0]._id);
    }, console.log);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // console.table({ storeID, selectedID, quantity });
    newStock(storeID, selectedID, quantity).then(() => {
      window.location.reload();
    }, console.log);
  };

  return (
    <div
      className="fixed bg-white z-50 top-1/2 left-1/2 lg:w-1/2
    transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg"
    >
      <button className="absolute right-4 top-4" onClick={toggleClose}>
        x
      </button>
      <p className="lg:text-lg font-bold mb-4">Tambah Varian Dorayaki</p>
      <div className="md:flex h-72 overflow-auto justify-between w-100 p-4">
        {fetchedDorayaki.map((dorayaki, index) => (
          <div onClick={() => setSelectedID(dorayaki._id)} key={index}>
            <DorayakiCard
              flavor={dorayaki.flavor}
              imgUrl={dorayaki.imgUrl}
              desc={dorayaki.description}
              classes={`mb-4 mx-auto ${
                selectedID === dorayaki._id && "bg-pink-200 border-pink-200"
              }`}
            />
          </div>
        ))}
      </div>
      <p className="">Jumlah</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        min={1}
      />
      <button
        type="submit"
        disabled={submitted || fetchedDorayaki.length === 0}
        onClick={handleSubmit}
        className={
          "block font-normal text-base border p-2 rounded-md bg-gray-50 hover:bg-gray-200 " +
          ((submitted || fetchedDorayaki.length === 0) &&
            "cursor-not-allowed opacity-50")
        }
      >
        Submit
      </button>
    </div>
  );
};

export default BuyDorayakiForm;
