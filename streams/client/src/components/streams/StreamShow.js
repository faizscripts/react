import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ReactFlvPlayer} from 'react-flv-player'
import history from "../../history";
import {fetchStream} from "../../actions";

const StreamShow = ({fetchStream, stream}) => {

    useEffect(() => {
        fetchStream(id)

    }, [])

    const id = history.location.state.streamId

    if (!stream) return <div>Loading...</div>

    const {title, description} = stream

    const url = `http://localhost:8000/live/${id}.flv`

    return(
        <div>
            <ReactFlvPlayer
                url = {url}
                width = "100%"
            />
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {stream: state.streams[history.location.state.streamId]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)