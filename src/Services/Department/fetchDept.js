import axios from 'axios';
import API_URL from "../config";

const fetchDept = () => {
    return axios.get(`${API_URL}/departments`);
};

export default fetchDept;
