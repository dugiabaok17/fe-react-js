import axios from "../axios";

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

const updateNewUser = async (id,data) => {
  return await axios.put(`api/v1/staff/${id}`, data);
};
const delUser = (id) => {
  return axios.put(`/api/v1/staff/status/${id}`);
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
