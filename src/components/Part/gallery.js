import {useState} from "react";
import "./gallery.css"
import leftarrow from "./../../assets/images/arrow_left.svg"
import rightarrow from "./../../assets/images/arrow_right.svg"

export const Gallery = ({photos}) => {
    const [index, setIndex] = useState(0)
    function nextPhoto() {
        index >= photos.length - 1 ? setIndex(0) : setIndex(index + 1)
    }

    function previousPhoto() {
        index <= 0 ? setIndex(photos.length - 1) : setIndex(index - 1)
    }

    let currentPhoto = photos[index]
    return (
        <div className={"container_gallery"}>
            <img className="photo" src={currentPhoto} alt="logement"/>
            {photos.length >= 2 && ( 
            <>
            <img className="left_arrow" onClick={previousPhoto} src={leftarrow} alt="left arrow"/>
            <img className="right_arrow" onClick={nextPhoto} src={rightarrow} alt="right arrow"/>
            <p>{index + 1}/{photos.length}</p>
            </>
            )}
        </div>
    )
}