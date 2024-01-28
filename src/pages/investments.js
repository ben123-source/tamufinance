import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Investment = () => {
    const [investment, setInvestment] = useState('');
    const [advice, setAdvice] = useState({ shortTerm: '', longTerm: '' });

    const handleInputChange = (event) => {
        setInvestment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newAdvice = { shortTerm: '', longTerm: '' };
        if (investment < 500) {
            newAdvice.shortTerm = 'Consider saving in a high-yield savings account or a short-term CD.';
            newAdvice.longTerm = 'Explore micro-investing platforms or invest in books for personal growth.';
        } else if (investment >= 500 && investment <= 5000) {
            newAdvice.shortTerm = 'Look into peer-to-peer lending or short-term bond funds.';
            newAdvice.longTerm = 'Consider index funds, ETFs, or starting a Roth IRA.';
        } else {
            newAdvice.shortTerm = 'Diversify with a mix of stocks and bonds or explore short-term real estate investments.';
            newAdvice.longTerm = 'Consider a diversified portfolio in stocks, long-term real estate investments, or consult with a financial advisor.';
        }

        setAdvice(newAdvice);
    };

    return (
        <div>
            <Navbar />
            <div class="bg-gradient-to-r from-lime-100 to-lime-100 p-10 border-4">
                <div class="text-center rounded-lg">
                    <h1 class="text-3xl font-bold underline mb-4">Investment Advice</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <b className='mr-2'>Enter your investment amount:</b>
                            <input type="number" value={investment} onChange={handleInputChange} class="bg-gray-100 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"/>
                        </label>
                        <br/><br/>
                        <button type="submit" class="bg-gray-200 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Get Advice</button>
                    </form>
                    {advice.shortTerm && <div class="mt-4"><h2 class="font-bold">Short-Term Advice:</h2><p>{advice.shortTerm}</p></div>}
                    {advice.longTerm && <div class="mt-4"><h2 class="font-bold">Long-Term Advice:</h2><p>{advice.longTerm}</p></div>}
                </div>
            </div>
        </div>
    );
};

export default Investment;
