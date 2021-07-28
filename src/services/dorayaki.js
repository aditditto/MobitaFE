import axios from "axios";
import { expressBE as apiURL } from "./apiURL";

export const getAllDorayaki = async () => {
  const res = await axios.get(apiURL + "/dorayaki");
  return res.data;
};

export const getOneDorayaki = async (_id) => {
  const res = await axios.get(`${apiURL}/dorayaki/${_id}`);
  return res.data;
};

export const newDorayaki = async (flavor, desc, img) => {
  const res = await axios.post(`${apiURL}/dorayaki`, {
    flavor: flavor,
    description: desc,
  });
  return [res.status, res.headers.location];
};

export const deleteDorayaki = async (_id) => {
  const res = await axios.delete(`${apiURL}/dorayaki/${_id}`);
  return res.status;
};
