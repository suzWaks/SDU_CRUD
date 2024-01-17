import axios from 'axios';
import API_URL from '../config';

const addDepartment = (formValues, image, setFormValues, setIsModalOpen, openModal, setLoading) => {
    return (event) => {
        event.preventDefault();
        console.log("Adding");

        // Check if an image is selected
        if (image) {
            var bodyFormData = new FormData();

            const newDepartmentData = {
                deptName: formValues.deptName,
                deptDescription: formValues.deptDescription,
            };

            const json = JSON.stringify(newDepartmentData);
            const blob = new Blob([json], {
                type: 'application/json',
            });

            bodyFormData.append('department', blob);
            bodyFormData.append('departmentImage', image);
            setLoading(true);
            axios
                .post(
                    `${API_URL}/departments`,
                    bodyFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then(() => {
                   
                    // Clear form values and close the modal
                    setFormValues({
                        deptName: "",
                        deptDescription: "",
                        image: null,
                    });
                    setLoading(false);
                    setIsModalOpen(false);

                    // Open the success message modal
                    openModal("Department added successfully!");
                })
                .catch((error) => {
                    setLoading(false);
                    console.error("Error adding department:", error);
                }
                );
        } else {setLoading(false);
            // Handle the case where no image is selected
            console.error("Please select an image");
        }
    };
};

export { addDepartment };
