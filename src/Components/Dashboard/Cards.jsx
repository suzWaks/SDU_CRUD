import React from 'react';
import { FaMale, FaFemale, FaUser, FaUsers, FaFolder } from 'react-icons/fa';

export const Cards = () => {
    const cardData = [
        { count: 200, gender: 'Male', icon: <FaMale className="w-10 h-10" /> },
        { count: 150, gender: 'Female', icon: <FaFemale className="w-10 h-10" /> },
        { count: 300, gender: 'Total Employee', icon: <FaUsers className="w-10 h-10" /> },
        { count: 250, gender: 'Total Departments', icon: <FaFolder className="w-10 h-10" /> },
    ];

    return (
        <div className='w-max-screen pt-10 pb-5 '>
            <div className="flex justify-evenly space-x-4 m-4">
                {cardData.map((data, index) => (
                    <div
                        key={index}
                        className="flex-grow w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex"
                    >
                        <div>
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-600 dark:text-white">{data.count}</h5>
                            <p className="font-normal text-gray-400 dark:text-gray-400">{data.gender}</p>
                        </div>
                        <div className="ml-auto mt-2 w   text-blue-500 ">{data.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
