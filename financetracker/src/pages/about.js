import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    // Initialize state with localStorage data or empty array
    const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || []);
    const [incomes, setIncomes] = useState(JSON.parse(localStorage.getItem('incomes')) || []);
    const [newExpenseName, setNewExpenseName] = useState('');
    const [newExpenseAmount, setNewExpenseAmount] = useState('');
    const [newIncomeName, setNewIncomeName] = useState('');
    const [newIncomeAmount, setNewIncomeAmount] = useState('');
    const [cardInfo, setCardInfo] = useState(JSON.parse(localStorage.getItem('cardInfo')) || {});
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem('transactions')) || []);
    const [newTransactionValue, setNewTransactionValue] = useState('');
    const [newTransactionDate, setNewTransactionDate] = useState('');
    // Update localStorage whenever expenses or incomes change
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    useEffect(() => {
        localStorage.setItem('incomes', JSON.stringify(incomes));
    }, [incomes]);

    useEffect(() => {
        localStorage.setItem('cardInfo', JSON.stringify(cardInfo));
    }, [cardInfo]);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const addExpense = () => {
        if (!newExpenseAmount || !newExpenseName) return;
        const newExpense = { id: Date.now(), name: newExpenseName, amount: parseFloat(newExpenseAmount) };
        setExpenses([...expenses, newExpense]);
        setNewExpenseName('');
        setNewExpenseAmount('');
    };

    const deleteExpense = (expenseId) => {
        setExpenses(expenses.filter(expense => expense.id !== expenseId));
    };

    

    const addIncome = () => {
        if (!newIncomeAmount || !newIncomeName) return;
        const newIncome = { id: Date.now(), name: newIncomeName, amount: parseFloat(newIncomeAmount) };
        setIncomes([...incomes, newIncome]);
        setNewIncomeName('');
        setNewIncomeAmount('');
    };


    const deleteIncome = (incomeId) => {
        setIncomes(incomes.filter(income => income.id !== incomeId));
    };

    return (
        <div>
            <Navbar />
            <h1 className="ml-2 text-3xl font-bold underline mb-4">My Finances</h1>
            <div className="flex flex-wrap -m-2">
                {/* Expenses Section */}
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-3">Expenses</h2>
                        <input
                            type="text"
                            value={newExpenseName}
                            onChange={(e) => setNewExpenseName(e.target.value)}
                            placeholder="Expense Name"
                            className="p-2 border rounded mb-2 mr-2"
                        />
                        <input
                            type="number"
                            value={newExpenseAmount}
                            onChange={(e) => setNewExpenseAmount(e.target.value)}
                            placeholder="Expense Amount"
                            className="p-2 border rounded mb-2"
                        />
                        <button onClick={addExpense} className="ml-2 bg-red-500 text-white p-2 rounded">
                            Add Expense
                        </button>
                        <div className="mt-4">
                            {expenses.map(expense => (
                                <div key={expense.id} className="bg-red-100 p-3 rounded-lg shadow-md mb-2">
                                    {expense.name}: ${expense.amount.toFixed(2)}
                                    <button onClick={() => deleteExpense(expense.id)}
                                            className="bg-red-500 text-white p-1 rounded ml-2">
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Incomes Section */}
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-3">Incomes</h2>
                        <input
                            type="text"
                            value={newIncomeName}
                            onChange={(e) => setNewIncomeName(e.target.value)}
                            placeholder="Income Name"
                            className="mr-2 p-2 border rounded mb-2"
                        />
                        <input
                            type="number"
                            value={newIncomeAmount}
                            onChange={(e) => setNewIncomeAmount(e.target.value)}
                            placeholder="Income Amount"
                            className="p-2 border rounded mb-2"
                        />
                        <button onClick={addIncome} className="ml-2 bg-blue-500 text-white p-2 rounded">
                            Add Income
                        </button>
                        <div className="mt-4">
                            {incomes.map(income => (
                                <div key={income.id} className="bg-green-100 p-3 rounded-lg shadow-md mb-2">
                                    {income.name}: ${income.amount.toFixed(2)}
                                    <button onClick={() => deleteIncome(income.id)}
                                            className="bg-red-500 text-white p-1 rounded ml-2">
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
