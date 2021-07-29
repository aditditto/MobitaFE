import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import ContentWrapper from "../components/ContentWrapper";
import StoreStockItem from "../components/StoreStockItem";
import BuyDorayakiForm from "../components/BuyDorayakiForm";
import ButtonLink from "../components/ButtonLink";
import DeleteModal from "../components/DeleteModal";
import { getOneStore } from "../services/stores";
import { getStoreStocks } from "../services/stock";
import { deleteStore } from "../services/stores";

const StoreDetail = () => {
  const history = useHistory();
  const { ID } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
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

  const toggleDelete = () => {
    setAlertDelete(!alertDelete);

    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  };

  const onConfirmDelete = () => {
    deleteStore(ID).then(() => {
      history.push("/stores");
    }, console.log);
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
        <button
          className="bg-red-200 rounded-md border text-sm border-black font-normal p-2
        transition hover:bg-red-500"
          onClick={toggleDelete}
        >
          Hapus Toko
        </button>
        {alertDelete && (
          <DeleteModal
            objectName="toko"
            onConfirm={onConfirmDelete}
            onCancel={toggleDelete}
          />
        )}
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
            <BuyDorayakiForm toggleClose={toggleModal} storeID={ID} />
          </div>
        )}
        <div className="flex flex-col">
          {stocks.map((dorayaki, index) => (
            <StoreStockItem
              flavor={dorayaki.flavor}
              desc={dorayaki.description}
              imgUrl={dorayaki.imgUrl}
              stock={dorayaki.quantity}
              key={index}
            />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default StoreDetail;
