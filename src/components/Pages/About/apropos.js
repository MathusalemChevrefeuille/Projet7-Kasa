import Banner from "../../Part/banner"
import imgbanner from "../../../assets/images/Bannerapropos.svg"
import Dropdown from "../../Part/dropdown"
import "./apropos.css"

function apropos(){
    return (
        <main>
        <Banner image={imgbanner} alt={"Montage"} />
        <div className="container">
        <Dropdown tiltle ="Fiabilité" content ={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
        <Dropdown tiltle ="Respect" content ={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
        <Dropdown tiltle ="Service" content ={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
        <Dropdown tiltle ="Sécurité" content ={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
        </div>
        </main>
    )
}



export default apropos