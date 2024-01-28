import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        // Here you could also handle the logic of storing the due date for the bill
        setSelectedDate(date);
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold mt-4 mb-4">Calendar</h1>
            <div className="container mx-auto p-4">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                />
            </div>
        </div>
    );
}

export default Calendar;
