import React, { useState, useEffect } from "react";
import ContentWrapper from "../components/ContentWrapper";
import StoreStockItem from "../components/StoreStockItem";
import BuyDorayakiForm from "../components/BuyDorayakiForm";
import ButtonLink from "../components/ButtonLink";
import { getOneStore } from "../services/stores";
import { getStoreStocks } from "../services/stock";
import { useParams } from "react-router";

const StoreDetail = () => {
  const { ID } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [store, setStore] = useState({
    name: "Loading...",
    address: { street: "", district: "", province: "" },
  });

  useEffect(() => {
    Promise.all([getOneStore(ID), getStoreStocks(ID)]).then(
      ([fetchedStore, fetchedStocks]) => {
        setStore(fetchedStore);
        setStocks(fetchedStocks);
      },
      console.log
    );
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);

    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  };

  return (
    <ContentWrapper classes="bg-blue-500">
      <ButtonLink linkTo="/stores" text="Kembali" />
      <div className="bg-white rounded-lg px-4 lg:px-20 py-8">
        <h1 className="text-3xl font-semibold mb-">{store.name}</h1>
        <div className="text-sm mb-12">
          <p>{store.address.street}</p>
          <p>{store.address.district}</p>
          <p>{store.address.province}</p>
        </div>
        <h2 className="text-xl font-bold">Stok Dorayaki</h2>
        <button
          className="bg-white rounded-md border text-sm border-black font-normal p-2
        transition hover:bg-gray-50"
          onClick={toggleModal}
        >
          Tambah Dorayaki
        </button>
        {showModal && (
          <div className="bg-black fixed z-50 inset-0 bg-opacity-50">
            <BuyDorayakiForm toggleClose={toggleModal} />
          </div>
        )}
        <div className="flex flex-col">
          {stocks.map((dorayaki, index) => (
            <StoreStockItem
              flavor={dorayaki.flavor}
              desc={dorayaki.desc}
              imgUrl={dorayaki.imgUrl}
              stock={dorayaki.stock}
              key={index}
            />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default StoreDetail;
