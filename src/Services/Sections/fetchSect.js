import axios from 'axios';
import API_URL from "../config";

const fetchSect = (deptId) => {
    return axios.get(`${API_URL}/sections/departments/${deptId}`);
};

export default fetchSect;
