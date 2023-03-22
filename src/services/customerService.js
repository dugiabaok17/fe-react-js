import axios from "../axios";

const createPosition = (data) => {
  return axios.post("/api/v1/customer", data);
};

const getAllPosition = () => {
  return axios.get("/api/v1/customer");
};

const getAllPositionName = (data) => {
  return axios.get("/api/v1/customer/name", data);
};

const deletePosition = (id) => {
  return axios.delete(`/api/v1/customer/${id}`);
};

const updatePosition = (id, data) => {
  return axios.put(`/api/v1/customer/${id}`, data);
};
export {
  createPosition,
  getAllPositionName,
  getAllPosition,
  deletePosition,
  updatePosition,
};
