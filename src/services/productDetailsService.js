import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", {
    email,
    password,
  });
};

const getAllUsers = () => {
  // return axios.get(`/api/get-all-users?id=${inputId}`)
  return axios.get("api/v1/product-details");
};
const createNewUser = async (data) => {
    return await axios.post("api/v1/product-details", data);
};

const updateNewUser = async (id,data) => {
  return await axios.put(`api/v1/product-details/${id}`, data);
};
// http://localhost:8080/api/v1/product-details/{{id}}
const delUser = (id) => {
  return axios.delete(`/api/v1/product-details/${id}`);
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
  updateNewUser
};
