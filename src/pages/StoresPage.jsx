import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import StoreListItem from "../components/StoreListItem";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import { getAllStores } from "../services/stores";

const StoresPage = () => {
  const [fetchedStores, setFetchedStores] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    getAllStores().then((stores) => {
      setHasFetched(true);
      setFetchedStores(stores);
    }, console.log);
  }, []);

  return (
    <ContentWrapper classes="bg-blue-500">
      <h1 className="font-semibold text-3xl text-white underline">
        Pengaturan Toko
      </h1>
      <div className="flex justify-center py-2 bg-red-400 rounded-t-md">
        <Link
          to="/stores/new"
          className="block mx-auto bg-yellow-300 text-black text-lg border-2 font-semibold
    border-yellow-900 px-2 rounded-xl transition hover:bg-yellow-400"
        >
          Tambah Toko
        </Link>
      </div>
      <div className="bg-white py-4 px-4 lg:px-20 rounded-b-3xl pb-4">
        {!hasFetched ? (
          <LoadingPlaceholder />
        ) : (
          fetchedStores.map((store, index) => (
            <StoreListItem
              name={store.name}
              address={store.address}
              _id={store._id}
              key={index}
            />
          ))
        )}
      </div>
    </ContentWrapper>
  );
};

export default StoresPage;
