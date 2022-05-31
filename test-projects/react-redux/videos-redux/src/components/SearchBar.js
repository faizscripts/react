import React from "react";
import {Field, reduxForm} from "redux-form";

const SearchBar = ({handleSubmit}) => {

    const renderInput = ({input, label}) => {
        return(
            <div className="field">
                <label> {label} </label>
                <div className="ui icon input">
                    <input {...input} />
                </div>
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log(formValues);
    }

    return(
        <div className="search-bar ui segment">
            <form onSubmit={handleSubmit(onSubmit)} className="ui form">
                <Field name="searchInput" component={renderInput} label="Search Video" />
            </form>
        </div>
    )
}

export default reduxForm({
    form: "searchForm"
})(SearchBar)