import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchStream} from "../../actions";
import history from "../../history";
import {ReactFlvPlayer} from 'react-flv-player'

const StreamShow = ({fetchStream, stream}) => {

    useEffect(() => {
        fetchStream(history.location.state.streamId)
    }, [])

    if (!stream) return <div>Loading...</div>

    const {id, title, description} = stream

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
    return { stream: state.streams[history.location.state.streamId]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)