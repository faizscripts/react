import React from "react";
import "./VideoItem.css"

class VideoItem extends React.Component {

    onVideoSelect = () => {
        this.props.onVideoSelect(this.props.video.snippet)
    }

    render() {
        const {thumbnails, title}  = this.props.video.snippet

        return (
            <div className="video-item item" onClick={this.onVideoSelect} >
                <img className="ui image" src={thumbnails.medium.url} alt="thumbnail" />
                <div className="content">
                    <div className="header"> {title} </div>
                </div>
            </div>
        );
    }
}

export default VideoItem