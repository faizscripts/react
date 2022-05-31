import React, {useEffect} from "react";
import SearchBar from "./SearchBar";
import {connect} from "react-redux";
import {fetchVideos} from "../actions";
import VideoList from "./VideoList";

const App = ({term, fetchVideos, videos}) => {

    useEffect(() => {
        fetchVideos(term)
    }, [term])

    console.log(videos);

    return (
        <div className="ui container">
            <SearchBar/>
            <VideoList />
        </div>
    )
}

const mapStateToProps = (state) => {
    if (state.form.searchForm) {
        return {term: state.form.searchForm.values.searchInput, videos: state.videos}
    } else {
        return {term: "rise up", videos: state.videos}
    }
}

export default connect(mapStateToProps, {fetchVideos})(App)