import axios from 'axios';

const fetchData = async (url, setData) => {
    try {
        const response = await axios.get(url);
        setData(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default fetchData;
