import "./banner.css"

function Banner ({text , image ,alt}){
    return(
        <div className="banner">
            <img src={image} alt={alt}/>
            <p>{text}</p>
        </div>
    )
}

export default Banner