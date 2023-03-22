import axios from '../axios';

const createPosition = (data) => {

    return axios.post("/api/v1/product",data)
};

const getAllPosition = () => {
    return axios.get("api/v1/product")
}

const getAllPositionName = () => {
    return axios.get("/api/v1/product/name")
}

const updatePosition = (id,data) => {
    return axios.put(`/api/v1/product/${id}`,data)
}

const deletePosition = (id) => {
    return axios.delete(`/api/v1/product/${id}`)
} 

export {
createPosition,
getAllPositionName,
getAllPosition,
updatePosition,
deletePosition
};