import Banner from "../../Part/banner"
import imgbanner from "../../../assets/images/Banneracceuil.svg"
import Housingcard from "../../Part/Housingcard"

function accueil(){
    return(
    <main>
        <Banner text={"Chez vous, partout et ailleurs"} image={imgbanner} alt={"Falaise bord de mer"} />
        <Housingcard/>
    </main>
    )
}

export default accueil