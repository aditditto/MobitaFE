import axios from "axios";
import { expressBE as apiURL } from "./apiURL";

export const getStoreStocks = async (_id) => {
  const res = await axios.get(`${apiURL}/stores/${_id}/stocks`);
  res.data.forEach((stock) => {
    stock.imgUrl = apiURL + stock.imgUrl;
  });
  return res.data;
};

export const newStock = async (storeID, dorayakiID, quantity) => {
  const res = await axios.post(`${apiURL}/stores/${storeID}/stocks`, {
    dorayakiID,
    quantity,
  });
  return [res.status, res.headers.location];
};

export const setStockQuantity = async (storeID, stockID, quantity) => {
  const res = await axios.patch(
    `${apiURL}/stores/${storeID}/stocks/${stockID}`,
    { quantity }
  );
  return res.status;
};

export const deleteStock = async (storeID, stockID) => {
  const res = await axios.delete(
    `${apiURL}/stores/${storeID}/stocks/${stockID}`
  );
  return res.status;
};

export const transferStock = async (
  originID,
  targetID,
  stockID,
  dorayakiID,
  qty,
  currentQty
) => {
  const targetStocks = await getStoreStocks(targetID);
  const targetStock = targetStocks.find(
    (stock) => stock.dorayakiID === dorayakiID
  );

  qty = Number(qty);

  const setOrigin = setStockQuantity(originID, stockID, currentQty - qty);
  const setTarget = targetStock
    ? setStockQuantity(targetID, targetStock._id, targetStock.quantity + qty)
    : newStock(targetID, dorayakiID, qty);

  const [res1, res2] = await Promise.all([setOrigin, setTarget]);

  return [res1.status, res2.status];
};
