import axios from '../axios';

const createStore = () => {

    return axios.post("/api/v1/store",{
        "name": "Clothes store ha noi",
        "address": "Hn",
        "city": "Hn",
        "nation": "USA"
    })
};

const getAllPositionName = () => {
    return axios.get("/api/v1/position/name")
}

export {
createStore,
getAllPositionName
};