import axios from '../axios';

const createStore = (data) => {

    return axios.post("/api/v1/store",data)
};

const getAllStore = () => {
    return axios.get("api/v1/store")
}

const getAllStoreName = () => {
    return axios.get("/api/v1/store/name")
}

const updateStore = (id,data) => {
    return axios.put(`/api/v1/store/${id}`,data)
}

const delStore = (id) => {
    return axios.delete(`/api/v1/store/${id}`)
} 

export {
createStore,
getAllStoreName,
getAllStore,
updateStore,
delStore
};