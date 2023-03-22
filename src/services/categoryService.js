import axios from "../axios";

const createPosition = (data) => {
  return axios.post("/api/v1/category", data);
};

const getAllPosition = () => {
  return axios.get("/api/v1/category");
};

const getAllPositionNames = (data) => {
  return axios.get("/api/v1/category/name", data);
};

const deletePosition = (id) => {
  return axios.delete(`/api/v1/category/${id}`);
};

const updatePosition = (id, data) => {
  return axios.put(`/api/v1/category/${id}`, data);
};
export {
  createPosition,
  getAllPositionNames,
  getAllPosition,
  deletePosition,
  updatePosition,
};
