import React from 'react'

export const Sections = () => {
    return (

        <div className="container mx-auto p-4 md:p-8 lg:p-12">
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-500" >Sections</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <li class="flex flex-row mb-2 border-gray-400">
                    <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-[#eac808] dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-white" >Front End Development</h1>
                    </div>
                </li>
                <li class="flex flex-row mb-2 border-gray-400">
                    <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-[#3b82f6] dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-white" >Back End Development</h1>
                    </div>
                </li>
                <li class="flex flex-row mb-2 border-gray-400">
                    <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-[#a855f7] dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-white" >DevOps</h1>
                    </div>
                </li>

            </ul>
        </div>

    )
}
