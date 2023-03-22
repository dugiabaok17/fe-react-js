import axios from '../axios';

const createColor = (data) => {

    return axios.post("/api/v1/color",data)
};

const getAllColor = () => {
    return axios.get("api/v1/color")
}

const getAllColorName = () => {
    return axios.get("/api/v1/color/name")
}

const updateColor = (id,data) => {
    return axios.put(`/api/v1/color/${id}`,data)
}

const delColor = (id) => {
    return axios.delete(`/api/v1/color/${id}`)
} 

export {
createColor,
getAllColorName,
getAllColor,
updateColor,
delColor
};