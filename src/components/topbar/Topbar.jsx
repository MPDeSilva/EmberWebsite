import "./topbar.scss";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className= "wrapper">

               <div className= "left">
                   <a href="#invoicing" className="logo">ember.</a>
               </div>

               <div className= "left">
                   <a href="#invoicing" className="itemContainer">Invoicing</a>
                   </div>

                <div className="left">   
                   <a href="#savings" className="itemContainer">Savings Calculator</a>
                </div>

                <div className= "right">

                </div>

            </div>
       </div> 
    )
}