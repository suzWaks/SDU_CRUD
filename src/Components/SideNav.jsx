import React, { useState, useEffect } from 'react';
import { FaBars, FaTable, FaUserPlus, FaFolder } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SideNav = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [expanded, setExpanded] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

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
    const handleBarsClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const handleResize = () => {
            const newIsSmallScreen = window.innerWidth <= 768;
            setIsSmallScreen(newIsSmallScreen);

            // Collapse the sidebar automatically on small screens
            if (newIsSmallScreen) {
                setExpanded(false);
            }
        };  

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const viewDeptHandler = (id) => {
    //     // Make an API call to fetch user details based on id
    //     axios.get(`https://smiling-mark-production.up.railway.app/departments/${id}`)
    //         .then(response => {
    //             const deptDetails = response.data;
    //             console.log(deptDetails);

    //             // Navigate to the /userview page and pass the user details as props
    //             navigate('/deptview', { replace: true, state: { deptDetails } });
    //         })
    //         .catch(error => console.error('Error fetching department data:', error));
    // };

    const sidebarStyle = {
        width: isSmallScreen ? (expanded ? '310px' : '0') : '310px',
    };

    const barsIconClass = `w-8 h-8 mt-3 text-sky-600 lg:hidden ${isSmallScreen ? '' : 'hidden'} ${isSmallScreen && expanded ? 'text-cyan-100' : 'text-sky-600'}`;
    return (
        <aside>
            <div style={sidebarStyle} className="sidebar h-full top-0 bottom-0 items-center text-center lg:w-[310px] xl:w-[310px] w-[310px] py-4 rounded-r-3xl bg-sky-700 dark:bg-gray-800">
                <span className='absolute text-4xl top-5 mt-5 mr-5 left-4 cursor-pointer' onClick={handleBarsClick}>
                    <FaBars className={barsIconClass} />
                </span>
                <div onClick={DashHandler} className="text-center py-8 cursor-pointer">
                    <img className='pl-11 ml-9' src="https://www.tashicell.com/themes/tashicell/assets/images/logo.png" alt="Logo" />
                    <h1 className="text-2xl font-bold mb-4 text-white">SDU UMS</h1>
                </div>
                <hr className='w-[224px] ml-10 mb-11'></hr>
                <ul className="space-y-2 font-medium pl-9">
                    <li onClick={DashHandler} className="flex items-right">
                        <a className="flex items-center py-4 px-10 text-white rounded-lg dark:text-white hover:bg-sky-800 dark:hover:bg-gray-700 group">
                            <FaTable className="mr-2 w-5 h-5 text-white transition duration-75 dark:text-gray-400  dark:group-hover:text-white" />
                            <div className="ms-3 text-lg ">Dashboard</div>
                        </a>
                    </li>

                    {/* Dropdown Button */}
                    <li className="flex items-right mb-5">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center py-4 px-10 text-white rounded-lg dark:text-white hover:bg-sky-800 dark:hover:bg-gray-700 group"
                        >
                            <FaFolder className="mr-2 w-5 h-5 text-white transition duration-75 dark:text-gray-400  dark:group-hover:text-white" />
                            <div onClick={DeptHandler} className="ms-3 text-lg">Departments</div>
                            {/* <svg
                                className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg> */}
                        </button>
                    </li>

                    {/* Dropdown Content */}
                    {/* <div
                        className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-300 rounded-lg overflow-auto h-[200px] shadow w-44 dark:bg-gray-700 mx-7`}
                    >
                        <div onClick={DeptHandler}>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                All Departments
                            </a>
                        </div>
                        {Array.isArray(apiData) && apiData.map((data) => (
                            <ul key={data.deptId} className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a onClick={() => viewDeptHandler(data.deptId)} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        {data.deptName}
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </div> */}
                    <li onClick={AddUserHandler} className="flex items-right mb-5">
                        <a className="flex items-center py-4 px-10 text-white rounded-lg dark:text-white hover:bg-sky-800 dark:hover:bg-gray-700 group">
                            <FaUserPlus className="mr-2 w-5 h-5 text-white transition duration-75 dark:text-gray-400  dark:group-hover:text-white" />
                            <span className="ms-3  text-lg">Add User</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside >
    );
};
