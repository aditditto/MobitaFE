import React, { useState } from "react";
import { setStockQuantity } from "../../services/stock";

const ChangeMenu = ({ stock, storeID, stockID }) => {
  const [value, setValue] = useState(stock);
  const changeValue = (e) => setValue(e.target.value);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setStockQuantity(storeID, stockID, value).then(() => {
      window.location.reload();
    }, console.log);
  };
  return (
    <fieldset>
      <legend>Masukkan jumlah dorayaki</legend>
      <input
        type="number"
        value={value}
        onChange={changeValue}
        className="w-16 px-1 rounded-lg"
        min={0}
      />
      <input
        type="submit"
        value="Submit"
        disabled={submitted}
        onClick={handleSubmit}
        className={
          "block cursor-pointer py-1 px-2 rounded-sm bg-white my-2 transition hover:bg-gray-50" +
          (submitted && "cursor-not-allowed opacity-50")
        }
      />
    </fieldset>
  );
};

export default ChangeMenu;
