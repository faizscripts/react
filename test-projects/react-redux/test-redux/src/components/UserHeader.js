import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions";
import _ from "lodash"

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    renderName = () => {
        if (this.props.user){
            return(
                <div className="header">
                    {this.props.user.name}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderName()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)