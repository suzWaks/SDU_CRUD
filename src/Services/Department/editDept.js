import axios from 'axios';
import API_URL from '../config';

//Fetch selected department details into the form to edit
export const handleEditDepartment = (id, cardData, editDepartment, setIsModalOpen, setEditingDepartmentId, setFormValues, setImage) => {
    const department = cardData.find((dept) => dept.deptId === id);

    if (department) {
        editDepartment(department, setIsModalOpen, setEditingDepartmentId, setFormValues, setImage);
    }
};

export const editDepartment = (department, setIsModalOpen, setEditingDepartmentId, setFormValues, setImage) => {
    console.log("Editing department:", department);
    setIsModalOpen(true);
    setEditingDepartmentId(department.deptId);

    setFormValues({
        deptName: department.deptName,
        deptDescription: department.deptDescription,
        image: null,
    });

    axios
        .get(`${API_URL}/departments/images/${department.deptId}`, {
            responseType: 'blob',
        })
        .then((response) => {
            console.log("Fetching image");
            const imageFile = new File([response.data], `${department.deptId}.png`, { type: 'image/png' });
            console.log(imageFile);
            setImage(imageFile);
        })
        .catch((error) => {
            console.error("Error fetching department image:", error);
        });
};

    