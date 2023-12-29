import React, { useState } from 'react';
import { FaBars, FaTable, FaCaretDown, FaUserPlus, FaFolder } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const SideNav = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const DashHandler = () => {
        navigate('/');
    };

    const DeptHandler = () => {
        navigate('/departments');
    };

    const AddUserHandler = () => {
        navigate('/adduser');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <aside>
            <div className="h-full flex flex-col items-center px-10 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
                <div className="text-center py-8">
                    <img src="https://www.tashicell.com/themes/tashicell/assets/images/logo.png" alt="Logo" />
                    <h1 className="text-2xl font-bold mb-4 dark:text-white">SDU UMS</h1>
                </div>
                <ul className="space-y-2 font-medium">
                    <li onClick={DashHandler} className="flex items-right">
                        <a href="#" className="flex items-center py-4 px-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaTable className="mr-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <div className="ms-3  ">Dashboard</div>
                        </a>
                    </li>

                    {/* Dropdown Button */}
                    <li className="flex items-right mb-5">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center py-4 px-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaFolder className="mr-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <div className="ms-3">Departments</div>
                            <svg
                                className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </li>

                    {/* Dropdown Content */}
                    <div
                        className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-300 rounded-lg shadow w-44 dark:bg-gray-700 mx-7`}
                    >
                        <div onClick={DeptHandler}>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                All Departments
                            </a>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    SDU
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Customer Care
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Tashi Electronics
                                </a>
                            </li>
                        </ul>
                    </div>
                    <li onClick={AddUserHandler} className="flex items-right mb-5">
                        <a href="#" className="flex items-center py-4 px-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaUserPlus className="mr-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ms-3  ">Add User</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
