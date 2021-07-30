import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import ContentWrapper from "../components/ContentWrapper";
import ButtonLink from "../components/ButtonLink";
import DeleteModal from "../components/DeleteModal";
import { getOneDorayaki, deleteDorayaki } from "../services/dorayaki";

const DorayakiDetail = () => {
  const { ID } = useParams();
  const history = useHistory();
  const [alertDelete, setAlertDelete] = useState(false);
  const [dorayaki, setDorayaki] = useState({
    flavor: "Loading...",
    description: "",
    imgUrl: "",
  });

  useEffect(() => {
    getOneDorayaki(ID).then(setDorayaki, console.log);
  }, []);

  const toggleDelete = () => {
    setAlertDelete(!alertDelete);

    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  };

  const onConfirmDelete = () => {
    deleteDorayaki(ID).then(() => {
      history.push("/dorayaki");
    }, console.log);
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
        <p className="text-justify my-4">Deskripsi: {dorayaki.description}</p>
        <div className="flex justify-center">
          <button
            className="bg-red-200 rounded-md border text-sm border-black font-normal p-2
        transition hover:bg-red-500"
            onClick={toggleDelete}
          >
            Hapus Dorayaki
          </button>
          {alertDelete && (
            <DeleteModal
              objectName="dorayaki"
              onCancel={toggleDelete}
              onConfirm={onConfirmDelete}
            />
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default DorayakiDetail;
