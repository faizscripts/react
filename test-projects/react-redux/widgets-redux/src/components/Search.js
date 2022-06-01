import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {wikiSearch} from "../actions";

const Search = ({wikiSearch, results}) => {

    const renderInput = ({input, label}) => {

        return (
            <div className="field">
                <label htmlFor="search">{label}</label>
                <input name={input.name} type="text" onChange={(event) => {
                    wikiSearch(event.target.value);
                }}/>
            </div>
        )
    }

    const renderList = results.map(
        result => {
            const {pageid, title, snippet} = result

            return(
                <div className="item" key={pageid}>
                    <div className="right floated content">
                        <a
                            className="ui button"
                            href={`https://en.wikipedia.org?curid=${pageid}`}>
                            Go
                        </a>
                    </div>
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: snippet}}/>
                    </div>
                </div>
            )
        }
    )

    return (
        <div>
            <div className="ui form">
                <Field name="search" component={renderInput} label="Enter Search Term"/>
            </div>
            <div className="ui celled list">
                {renderList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {results: state.results}
}

const formWrapped = reduxForm({
    form: "wikipediaSearch"
})(Search)

export default connect(mapStateToProps, {wikiSearch})(formWrapped)