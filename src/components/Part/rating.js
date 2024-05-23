import fullstart from "../../assets/images/star-full.svg"
import emptystart from "../../assets/images/star-empty.svg"

function Rating ({rating}) {
    const t = []
    for(let i = 0; i < rating; i++){
        t.push(<img src={fullstart} alt="etoile pleine" className="star"/>)
    }
    for(let c =0; c < 5 - rating; c++){
        t.push(<img src={emptystart} alt="etoile vide" className="star"/>)
    }
    return(
        <div className="starcontainer">
         {t}
        </div>
    )
}

export default Rating