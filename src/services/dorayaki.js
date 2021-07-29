import axios from "axios";
import { expressBE as apiURL } from "./apiURL";

export const getAllDorayaki = async () => {
  const res = await axios.get(apiURL + "/dorayaki");
  res.data.forEach((dorayaki) => (dorayaki.imgUrl = apiURL + dorayaki.imgUrl));
  return res.data;
};

export const getOneDorayaki = async (_id) => {
  const res = await axios.get(`${apiURL}/dorayaki/${_id}`);
  res.data.imgUrl = apiURL + res.data.imgUrl;
  return res.data;
};

export const newDorayaki = async (flavor, desc, img) => {
  const formdata = new FormData();
  formdata.append("flavor", flavor);
  formdata.append("description", desc);
  formdata.append("image", img);
  const res = await axios.post(`${apiURL}/dorayaki`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return [res.status, res.headers.location];
};

export const deleteDorayaki = async (_id) => {
  const res = await axios.delete(`${apiURL}/dorayaki/${_id}`);
  return res.status;
};
