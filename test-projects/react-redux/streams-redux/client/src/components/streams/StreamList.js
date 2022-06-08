import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderStreams = () => {
        return this.props.streams.map(
            stream => {
                return(
                    <div className="item" key={stream.id}>
                        {this.renderEditButtons(stream)}
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`/streams/show/${stream.id}`} state={{streamId: stream.id}} className="header">
                                {stream.title}
                            </Link>
                            <div className="description">{stream.description}</div>
                        </div>
                    </div>
                )
            }
        )
    }

    renderEditButtons = (stream) => {
        if (this.props.userId === stream.userId){
           return(
               <div className="right floated content">
                   <Link to={`/streams/edit/${stream.id}`} state={{streamId: stream.id}} className="ui button primary">Edit</Link>
                   <Link to={`/streams/delete/${stream.id}`} state={{streamId: stream.id}} className="ui button negative">Delete</Link>
               </div>
           )
       }
    }

    renderCreateStream = () => {
        if (this.props.userId){
            return(
                <div style={{textAlign: "right"}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderStreams()}</div>
                {this.renderCreateStream()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)