import React, { useEffect, useState } from "react";
import { getAllStores } from "../../services/stores";
import { transferStock } from "../../services/stock";

const TransferMenu = ({ stock, storeID, stockID, dorayakiID }) => {
  const [value, setValue] = useState(1);
  const [selectedStoreID, setSelectedStoreID] = useState("");
  const [stores, setStores] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const changeValue = (e) => setValue(e.target.value);

  useEffect(() => {
    getAllStores().then((stores) => {
      const filtered = stores.filter((store) => store._id !== storeID);
      setStores(filtered);
      setSelectedStoreID(filtered[0]._id);
    }, console.log);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // setStockQuantity(storeID, stockID, value).then(() => {
    //   window.location.reload();
    // }, console.log);
    // console.table({ storeID, selectedStoreID, value, stockID, dorayakiID });
    transferStock(
      storeID,
      selectedStoreID,
      stockID,
      dorayakiID,
      value,
      stock
    ).then(() => window.location.reload(), console.log);
  };

  return (
    <fieldset>
      <legend>Masukkan jumlah dorayaki dan toko tujuan</legend>
      <input
        type="number"
        value={value}
        onChange={changeValue}
        className="w-16 px-1 rounded-lg"
        min={1}
        max={stock}
      />
      <select
        className="block"
        value={selectedStoreID}
        onChange={(e) => setSelectedStoreID(e.target.value)}
      >
        {stores.map((store, index) => (
          <option value={store._id} key={index}>
            {store.name}
          </option>
        ))}
      </select>
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

export default TransferMenu;
