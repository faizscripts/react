import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts = this.props.posts.map(
        post => {
            const {id, title, body} = post
            return(
                <div className="item" key={id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
                    </div>
                </div>
            )
        }
    )

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList)