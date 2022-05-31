import React from "react";
import {connect} from "react-redux";

const VideoItem = ({video}) => {
    return(
        <div>
            <h2>video.snippet.title</h2>
        </div>
    )
}

export default connect()(VideoItem)