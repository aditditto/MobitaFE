import React from "react";
import DorayakiCard from "../components/DorayakiCard";

const dummyDorayaki = [
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
  {
    flavor: "ewwwww",
    desc: "bikin mual DDDDDD:",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
    stock: 4,
  },
];

const AllDorayakiPage = () => {
  const fetchedDorayaki = dummyDorayaki;
  return (
    <div className="px-8 lg:px-52 min-h-screen w-full pt-20 bg-pink-200">
      <h1 className="font-semibold text-3xl text-white underline">
        Pengaturan Dorayaki
      </h1>
      <div className="py-2 bg-red-400 rounded-t-md">
        <button
          className="block mx-auto bg-yellow-300 text-black text-lg border-2 font-semibold
    border-yellow-900 px-2 rounded-xl transition hover:bg-yellow-400"
        >
          Tambah Dorayaki
        </button>
      </div>
      <div className="flex flex-shrink-0 flex-wrap justify-around bg-white py-4 px-4 lg:px-20 rounded-b-3xl pb-4">
        {fetchedDorayaki.map((dorayaki, index) => (
          <DorayakiCard
            flavor={dorayaki.flavor}
            imgUrl={dorayaki.imgUrl}
            desc={dorayaki.desc}
            _id={dorayaki._id}
            key={index}
            classes="mb-4"
          />
        ))}
      </div>
    </div>
  );
};

export default AllDorayakiPage;
