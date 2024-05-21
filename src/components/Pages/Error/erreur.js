import {Link} from "react-router-dom";
import "./erreur.css"

function Erreur (){
    return(
    <main>
        <div className="erreurcontainer">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </main>
    )
}

export default Erreur