import "./invoicing.scss";

export default function Savings() {
    return (
        <div className="invoicing" id="invoicing" >
            <div className="left">
                <div className="wrapper">
                    <h2>Invoices that get</h2>
                    <h1>you paid on time.</h1>
                    <button onclick={"#savings"}>Send better invoices now →</button>
                </div>
            </div>

            <div className="right">
                <div className="imgContainer">
                    <img src="assets/graphic.png" alt=""/>
                </div>
            </div>
        </div>
    )
}