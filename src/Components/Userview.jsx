import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Dashboard } from "./Dashboard";

export const Userview = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    // const [APIData, setAPIData] = useState([]);
    // const [deleteData, setDeleteData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(location.state.userDetails);
    const [isDeleteConfirmationModalVisible, setDeleteConfirmationModalVisible] =
        useState(false);
    const [isUpdateConfirmationModalVisible, setUpdateConfirmationModalVisible] =
        useState(false);

    const handleEdit = () => {
        setIsEditing(true);
        // Enable input fields
        document.querySelectorAll("input[disabled]").forEach((input) => {
            input.removeAttribute("disabled");
        });
    };

    // confirmation dialog for delete
    const showDeleteConfirmationModal = () => {
        setDeleteConfirmationModalVisible(true);
    };

    const hideDeleteConfirmationModal = () => {
        setDeleteConfirmationModalVisible(false);
    };

    //confirmation dialog for update
    const showUpdateConfirmationModal = () => {
        setUpdateConfirmationModalVisible(true);
    };

    const hideUpdateConfirmationModal = () => {
        setUpdateConfirmationModalVisible(false);
    };
    // const handleUpdate = async () => {
    //   // Show the confirmation dialog before updating
    //   showUpdateConfirmationModal();
    // };
    // const updateAPIData = async (id, updatedData) => {
    //   try {
    //     const response = await axios.put(
    //       https://65890c1b324d41715258647c.mockapi.io/api/v1/reactcrud/${id}
    //       // updatedData
    //     );

    //     console.log(response.data);
    //     // alert("Updated successfully");
    //     navigate("/");
    //   } catch (error) {
    //     console.error(error);
    //     // alert("Update failed");
    //     throw error; // Re-throwing the error to be caught by the calling function if needed
    //   }
    // };
    const updateAPIData = async () => {
        const id = location.state.userDetails.id;

        try {
            const response = await axios.put(
                `https://65890c1b324d41715258647c.mockapi.io/api/v1/reactcrud/${id}`,
                userData // Pass the updated user data
            );

            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.error(error);
            // Handle error as needed
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        const { id, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // console.log("Location:", APIData);
    const id = location.state.userDetails.id;

    const onDelete = async () => {
        try {
            await axios.delete(
                `https://65890c1b324d41715258647c.mockapi.io/api/v1/reactcrud/${id}`
            );

            // alert("Deleted Successfully");
            console.log("Location:", location);
            // window.location.reload(); // Reload the page after successful deletion
            //redirect to dashboard
            navigate("/");
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    return (
        <section className="h-screen w-screen bg-gray-100/50 pt-10 overflow-scroll">
            {
                <form className="container w-screen mx-auto shadow-md md:w-3/4">
                    <div className="p-4 border-t-2 border-sky-600 rounded-lg bg-gray-100/5 ">
                        <div className="max-w-sm mx-auto md:w-full md:mx-0">
                            <div className="inline-flex items-center space-x-4">
                                <a href="/" className="relative block">
                                    <img
                                        alt="profile"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40p_bpiybIoS6kcQ-MZf6qWD_oZKS_ZgwCw"
                                        className="mx-auto object-cover rounded-full h-16 w-16 "
                                    />
                                </a>
                                <h1 className="text-gray-600">
                                    {/* {location.state.userDetails.firstName}{" "}
                  {location.state.userDetails.middleName}{" "}
                  {location.state.userDetails.lastName} */}
                                    {userData.firstName}
                                    {""} {userData.middleName} {""}
                                    {userData.lastName}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen bg-white">
                        <div className="flex-1">
                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex  ">
                                <h2 className="max-w-sm mx-auto md:w-1/3">User ID</h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex-1">
                                    <div className="relative">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.userId}
                                            defaultValue={userData.userId}
                                            type="text"
                                            id="userId"
                                            className="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">Name</h2>
                                <div class="max-w-sm mx-auto md:w-2/3 flex space-x-4">
                                    <div class="relative flex-1">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.firstName}
                                            defaultValue={userData.firstName}
                                            type="text"
                                            id="firstName"
                                            style={{ padding: '8px 0px' }}
                                            class="rounded-lg border-transparent border  w-full  bg-white text-gray-500 placeholder-gray-600 shadow-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div class="relative flex-1">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.middleName}
                                            defaultValue={userData.middleName}
                                            type="text"
                                            id="middleName"
                                            style={{ padding: '8px 0px' }}
                                            class="rounded-lg border-transparent border border-gray-400 w-full  bg-white text-gray-500 placeholder-gray-600 shadow-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div class="relative flex-1">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.lastName}
                                            defaultValue={userData.lastName}
                                            type="text"
                                            id="lastName"
                                            style={{ padding: '8px 0px' }}
                                            class="rounded-lg border-transparent border  w-full  bg-white text-gray-500 placeholder-gray-600 shadow-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 class="max-w-sm mx-auto md:w-1/3">Gender</h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.gender}
                                            defaultValue={userData.gender}
                                            type="text"
                                            id="gender"
                                            class=" rounded-lg border-transparent  border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 class="max-w-sm mx-auto md:w-1/3">Email Address</h2>
                                <div class="max-w-sm mx-auto md:w-2/3 ">
                                    <div class=" relative ">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.email}
                                            defaultValue={userData.email}
                                            type="text"
                                            id="email"
                                            class=" rounded-lg border-transparent  border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">Address</h2>
                                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div class=" relative ">
                                            <input
                                                disabled={!isEditing}
                                                onChange={handleChange}
                                                // value={location.state.userDetails.permanentAddress}
                                                defaultValue={userData.permanentAddress}
                                                type="text"
                                                id="permanentAddress"
                                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" relative ">
                                            <input
                                                disabled={!isEditing}
                                                onChange={handleChange}
                                                // value={location.state.userDetails.presentAddress}
                                                defaultValue={userData.presentAddress}
                                                type="text"
                                                id="presentAddress"
                                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-10">
                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 className="max-w-sm mx-auto md:w-1/3">Mobile Number</h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex-1">
                                    <div className="relative">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.department}
                                            defaultValue={userData.mobileNo}
                                            type="text"
                                            id="mobileNo"
                                            className="rounded-lg border-transparent border border-gray-500 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 className="max-w-sm mx-auto md:w-1/3">Department</h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex-1">
                                    <div className="relative">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.department}
                                            defaultValue={userData.department}
                                            type="text"
                                            id="department"
                                            className="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 class="max-w-sm mx-auto md:w-1/3">Section</h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                        <input
                                            disabled={!isEditing}
                                            onChange={handleChange}
                                            // value={location.state.userDetails.section}
                                            defaultValue={userData.section}
                                            type="text"
                                            id="section"
                                            class=" rounded-lg border-transparent  border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>

                    {/* Save and Delete buttons */}
                    <div className="flex w-full px-4 pb-4 text-gray-500 bg-white">
                        <div className="ml-auto">
                            {/* <button
                type="submit"
                className="py-2 px-4 mr-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Edit
              </button> */}
                            {isEditing ? (
                                <button
                                    // onClick={handleUpdate}
                                    onClick={showUpdateConfirmationModal}
                                    type="button"
                                    className="py-2 px-4 mr-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    Update
                                </button>
                            ) : (
                                // <button
                                //   onClick={handleEdit}
                                //   type="button"
                                //   className="py-2 px-4 mr-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                // >
                                //   Edit
                                // </button>
                                <div className="flex w-full px-4 pb-4 text-gray-500 bg-white">
                                    <div className="ml-auto">
                                        <button
                                            onClick={handleEdit}
                                            type="button"
                                            className="py-2 px-4 mr-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            // onClick={() => onDelete(location.state.userDetails.id)}
                                            onClick={showDeleteConfirmationModal}
                                            type="button"
                                            className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            }
            {/* {isConfirmationModalVisible && confirmationModal} */}
            {isDeleteConfirmationModalVisible && (
                <div
                    className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
                    onClick={hideDeleteConfirmationModal}
                >
                    <div className="absolute inset-0 bg-black opacity-10"></div>

                    <div className="z-50 bg-white p-6 rounded-lg shadow-md">
                        <div className="z-50 flex flex-col items-center justify-center">
                            <svg
                                className="flex-shrink-0 inline w-10 h-10 mx-auto mb-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-normal mb-4">
                            This action cannot be recovered! <br></br>Are you sure you want to
                            delete this person?
                        </h3>
                        <button
                            onClick={onDelete}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg mr-5 ml-12 hover:bg-red-500"
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            onClick={hideDeleteConfirmationModal}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200"
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            )}
            {isUpdateConfirmationModalVisible && (
                <div
                    className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
                    onClick={hideUpdateConfirmationModal}
                >
                    <div className="absolute inset-0 bg-black opacity-10"></div>

                    <div className="z-50 bg-white p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center justify-center">
                            <svg
                                className="flex-shrink-0 inline w-10 h-10 mx-auto mb-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-normal mb-4">
                            Are you sure you want to update it?
                        </h3>
                        <button
                            onClick={() => {
                                updateAPIData();
                                hideUpdateConfirmationModal();
                                // handleUpdate();
                            }}
                            // onClick={updateAPIData}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-5 ml-12 hover:bg-blue-500"
                        >
                            Yes, Update
                        </button>
                        <button
                            onClick={hideUpdateConfirmationModal}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200"
                        >
                            No, Cancel
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};