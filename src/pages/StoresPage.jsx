import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import StoreListItem from "../components/StoreListItem";

const dummyStores = [
  {
    name: "aaaaa",
    address: { street: "here", district: "where", province: "Overthere" },
  },
  {
    name: "aaaaa",
    address: { street: "here", district: "where", province: "Overthere" },
  },
  {
    name: "aaaaa",
    address: { street: "here", district: "where", province: "Overthere" },
  },
  {
    name: "aaaaa",
    address: { street: "here", district: "where", province: "Overthere" },
  },
  {
    name: "aaaaa",
    address: { street: "here", district: "where", province: "Overthere" },
  },
];

const StoresPage = () => {
  const fetchedStores = dummyStores;
  return (
    <ContentWrapper BGcolor="blue-500">
      <h1 className="font-semibold text-3xl text-white underline">
        Pengaturan Toko
      </h1>
      <div className="py-2 bg-red-400 rounded-t-md">
        <button
          className="block mx-auto bg-yellow-300 text-black text-lg border-2 font-semibold
    border-yellow-900 px-2 rounded-xl transition hover:bg-yellow-400"
        >
          Tambah Toko
        </button>
      </div>
      <div className="bg-white py-4 px-4 lg:px-20 rounded-b-3xl pb-4">
        {fetchedStores.map((store, index) => (
          <StoreListItem
            name={store.name}
            address={store.address}
            _id={store._id}
            key={index}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default StoresPage;
