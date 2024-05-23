import React, { useState } from "react";
import arrow from "../../assets/images/arrow.svg";
import  "./dropdown.css"

const Dropdown = ({tiltle, content}) => {
    const [isOpen , setisOpen] = useState(false)

    function Drop(){
        setisOpen(!isOpen)
    }

    return(
        <div className="dropdowncontainer">
            <div onClick={() => {
                Drop()
            }}>
                <div className="dropdowntiltle">
                    <h2>{tiltle}</h2>
                    <img src={arrow} alt="fleche" className={isOpen ? "arrowup" : "arrowdown"} />
                </div>
            </div>
                <div className={`dropdownmenucontent ${isOpen ? 'open' : ''}`} >
                    {content.map(string =><p>{string}</p>)}
                </div>
        </div>
    )
}


export default Dropdown