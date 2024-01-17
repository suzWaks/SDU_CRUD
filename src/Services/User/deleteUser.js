import axios from 'axios';
import API_URL from '../config';

export const deleteUser = async (ID, showDeleteModal) => {

    try {
        await axios.delete(
            `${API_URL}/users/${ID}`
        );
        showDeleteModal("User deleted successfully")

    } catch (error) {
        showDeleteModal("Failed to delete user")
        console.error("Error deleting data:", error);

    }
};