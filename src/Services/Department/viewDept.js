import axios from 'axios';
import API_URL from '../config';

const viewDeptHandler = (id, navigate) => {
    // Make an API call to fetch user details based on id
    axios
        .get(`${API_URL}/departments/${id}`)
        .then((response) => {
            const deptDetails = response.data;
            console.log(deptDetails);

            // Navigate to the /userview page and pass the user details as props
            navigate("/deptview", { replace: true, state: { deptDetails } });
        })
        .catch((error) =>
            console.error("Error fetching department data:", error)
        );
};

export default viewDeptHandler;