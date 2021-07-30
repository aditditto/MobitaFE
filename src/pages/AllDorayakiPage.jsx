import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DorayakiCard from "../components/DorayakiCard";
import ContentWrapper from "../components/ContentWrapper";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import { getAllDorayaki } from "../services/dorayaki";

const AllDorayakiPage = () => {
  const [fetchedDorayaki, setFetchedDorayaki] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    getAllDorayaki().then((dorayakis) => {
      setHasFetched(true);
      setFetchedDorayaki(dorayakis);
    }, console.log);
  }, []);

  return (
    <ContentWrapper classes="bg-pink-200">
      <h1 className="font-semibold text-3xl text-white underline">
        Pengaturan Dorayaki
      </h1>
      <div className="flex justify-center py-2 bg-red-400 rounded-t-md">
        <Link
          to="/dorayaki/new"
          className="inline-block bg-yellow-300 text-black text-lg border-2 font-semibold
    border-yellow-900 px-2 rounded-xl transition hover:bg-yellow-400"
        >
          Tambah Dorayaki
        </Link>
      </div>
      <div className="flex flex-shrink-0 flex-wrap justify-around bg-white py-4 px-4 lg:px-20 rounded-b-3xl pb-4">
        {!hasFetched ? (
          <LoadingPlaceholder />
        ) : (
          fetchedDorayaki.map((dorayaki, index) => (
            <Link to={`/dorayaki/show/${dorayaki._id}`}>
              <DorayakiCard
                flavor={dorayaki.flavor}
                imgUrl={dorayaki.imgUrl}
                desc={dorayaki.description}
                key={index}
                classes="mb-4"
              />
            </Link>
          ))
        )}
      </div>
    </ContentWrapper>
  );
};

export default AllDorayakiPage;
