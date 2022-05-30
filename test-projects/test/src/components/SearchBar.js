import React from "react";

class SearchBar extends React.Component {

    state = {term: ""}

    onSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Search Video
                        </label>
                        <div className="ui icon input">
                            <input type="text" value={this.state.term} onChange={(event) => this.setState({term: event.target.value})} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar