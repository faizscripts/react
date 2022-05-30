import React from "react";
import {connect} from "react-redux";
import "./ImageList.css"
import ImageCard from "./ImageCard";

const ImageList = ({images}) => {

    const renderImages = (images) => {
        if (images.length > 0) {
            return images.map(
                image => {
                    return(
                        <ImageCard key={image.id} image={image} />
                    )
                }
            )
        }
    }

    return(
        <div className="image-list">
            {renderImages(images)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {images: state.images}
}

export default connect(mapStateToProps)(ImageList)