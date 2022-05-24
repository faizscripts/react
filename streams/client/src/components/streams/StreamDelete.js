import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchStream, deleteStream} from "../../actions";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = ({fetchStream, stream, deleteStream}) => {

    useEffect(() => {
        fetchStream(history.location.state.streamId)
    }, [])

    const action = (
        <>
            <button onClick={() => deleteStream(history.location.state.streamId)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </>
    )

    const renderContent = () => {
        if (!stream) {
            return 'Are you sure you want to delete this stream'
        }

        return `Are you sure you want to delete stream with title: ${stream.title}`
    }

    return (
        <Modal
            title="Delete Stream"
            content={renderContent()}
            action={action}
            onDismiss={() => history.push('/')}
        />
    )
}

const mapStateToProps = (state) => {
    return {stream: state.streams[history.location.state.streamId]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)