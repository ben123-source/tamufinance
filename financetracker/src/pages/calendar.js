import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [reminders, setReminders] = useState(JSON.parse(localStorage.getItem('reminders')) || []);
    const [eventName, setEventName] = useState('');
    const [fee, setFee] = useState('');

    useEffect(() => {
        localStorage.setItem('reminders', JSON.stringify(reminders));
    }, [reminders]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const createReminder = () => {
        if (!selectedDate || !eventName || !fee) return;

        const newReminder = {
            id: Date.now(), // unique id for each reminder
            date: selectedDate.toISOString().substring(0, 10), // Store only the date part
            eventName,
            fee
        };

        setReminders([...reminders, newReminder]);
        setEventName('');
        setFee('');
    };

    const deleteReminder = (reminderId) => {
        setReminders(reminders.filter(reminder => reminder.id !== reminderId));
    };

    // Helper to get array of dates for highlighting on the calendar
    const getHighlightedDates = () => {
        return reminders.map(reminder => new Date(reminder.date));
    };
    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold mt-4 mb-4 text-lime-800">Calendar</h1>
            <div className="container mx-auto p-4">
                <div className="flex justify-center">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                        highlightDates={getHighlightedDates()}
                        className="bg-lime-100 rounded-lg border-2 border-lime-200"
                    />
                </div>
                {selectedDate && (
                    <div className="flex justify-center mt-3">
                        <div className="bg-lime-100 p-4 rounded-lg shadow-md border-2 border-lime-200">
                            <input
                                type="text"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                placeholder="Event Name"
                                className="p-2 border rounded mr-2"
                            />
                            <input
                                type="number"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                                placeholder="Fee"
                                className="p-2 border rounded"
                            />
                            <button onClick={createReminder} className="bg-blue-500 text-white p-2 rounded ml-2">
                                Add Reminder
                            </button>
                        </div>
                    </div>
                )}
                <div className="flex justify-center mt-3">
                    <ul className="list-disc bg-lime-100 p-4 rounded-lg shadow-md border-2 border-lime-200 w-full md:w-1/2 text-left">
                        {reminders.map((reminder) => (
                            <li key={reminder.id} className="mb-2">
                                {reminder.date} - {reminder.eventName} - ${reminder.fee}
                                <button onClick={() => deleteReminder(reminder.id)} className="text-red-600 ml-2">
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
