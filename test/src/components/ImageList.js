import React from "react";
import "./ImageList.css"
import ImageCard from "./ImageCard";

const ImageList = ({images}) => {
    const renderImages = images.map(image => {
        return(<ImageCard image={image} key={image.id} />)
    }) 
    
    return(
        <div className="image-list">
            {renderImages}
        </div>
    )
}

export default ImageList