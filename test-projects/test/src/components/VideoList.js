import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {

    renderVideos = () => {
        return this.props.videos.map(
            video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} />
        )
    }

    render() {
        return(
            <div className='ui relaxed divided list'>
                {this.renderVideos()}
            </div>
        )
    }
}

export default VideoList