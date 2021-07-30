import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import ButtonLink from "../components/ButtonLink";
import { newStore } from "../services/stores";
import { useHistory } from "react-router";

const NewStore = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    district: "",
    province: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onFormChange = (event) => {
    const target = event.target;
    setFormData({ ...formData, [target.name]: target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    newStore(
      formData.name,
      formData.street,
      formData.district,
      formData.province
    ).then(() => {
      history.push("/stores");
    }, console.log);
  };
  return (
    <ContentWrapper classes="bg-blue-500">
      <ButtonLink linkTo="/stores" text="Kembali" />
      <div className="bg-white rounded-lg px-4 lg:px-20 py-8">
        <h1 className="text-2xl font-bold mb-2">Pembuatan Toko Baru</h1>
        <form onSubmit={submitForm}>
          <label>
            Nama Toko
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onFormChange}
              className="bg-gray-50 border block text-sm my-1"
            />
          </label>
          <label>
            Jalan
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={onFormChange}
              className="bg-gray-50 border block text-sm my-1"
            />
          </label>
          <label>
            Kecamatan
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={onFormChange}
              className="bg-gray-50 border block text-sm my-1"
            />
          </label>
          <label>
            Provinsi
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={onFormChange}
              className="bg-gray-50 border block text-sm my-1"
            />
          </label>
          <button
            type="submit"
            value="Submit"
            disabled={submitted}
            className={`text-base font-normal p-2 rounded-md mt-4 bg-gray-50 ${
              submitted
                ? "cursor-not-allowed hover:bg-gray-50"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default NewStore;
