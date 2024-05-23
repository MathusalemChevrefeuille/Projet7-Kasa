import { useParams } from "react-router-dom"
import { Gallery } from "../../Part/gallery"
import Erreur from '../Error/erreur'
import "./logement.css"
import Tags from "../../Part/tags"
import Rating from "../../Part/rating"

const data = require("../../../data/logements.json")


function Logement (){
    const {houseid} = useParams()
    const house = data.find(function(housing){
        return housing.id === houseid ;
    }
)
    if (house === undefined){
        return <Erreur />
    }
    return(
        <main>
        <Gallery photos={house.pictures}/>
        <div className={"top_part"}>
            <div className={"left_part"}>
                <h1>{house.title}</h1>
                <p className={"location"}>{house.location}</p>
                <Tags tags={house.tags}/>
            </div>
            <div className={"right_part"}>
                <div className={"host"}>
                     <p className={"host_name"}>{house.host.name}</p>
                    <img className={"host_picture"} src={house.host.picture} alt={"Hôte"}/>
                </div>
                <Rating rating={house.rating}/>
            </div>
        </div>
    </main>
)
}

export default Logement