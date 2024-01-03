import React, { useState, useEffect } from 'react'
import { Sections } from './Sections';
import axios from 'axios';
import { Tabledpt } from './Tabledpt';
export const DeptView = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://6594e19204335332df819ace.mockapi.io/cards');
                setApiData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="flex-col justify-center w-screen overflow-auto">
            {Array.isArray(apiData) && apiData.map((data) => (
                <div key={data.id} className='flex-col text-center pt-11'>
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">{data.name}</span></h1>
                    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{apiData ? data.description : 'Loading data...'}</p>
                </div>
            ))}

            <Sections />
            <Tabledpt />

        </div>
    )
}
