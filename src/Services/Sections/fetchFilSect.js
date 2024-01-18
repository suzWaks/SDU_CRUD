import axios from 'axios';
import API_URL from "../config";

export const fetchFilteredSections = async (departmentId) => {
  try {
    const response = await axios.get(`${API_URL}/sections`);

    // Filter sections based on the selected departmentId
    const filteredSections = response.data.filter(
      (section) => section.department.deptId === parseInt(departmentId)
    );

    return filteredSections;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
