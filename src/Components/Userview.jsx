import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const Userview = (props) => {
    const location = useLocation();

    console.log("Location:", location);

    const onDelete = async (id) => {
        try {
            await axios.delete(
                `https://65890c1b324d41715258647c.mockapi.io/api/v1/reactcrud/${id}`
            );

            alert("Deleted Successfully");

            window.location.reload(); // Reload the page after successful deletion
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    return (

        <section className="h-screen w-screen bg-gray-100/50 pt-10 overflow-scroll">
            {
                <form className="container w-screen mx-auto shadow-md md:w-3/4">
                    <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
                        <div className="max-w-sm mx-auto md:w-full md:mx-0">
                            <div className="inline-flex items-center space-x-4">
                                <a href="#" className="relative block">
                                    <img alt="profil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40p_bpiybIoS6kcQ-MZf6qWD_oZKS_ZgwCw" className="mx-auto object-cover rounded-full h-16 w-16 " />
                                </a>
                                <h1 className="text-gray-600">

                                    {location.state.userDetails.firstName} {location.state.userDetails.middleName} {location.state.userDetails.lastName}

                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen bg-white">
                        <div className="flex-1">
                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex  ">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    User ID
                                </h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex-1">
                                    <div className="relative">
                                        <input disabled value={location.state.userDetails.firstName} type="text" id="Gender" className="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Name
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3 flex space-x-4">
                                    <div class="relative flex-1">
                                        <input disabled value={location.state.userDetails.firstName} type="text" id="Name1" class="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div class="relative flex-1">
                                        <input disabled value={location.state.userDetails.middleName} type="text" id="Name2" class="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div class="relative flex-1">
                                        <input disabled value={location.state.userDetails.lastName} type="text" id="Name3" class="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </div>
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Gender
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                        <input disabled value={location.state.userDetails.gender} type="text" id="Gender" class=" rounded-lg border-transparent  border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </div>
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Email Address
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3 ">
                                    <div class=" relative ">
                                        <input disabled value={location.state.userDetails.email} type="text" id="Gender" class=" rounded-lg border-transparent  border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Address
                                </h2>
                                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div class=" relative ">
                                            <input disabled value={location.state.userDetails.permanentAddress} type="text" id="user-info-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" relative ">
                                            <input disabled value={location.state.userDetails.presentAddress} type="text" id="user-info-phone" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-10">
                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    Department
                                </h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex-1">
                                    <div className="relative">
                                        <input disabled value={location.state.userDetails.department} type="text" id="Gender" className="rounded-lg border-transparent border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </div>

                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0 ">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Section
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                        <input disabled value={location.state.userDetails.section} type="text" id="Gender" class=" rounded-lg border-transparent  border border-gray-300 w-full px-4 bg-white text-gray-500 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>

                    {/* Save and Delete buttons */}
                    <div className="flex w-full px-4 pb-4 text-gray-500 bg-white">
                        <div className="ml-auto">
                            <button
                                type="submit"
                                className="py-2 px-4 mr-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(location.state.userDetails.id)}

                                type="submit"
                                className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                </form>
            }
        </section >
    );
};