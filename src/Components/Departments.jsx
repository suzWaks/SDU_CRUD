import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import fetchDept from "../Services/Department/fetchDept";

export const Departments = () => {

    const navigate = useNavigate();
    const [cardData, setCardData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [formValues, setFormValues] = useState({
        deptName: "",
        deptDescription: "",
        image: null,
    });
    const [image, setImage] = useState(null);
    const [editingDepartmentId, setEditingDepartmentId] = useState(null);

    fetchDept()
    .then((response) => {
        setCardData(response.data);
    })

    const openModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        navigate('/departments');
        setIsModalOpen(false);
        setModalMessage("");
    };

    // 

    const addDept = () => {
        setFormValues({
            deptName: "",
            deptDescription: "",
            image: "",
        })
        setIsModalOpen(true);
    }

    const handleEditDepartment = (id) => {
        // Find the department with the given id in cardData
        const department = cardData.find((dept) => dept.deptId === id);

        // Check if the department is found
        if (department) {
            // Call the function to handle editing with the department details
            editDepartment(department);
        }
    };

    const editDepartment = (department) => {
        console.log("Editing department:", department);

        // Navigate to the edit page or open a modal for editing
        setIsModalOpen(true);

        // Set the editing department ID
        setEditingDepartmentId(department.deptId);


        setFormValues({
            deptName: department.deptName,
            deptDescription: department.deptDescription,
            image: null, // Clear the previous image to prevent displaying the wrong image
        });

        // Fetch the image and set it in the state
        axios
            .get(`https://smiling-mark-production.up.railway.app/departments/images/${department.deptId}`, {
                responseType: 'blob',
            })
            .then((response) => {
                console.log("Fetching image")
                const imageFile = new File([response.data], `${department.deptId}.png`, { type: 'image/png' });
                console.log(imageFile);
                setImage(imageFile);
            })
            .catch((error) => {
                console.error("Error fetching department image:", error);
            });
    };

    const handleUpdateDepartment = (event) => {
        event.preventDefault();
        console.log("Updating");
        // Check if an image is selected
        if (image) {
            var bodyFormData = new FormData();

            const updatedDepartmentData = {
                deptId: editingDepartmentId,
                deptName: formValues.deptName,
                deptDescription: formValues.deptDescription,
            };

            console.log("Dept Name: ", updatedDepartmentData);

            const json = JSON.stringify(updatedDepartmentData);
            const blob = new Blob([json], {
                type: 'application/json',
            });

            bodyFormData.append('department', blob);
            bodyFormData.append('departmentImage', image);

            axios
                .put(
                    `https://smiling-mark-production.up.railway.app/departments`,
                    bodyFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then(() => {
                    console.log("Updating data")
                    // Clear form values and close the modal
                    setFormValues({
                        deptName: "",
                        deptDescription: "",
                        image: null,
                    });
                    setIsModalOpen(false);
                    setEditingDepartmentId(null);

                    // Open the success message modal
                    openModal("Department updated successfully!");
                })
                .catch((error) =>
                    console.error("Error updating department:", error)
                );
        } else {
            // Handle the case where no image is selected
            console.error("Please select an image");
        }
    };


    //handle add department
    const handleAddDepartment = (event) => {
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

            axios
                .post(
                    'https://smiling-mark-production.up.railway.app/departments',
                    bodyFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then(() => {
                    console.log(bodyFormData);
                    // Clear form values and close the modal
                    setFormValues({
                        deptName: "",
                        deptDescription: "",
                        image: null,
                    });
                    setIsModalOpen(false);

                    // Open the success message modal
                    openModal("Department added successfully!");
                })
                .catch((error) =>
                    console.error("Error adding department:", error)
                );
        } else {
            // Handle the case where no image is selected
            console.error("Please select an image");
        }
    };
    const viewDeptHandler = (id) => {
        // Make an API call to fetch user details based on id
        axios
            .get(`https://smiling-mark-production.up.railway.app/departments/${id}`)
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

    return (
        <div className="w-full h-full overflow-auto">
            <div className="flex justify-between">
                <h1 className="pt-11 ml-5 px-11 text-4xl font-bold text-sky-600">
                    Departments
                </h1>
                <button
                    onClick={() => addDept()}
                    className="mr-10 mt-11 mb-9 p-2 bg-sky-600 text-white rounded-md"
                >
                    Add Department <span className="font-extrabold">+</span>
                </button>
            </div>
            <hr></hr>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-11">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
                        style={{ height: "24rem", width: "22rem" }}
                    >

                        <img
                            onClick={() => viewDeptHandler(card.deptId)}
                            alt="department_image"
                            className="rounded-t-lg cursor-pointer"
                            style={{ height: "65%", width: "100%" }}
                            src={`https://smiling-mark-production.up.railway.app/departments/images/${card.deptId}`}

                        />

                        <div className="p-5 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">

                                <h5 onClick={() => viewDeptHandler(card.deptId)} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
                                    {card.deptName}
                                </h5>

                                <button
                                    onClick={() => handleEditDepartment(card.deptId)}
                                    className="px-1 py-1 text-white rounded-md"
                                >
                                    <FaEdit className="text-sky-500 w-6 h-auto" />
                                </button>
                            </div>
                            <p onClick={() => viewDeptHandler(card.deptId)} className="cursor-pointer mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden overflow-ellipsis max-h-[3.6em] line-clamp-2">
                                {card.deptDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for adding a new department */}
            {isModalOpen && (
                <div
                    id="crud-modal"
                    role="dialog"
                    aria-hidden="false"
                    tabIndex="-1"
                    className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center max-h-screen max-w-screen bg-stone-800/50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-1">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {editingDepartmentId
                                        ? "Update department"
                                        : "Add new department"}
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form onSubmit={editingDepartmentId
                                ? handleUpdateDepartment
                                : handleAddDepartment} className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            defaultValue={formValues.deptName}
                                            onChange={(e) => setFormValues({ ...formValues, deptName: e.target.value })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type department name"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Department Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            maxLength="256"
                                            rows="4"
                                            defaultValue={formValues.deptDescription}
                                            onChange={(e) => setFormValues({ ...formValues, deptDescription: e.target.value })}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write something about the department"
                                            required
                                        ></textarea>
                                    </div>

                                    <div class="float-end">
                                        <label
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            htmlFor="image"
                                        >
                                            Upload user picture
                                        </label>
                                        <input
                                            onChange={(e) => setImage(e.target.files[0])}
                                            class="block w-full text-sm text-blue-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"

                                            id="image"
                                            type="file"
                                            name="image"

                                        />
                                        <span>{image ? image.name : 'No file selected'}</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="text-white inline-flex items-center bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {editingDepartmentId
                                        ? "Update department"
                                        : "Add new department"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom modal for displaying messages*/}
            {modalMessage && (
                <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-stone-800/40">
                    <div class="relative p-4  max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="flex flex-col items-center justify-center p-4 md:p-5 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px" class="mb-5">
                                    <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                                    <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" />
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{modalMessage}</h3>
                                <button onClick={closeModal} class="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                    Okay
                                </button>
                            </div>

                        </div>
                    </div>
                </div>)}
        </div>
    );
};
