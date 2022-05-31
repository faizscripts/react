import React from "react";
import {connect} from "react-redux";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {

    const renderList = () => {
        if (videos) {
            return videos.map(
                video => <VideoItem key={video.id.videoId} video={video} />
            )
        }
    }

    return(
        <div>
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {videos: state.videos}
}

export default connect(mapStateToProps)(VideoList)