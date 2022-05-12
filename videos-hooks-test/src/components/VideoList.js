import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {

    const renderedVideos = videos.map(
        video => {
            return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
        }
    )

    return (
        <div className="ui relaxed divided list">
            {renderedVideos}
        </div>
    )
}

export default VideoList;