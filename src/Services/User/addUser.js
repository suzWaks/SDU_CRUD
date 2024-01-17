import axios from "axios";
import API_URL from "../config";

const addUser = (userData) => {
    return axios.post(`${API_URL}/users`, userData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export default addUser;
