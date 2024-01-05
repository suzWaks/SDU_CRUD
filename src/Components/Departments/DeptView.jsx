import React, { useState, useEffect } from 'react'
import { Sections } from './Sections';
import { Tabledpt } from './Tabledpt';
import { useLocation } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import axios from "axios";

export const DeptView = () => {
    const location = useLocation();

    return (
        <div className="flex-col justify-center w-screen overflow-auto">

            <div className=' m-5 absolute right-0'>
                <button
                    type="button"
                    className="py-2 px-4 flex mr-4 outline-sky-600 hover:bg-sky-700 focus:ring-offset-green-200 text-sky-600 hover:text-gray-100 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                    <FaEdit className="w-5 h-5 mr-3" />
                    Edit
                </button>
            </div>
            <div className='flex-col text-center pt-11'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-sky-400">{location.state.deptDetails.name}</span></h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{location.state.deptDetails.description}</p>
            </div>

            <Sections />
            <Tabledpt />

        </div>
    )
}
