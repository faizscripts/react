import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    onSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({videos: response.data.items})
    }

    onVideoSelect = (video) => {
        console.log(video)
        this.setState({selectedVideo: video})
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} />
                <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect} />
                Found: {this.state.videos.length} videos
            </div>
        )
    }
}

export default App