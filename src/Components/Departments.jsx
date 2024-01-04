import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//TODO: Image upload function not in working state 
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

export const Departments = () => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch data from API when the component mounts
        axios.get('https://6594e19204335332df819ace.mockapi.io/cards')
            .then(response => setCardData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAddDepartment = (event) => {
        event.preventDefault();
        try {
            // Fetch data from input fields
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const imageURL = document.getElementById('url').value;

            // Make sure required fields are not empty
            if (!name || !description || !imageURL) {
                window.alert('Please fill in all required fields.');
                return;
            }

            // Define the data for the new department
            const newDepartmentData = {
                name,
                description,
                imageURL,
            };
            console.log(newDepartmentData, "Adding data");

            // Make a POST request to add a new department with the provided data
            axios.post('https://6594e19204335332df819ace.mockapi.io/cards', newDepartmentData)
                .then(() => {
                    // Close the modal
                    setIsModalOpen(false);
                    console.log("Added data");

                    // Refresh the page
                    window.location.reload();
                })
                .catch(error => console.error('Error adding department:', error));
        } catch (error) {
            console.error('Error adding department:', error);
        }
    };

    const viewDeptHandler = (id) => {
        // Make an API call to fetch user details based on id
        axios.get(`https://6594e19204335332df819ace.mockapi.io/cards/${id}`)
            .then(response => {
                const deptDetails = response.data;
                console.log(deptDetails);

                // Navigate to the /userview page and pass the user details as props
                navigate('/deptview', { replace: true, state: { deptDetails } });
            })
            .catch(error => console.error('Error fetching department data:', error));
    };

    return (

        <div className='overflow-auto max-w-screen '>
            <div className='flex justify-between'>
                <h1 className='pt-5  px-11 text-4xl font-bold text-blue-700'>Departments</h1>
                <button onClick={() => setIsModalOpen(true)} className=" mr-10 mt-5 p-2 bg-blue-500 text-white rounded-md">
                    Add Department +
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-11">

                {cardData.map((card, index) => (
                    <div onClick={() => viewDeptHandler(card.id)} key={index}>
                        <div key={index} className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden " style={{ height: '24rem', width: '22rem' }}>
                            <a href="#">
                                <img className="rounded-t-lg" style={{ height: '65%', width: '100%' }} src={card.imageURL} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden overflow-ellipsis max-h-[3.6em] line-clamp-2">{card.description}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for adding a new department */}
            {isModalOpen && (
                <div id="crud-modal" role="dialog" aria-hidden="false" tabIndex="-1" className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center max-h-screen max-w-screen bg-stone-800/50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-1">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Add new department
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form onSubmit={handleAddDepartment} className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"

                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type department name"
                                            required=""
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <textarea
                                            id="description"
                                            maxLength="256"
                                            rows="4"

                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write something about the department"
                                        ></textarea>
                                    </div>
                                    <label htmlFor="url" className="block mt-1 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>

                                    <div className="col-span-2">

                                        <input
                                            type="text"
                                            name="url"
                                            id="url"

                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter image URL"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add new department
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};
