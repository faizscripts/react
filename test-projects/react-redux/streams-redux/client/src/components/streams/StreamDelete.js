import React from "react";
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {fetchStream, deleteStream} from "../../actions";

const StreamDelete = ({fetchStream, deleteStream, stream}) => {

    React.useEffect(() => {
        fetchStream(history.location.state.streamId)
    }, [])

    const actions = (
        <React.Fragment>
            <button onClick={() => deleteStream(stream.id)} className="ui button negative">Delete</button>
            <button onClick={() => history.push("/")} className="ui button">Cancel</button>
        </React.Fragment>
    )

    if (!stream) return <div>Loading...</div>

    return (
        <div>
            StreamDelete
            <Modal title="Delete Stream" content={`Are you sure you want to delete ${stream.title}`} actions={actions} onDismiss={() => history.push("/")} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {stream: state.streams[history.location.state.streamId]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)