import React, {useState} from "react"
import "./savings.scss"

export default function Savings() {

    const[money, setMoney] = useState('');
    const[employee, setEmployee] = useState('');
    const[result, finalRes] = useState('');
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        const result = parseInt(money) - (39 + (4 * (parseInt(employee))))
        result.toPrecision(2);
        console.log(result);
        finalRes(result);
    }

    return (
        <div className="savings" id="savings">
            <div className="left">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                    <h2>Savings Calculator</h2>
                    <h1>How much do you currently pay your accountant per month?</h1>
                    <textarea input type="number" required value={money} onChange={(e) => setMoney(e.target.value)} decimalCharacter="."></textarea>
                    <h1>How many employees do you have?</h1>
                    <textarea required value={employee} onChange={(e)=> setEmployee(e.target.value)}></textarea>
                    <button type="submit">Find how much I'll save</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>You'll save</h2>
                <h1>£{result}</h1>
                <h2>per year</h2>
                </div>
            </div>
        </div>         
    )
}