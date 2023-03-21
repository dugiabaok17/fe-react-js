import axios from "../axios";

const createPosition = (data) => {
  return axios.post("/api/v1/position", data);
};

const getAllPosition = () => {
  return axios.get("/api/v1/position");
};

const getAllPositionName = (data) => {
  return axios.get("/api/v1/position/name", data);
};

const deletePosition = (id) => {
  return axios.delete(`/api/v1/position/${id}`);
};

const updatePosition = (id, data) => {
  return axios.put(`/api/v1/position/${id}`, data);
};
export {
  createPosition,
  getAllPositionName,
  getAllPosition,
  deletePosition,
  updatePosition,
};
