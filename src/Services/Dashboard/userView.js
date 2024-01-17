import axios from 'axios';
import API_URL from '../config';

const viewUserHandler = (id, navigate) => {
    // Make an API call to fetch user details based on id
    axios
        .get(`${API_URL}/${id}`)
        .then((response) => {
            const userDetails = response.data;
            console.log(userDetails);

            // Navigate to the /userview page and pass the user details as props
            navigate("/userview", { replace: true, state: { userDetails } });
        })
        .catch((error) => console.error("Error fetching user data:", error));
};

export default viewUserHandler;
