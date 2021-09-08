import React, {useState} from "react"
import "./savings.scss"

const initialValues = {
    money: "",
    employees: "",
}; 

export default function Savings() {

    const[values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    return (
        <div className="savings" id="savings">
            <div className="left">
                <div className="wrapper">
                    <form>
                    <h2>Savings Calculator</h2>
                    <h1>How much do you currently pay your accountant per month?</h1>
                    <textarea input value={values.money} onChange={handleInputChange} name="money" placeholder="Type here how much in £"></textarea>
                    <h1>How many employees do you have?</h1>
                    <textarea input value={values.employees} onChange={handleInputChange} name="employees" placeholder="Type here how much employees"></textarea>
                    <button type="submit">Find how much I'll save</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>You'll save</h2>
                <h1>£XXXX</h1>
                <h2>per year</h2>
                </div>
            </div>
        </div>         
    )
}