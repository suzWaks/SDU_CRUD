import React from 'react';
import { Cards } from './Dashboard/Cards';
import { Table } from './Dashboard/Table';


export const Dashboard = () => {
    return (
        <div className='h-screen w-screen overflow-scroll flex-col items-center'>
            <Cards />

            <Table />


        </div>
    );
};
