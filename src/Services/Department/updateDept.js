import axios from 'axios';
import API_URL from '../config';

export const updateDepartment = async (editingDepartmentId, formValues, image) => {
    try {
        // Check if an image is selected
        if (image) {
            const bodyFormData = new FormData();

            const updatedDepartmentData = {
                deptId: editingDepartmentId,
                deptName: formValues.deptName,
                deptDescription: formValues.deptDescription,
            };

            const json = JSON.stringify(updatedDepartmentData);
            const blob = new Blob([json], {
                type: 'application/json',
            });

            bodyFormData.append('department', blob);
            bodyFormData.append('departmentImage', image);

            await axios.put(`${API_URL}/departments`, bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return true; // Success
        } else {
            // Handle the case where no image is selected
            console.error('Please select an image');
            return false;
        }
    } catch (error) {
        console.error('Error updating department:', error);
        return false;
    }
};