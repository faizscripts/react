import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createStream} from "../../actions";

class StreamForm extends React.Component {

    renderInput = ({input, label, meta}) => {
        const {touched, error} = meta

        const renderError = () => {
            if (touched && error) return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
                {renderError()}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) errors.title = `Title can't be blank!`

    if (!formValues.description) errors.description = `Description can't be blank`

    return errors
}

const formWrapped = reduxForm({
    form: "StreamForm",
    validate
})(StreamForm)

export default connect(null, {createStream})(formWrapped)