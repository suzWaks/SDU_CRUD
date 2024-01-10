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
        { count: male, gender: 'Male', icon: <FaMale className="w-10 h-10" />, bg: '#646AD4' },
        { count: female, gender: 'Female', icon: <FaFemale className="w-10 h-10" />, bg: '#D464A1' },
        { count: others, gender: 'Others', icon: <FaTransgender className="w-10 h-10" />, bg: '#75D464' },
        { count: totalData, gender: 'Total Employee', icon: <FaUsers className="w-10 h-10" />, bg: '#D46464' },

    ];

    return (
        <div className='w-max-screen pt-10 pb-5 '>
            <div className="flex justify-evenly space-x-4 m-4">
                {cardData.map((data, index) => (
                    <div
                        key={index}
                        className="transition duration-200 shadow-md ease-in-out transform hover:-translate-y-1 flex-grow w-64 p-6  border border-gray-200 rounded-lg hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex"
                        style={{
                            backgroundColor: data.bg,
                        }}
                    >
                        <div>
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white">{data.count}</h5>
                            <p className="font-normal text-gray-200 dark:text-gray-400">{data.gender}</p>
                        </div>
                        <div className="ml-auto mt-2 w text-white ">{data.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
