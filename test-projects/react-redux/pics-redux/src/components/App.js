import React, {useEffect} from "react";
import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import {querySearch} from "../actions";
import ImageList from "./ImageList";

const App = ({term, querySearch, images}) => {

    useEffect(() => {
        querySearch(term)
    }, [term])

    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar />
            <ImageList />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.form.SearchBar ? {term: state.form.SearchBar.values.searchField, images: state.images} : {term: ""}
}

export default connect(mapStateToProps, {querySearch})(App)