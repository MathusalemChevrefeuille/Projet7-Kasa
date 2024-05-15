import "./header.css"
import Logo from '../../assets/images/LOGOH.svg';
import {Link, useLocation} from "react-router-dom";

export default function header(){
  let location = useLocation().pathname
    return(
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <Link className={location === "/" && "underline"} to="/">Accueil</Link>
                <Link className={location === "/apropos" && "underline"} to="/apropos">A propos</Link>
            </nav>
        </header>

    )
}

