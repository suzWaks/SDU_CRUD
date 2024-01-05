import React, { useEffect, useState } from 'react';
import { FaMale, FaFemale, FaTransgender, FaUsers, FaFolder } from 'react-icons/fa';
import axios from 'axios';

export const Cards = () => {

    const [male, setMale] = useState();
    const [female, setFemale] = useState();
    const [others, setOthers] = useState();
    const [totalData, setTotalData] = useState();


    useEffect(() => {
        axios
            .get("https://smiling-mark-production.up.railway.app/users/total")
            .then((response) => setTotalData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    useEffect(() => {
        axios
            .get("https://smiling-mark-production.up.railway.app/users/total/1")
            .then((response) => setMale(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    useEffect(() => {
        axios
            .get("https://smiling-mark-production.up.railway.app/users/total/2")
            .then((response) => setFemale(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    useEffect(() => {
        axios
            .get("https://smiling-mark-production.up.railway.app/users/total/3")
            .then((response) => setOthers(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const cardData = [
        { count: male, gender: 'Male', icon: <FaMale className="w-10 h-10" /> },
        { count: female, gender: 'Female', icon: <FaFemale className="w-10 h-10" /> },
        { count: others, gender: 'Others', icon: <FaTransgender className="w-10 h-10" /> },
        { count: totalData, gender: 'Total Employee', icon: <FaUsers className="w-10 h-10" /> },

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
                        <div className="ml-auto mt-2 w   text-sky-600 ">{data.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
