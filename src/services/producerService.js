import axios from "../axios";

const createPosition = (data) => {
  return axios.post("/api/v1/producer", data);
};

const getAllPosition = () => {
  return axios.get("/api/v1/producer");
};

const getAllPositionNamess = (data) => {
  return axios.get("/api/v1/producer/name", data);
};

const deletePosition = (id) => {
  return axios.delete(`/api/v1/producer/${id}`);
};

const updatePosition = (id, data) => {
  return axios.put(`/api/v1/producer/${id}`, data);
};
export {
  createPosition,
  getAllPositionNamess,
  getAllPosition,
  deletePosition,
  updatePosition,
};
