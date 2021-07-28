import React, { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import ContentWrapper from "../components/ContentWrapper";

const NewDorayaki = () => {
  const [formData, setFormData] = useState({
    flavor: "",
    desc: "",
    img: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const onFormChange = (event) => {
    const target = event.target;
    setFormData({ ...formData, [target.name]: target.value });
  };
  const onImageUpload = (event) => {
    const target = event.target;
    setFormData({ ...formData, img: target.files[0] });
  };
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };
  return (
    <ContentWrapper classes="bg-pink-200">
      <ButtonLink linkTo="/dorayaki" text="Kembali" />
      <div className="bg-white rounded-lg px-4 lg:px-20 py-8">
        <h1 className="text-2xl font-bold mb-2">Pembuatan Dorayaki Baru</h1>
        <form onSubmit={submitForm}>
          <label>
            Rasa Dorayaki
            <input
              type="text"
              name="flavor"
              value={formData.flavor}
              onChange={onFormChange}
              className="bg-gray-50 border block text-sm my-1"
            />
          </label>
          <label>
            Deskripsi
            <textarea
              type="textbox"
              name="desc"
              value={formData.desc}
              onChange={onFormChange}
              className="bg-gray-50 border block text-sm my-1"
            />
          </label>
          <label>
            Gambar
            <input
              type="file"
              name="img"
              accept="image/png, image/jpeg"
              onChange={onImageUpload}
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

export default NewDorayaki;
