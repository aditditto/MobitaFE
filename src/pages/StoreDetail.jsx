import React from "react";
import StoreDorayaki from "../components/StoreDorayaki";
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
  return (
    <div className="bg-blue-500 min-h-screen py-20 px-6 lg:px-52">
      <button
        className="font-normal text-base transition rounded-md bg-white p-2
      mb-2 hover:bg-gray-300"
      >
        Kembali
      </button>
      <div className="bg-white rounded-lg px-4 lg:px-20 py-8">
        <h1 className="text-3xl font-semibold mb-">Nama toko</h1>
        <div className="text-sm mb-12">
          <p>Jalan menuju surga</p>
          <p>Kecamatan siratalmustaqim</p>
          <p>Provinsi Akhirat</p>
        </div>
        <h2 className="text-xl font-bold">Stok Dorayaki</h2>
        <div className="flex flex-col">
          {fetchedDorayaki.map((dorayaki, index) => (
            <StoreDorayaki
              flavor={dorayaki.flavor}
              desc={dorayaki.desc}
              imgUrl={dorayaki.imgUrl}
              stock={dorayaki.stock}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
