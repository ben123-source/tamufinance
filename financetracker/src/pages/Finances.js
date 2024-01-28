import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Finances = () => {
    // State initialization for expenses, incomes, card info, and transactions
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
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [newTransactionName, setNewTransactionName] = useState('');


// Handler for adding a transaction


// Handler for deleting a transaction

    // Update localStorage for expenses, incomes, cardInfo, and transactions
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

    // Handlers for expenses, incomes, card info, and transactions
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

    const handleAddTransaction = () => {
        if (!newTransactionValue || !newTransactionDate) return;
        const newTransaction = {
            id: Date.now(),
            value: parseFloat(newTransactionValue),
            date: newTransactionDate
        };
        setTransactions([...transactions, newTransaction]);
        setNewTransactionValue('');
        setNewTransactionDate('');
    };

    const deleteTransaction = (transactionId) => {
        setTransactions(transactions.filter(transaction => transaction.id !== transactionId));
    };

    const handleAddUpdateCardInfo = () => {
        if (!cardName || !cardNumber) return;
        setCardInfo({ ...cardInfo, name: cardName, number: cardNumber });
        setCardName('');
        setCardNumber('');
    };

    const handleDeleteCardInfo = () => {
        setCardInfo({});
    };

    return (
        <div>
            <Navbar />
            <h1 className="ml-2 text-3xl font-bold underline mb-4">My Finances</h1>
            <div className="flex flex-wrap -mx-2">
                {/* Card Information Section */}
                <div className="mb-2 w-full md:w-1/2 px-2">
                    <div className="bg-lime-100 p-6 rounded-lg shadow-md border-2 border-lime-200">
                        <h2 className="text-xl font-bold mb-3">Card Information</h2>
                        <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="Card Name"
                            className="p-2 border rounded mb-2 mr-2 w-full"
                        />
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Card Number"
                            className="p-2 border rounded mb-2 w-full"
                        />
                        <div className="flex justify-start">
                            <button onClick={handleAddUpdateCardInfo} className="bg-blue-500 text-white p-2 rounded">
                                Add/Update Card
                            </button>
                            {cardInfo.name && (
                                <button onClick={handleDeleteCardInfo} className="bg-red-500 text-white p-2 rounded ml-2">
                                    Delete Card
                                </button>
                            )}
                        </div>
                        {cardInfo.name && (
                            <div className="bg-pink-200 p-3 rounded-lg shadow-md mt-2">
                                Card Name: {cardInfo.name}
                                <br />
                                Card Number: {cardInfo.number}
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Transaction History Section */}
                <div className="w-full md:w-1/2 px-2">
                    <div className="bg-lime-100 p-6 rounded-lg shadow-md border-2 border-lime-200">
                        <h2 className="text-xl font-bold mb-3">Transaction History</h2>

                        <input
                            type="text"
                            value={newTransactionName}
                            onChange={(e) => setNewTransactionName(e.target.value)}
                            placeholder="Transaction Name"
                            className="p-2 border rounded mb-2 w-full"
                        />
                        <input
                            type="number"
                            value={newTransactionValue}
                            onChange={(e) => setNewTransactionValue(e.target.value)}
                            placeholder="Transaction Value"
                            className="p-2 border rounded mb-2 w-full"
                        />
                        <input
                            type="date"
                            value={newTransactionDate}
                            onChange={(e) => setNewTransactionDate(e.target.value)}
                            placeholder="Transaction Date"
                            className="p-2 border rounded mb-2 w-full"
                        />

                        <button onClick={handleAddTransaction} className="bg-purple-500 text-white p-2 rounded">
                            Add Transaction
                        </button>

                        <div className="mt-4">
                            {transactions.map(transaction => (
                                <div key={transaction.id} className="bg-yellow-200 p-3 rounded-lg shadow-md mb-2">
                                    {transaction.name} - ${transaction.value.toFixed(2)} on {transaction.date}
                                    <button onClick={() => deleteTransaction(transaction.id)}
                                            className="bg-red-500 text-white p-2 rounded ml-2">
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Expenses Section */}
                <div className="w-full md:w-1/2 px-2">
                    <div className="bg-lime-100 p-6 rounded-lg shadow-md border-2 border-lime-200">
                        <h2 className="text-xl font-bold mb-3">Expenses</h2>
                        <input
                            type="text"
                            value={newExpenseName}
                            onChange={(e) => setNewExpenseName(e.target.value)}
                            placeholder="Expense Name"
                            className="p-2 border rounded mb-2 mr-2 w-full"
                        />
                        <input
                            type="number"
                            value={newExpenseAmount}
                            onChange={(e) => setNewExpenseAmount(e.target.value)}
                            placeholder="Expense Amount"
                            className="p-2 border rounded mb-2 w-full"
                        />
                        <button onClick={addExpense} className="bg-red-500 text-white p-2 rounded">
                            Add Expense
                        </button>
                        <div className="mt-4">
                            {expenses.map(expense => (
                                <div key={expense.id} className="bg-red-100 p-3 rounded-lg shadow-md mb-2">
                                    {expense.name}: ${expense.amount.toFixed(2)}
                                    <button onClick={() => deleteExpense(expense.id)}
                                            className="bg-red-500 text-white p-2 rounded ml-2">
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    

                {/* Incomes Section */}
                <div className="mt-2 w-full md:w-1/2 px-2">
                    <div className="bg-lime-100 p-6 rounded-lg shadow-md border-2 border-lime-200">
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

export default Finances;
