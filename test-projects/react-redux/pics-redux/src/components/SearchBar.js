import React from "react";
import {Field, reduxForm} from "redux-form";
import {submitSearch} from "../actions";
import {connect} from "react-redux";

const SearchBar = (props) => {

    const renderInput = ({input, label, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} />
                <div>{renderError(meta)}</div>
            </div>
        )
    }

    const renderError = ({error, touched}) => {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    const onSubmit = ({searchField}) => {
        props.submitSearch(searchField)
    }

    return (
        <div className="ui segment">
            <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
                <Field name="searchField" component={renderInput} label="Image Search" />
            </form>
        </div>
    )
}

const validate = (formValues) => {
    let errors = {}

    if (!formValues.searchField) errors.searchField = "Please enter a search term"

    return errors
}

const formWrapped = reduxForm({
    form: "SearchBar",
    validate
})(SearchBar)

export default connect(null, {submitSearch})(formWrapped)