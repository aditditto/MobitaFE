import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import ButtonLink from "../components/ButtonLink";

const DorayakiDetail = () => {
  const dorayaki = {
    flavor: "YummyYummy",
    desc: "Yummy yummy in my tummy Yummy yummy in my tummy Yummy yummy in my tummy Yummy yummy in my tummy Yummy yummy in my tummy",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dorayaki_001.jpg",
  };
  return (
    <ContentWrapper classes="bg-pink-200">
      <ButtonLink linkTo="/dorayaki" text="Kembali" />
      <div className="bg-white rounded-lg px-4 lg:px-20 py-8">
        <h1 className="text-3xl font-semibold mb-4">{dorayaki.flavor}</h1>

        <img
          src={dorayaki.imgUrl}
          alt="gambar dorayaki"
          className="w-4/5 mx-auto"
        />
        <p className="text-justify my-4">Deskripsi: {dorayaki.desc}</p>
        <div className="flex justify-center">
          <ButtonLink linkTo="#" text="Edit" classes="bg-gray-100 mr-4" />
          <ButtonLink
            linkTo="#"
            text="Hapus"
            classes="bg-red-400 hover:bg-red-700"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default DorayakiDetail;
