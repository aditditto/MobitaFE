import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import StoreStockItem from "../components/StoreStockItem";
import BuyDorayakiForm from "../components/BuyDorayakiForm";
import ButtonLink from "../components/ButtonLink";

const fetchedDorayaki = [
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD: eww eww ewwwhoekkkkkkkkkkkk",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD:",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD:",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD:",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD:",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD:",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
];

const StoreDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);

    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  };
  return (
    <ContentWrapper BGcolor="blue-500">
      <ButtonLink linkTo="#" text="Kembali" />
      <div className="bg-white rounded-lg px-4 lg:px-20 py-8">
        <h1 className="text-3xl font-semibold mb-">Nama toko</h1>
        <div className="text-sm mb-12">
          <p>Jalan menuju surga</p>
          <p>Kecamatan siratalmustaqim</p>
          <p>Provinsi Akhirat</p>
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
          {fetchedDorayaki.map((dorayaki, index) => (
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
