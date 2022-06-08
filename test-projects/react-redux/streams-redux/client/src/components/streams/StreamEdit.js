import React, {useEffect} from "react";
import _ from "lodash"
import history from "../../history";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({fetchStream, stream, editStream}) => {

    useEffect(() => {
        fetchStream(history.location.state.streamId)
    }, [])

    const onSubmit = (formValues) => {
        editStream(formValues, history.location.state.streamId)
    }

    if (!stream) {
        return (
            <div>Loading ...</div>
        )
    }

    return(
        <div>
            <h3>Edit Stream</h3>
            <StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {stream: state.streams[history.location.state.streamId]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)