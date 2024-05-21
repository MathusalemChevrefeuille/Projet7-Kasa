import { useParams } from "react-router-dom"

function Logement (){
    const {houseid} = useParams()
    console.log(houseid)
    return(<h1>Logements</h1>)
}

export default Logement