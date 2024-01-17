import axios from 'axios'
import API_URL from '../config';

const users = () =>{
    return axios.get(`${API_URL}/users`);
}

export default users;