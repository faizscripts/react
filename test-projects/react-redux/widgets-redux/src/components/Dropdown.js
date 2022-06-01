import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {selectOption, setOpen} from "../actions";

const Dropdown = ({options, selectedOption, selectOption, open, setOpen, label}) => {

    const dropdownTag = useRef()

    useEffect(() => {
        document.body.addEventListener("click", event => {

            if (!dropdownTag.current.contains(event.target)){
                setOpen(false)
            }
        })
    }, [])

    const renderedOptions = options.map(
        (option, index) => {
            if (selectedOption !== index){
                return(
                    <div onClick={() => selectOption(index)} key={option.value} className="item">
                        {option.label}
                    </div>
                )
            }
        }
    )

    return(
        <div className="ui form">
            <div className="field">
                <label htmlFor="dropdown" className="label" >
                    {label}
                </label>
                <div ref={dropdownTag} onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? "visible active" : ""}`}>
                    <i className="dropdown icon"/>
                    <div className="text">{options[selectedOption].label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        options: state.options,
        selectedOption: state.selectedOption,
        open: state.open
    }
}

export default connect(mapStateToProps, {selectOption, setOpen})(Dropdown)