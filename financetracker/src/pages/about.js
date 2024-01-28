import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold underline mb-4">My Finances</h1>
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        Cards
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        Transaction History
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        Income
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        Expenses
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
