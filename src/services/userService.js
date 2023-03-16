import axios from "../axios";
import hello from "axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", {
    email,
    password,
  });
};

const getAllUsers = () => {
  // return axios.get(`/api/get-all-users?id=${inputId}`)
  return axios.get("api/v1/staff");
};
const createNewUser = async (data) => {
    return await axios.post("api/v1/staff", data);
};

const delUser = (id) => {
  return axios.delete(`/api/v1/staff/${id}`);
};
const getAllCodeService = (inputData) => {
  return axios.get(`/all-codes?type=${inputData}`);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUser,
  delUser,
  getAllCodeService,
};
