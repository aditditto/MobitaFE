import axios from "axios";
import _ from "lodash";
import { expressBE as apiURL } from "./apiURL";

export const getAllStores = async () => {
  const res = await axios.get(`${apiURL}/stores`);
  return res.data;
};

export const getOneStore = async (_id) => {
  const res = await axios.get(`${apiURL}/stores/${_id}`);
  return res.data;
};

export const newStore = async (storeName, street, district, province) => {
  const res = await axios.post(`${apiURL}/stores`, {
    name: storeName,
    address: {
      street,
      district,
      province,
    },
  });

  return [res.status, res.headers.location];
};

export const deleteStore = async (_id) => {
  const res = await axios.delete(`${apiURL}/stores/${_id}`);
  return res.status;
};
