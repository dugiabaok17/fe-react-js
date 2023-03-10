import axios from "../axios";

const handleLoginApi = (email,password) => {
  return axios.post('/api/login',{
    email,
    password
  })
}

const getAllUsers = (inputId) => {
  console.log(inputId)
  return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUser = (data) => {
  return axios.post('api/create-new-user',data)
}

const delUser = (userId) => {
  return axios.delete('/api/del-user',{data: {
    id: userId 
  }})
}
const getAllCodeService = (inputData) => {
  return axios.get(`/all-codes?type=${inputData}`)
}
export {
  handleLoginApi,
  getAllUsers,
  createNewUser,
  delUser,
  getAllCodeService
} 

