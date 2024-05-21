import "./Housingcard.css"
import {Link} from "react-router-dom";
const data = require("../../data/logements.json")


function Housingcard () {
    return(
        <div className="housingcardcontainer">
            {data.map((house) => (
                <Link to={`/logement/${house.id}`}>
                    <div className="housingcard" key={house.id}>
                        <img src={house.cover} alt={house.title}/>
                        <p>{house.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Housingcard