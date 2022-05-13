import React, {useState} from "react";

const Dropdown = ({options, selected, setSelected, label}) => {

    const [open, setOpen] = useState(false)

    const renderedOptions = options.map(
        option => {
            if (option.value === selected.value) return ''


            return (
                <div key={option.value} className="item" onClick={() => setSelected(option)}>
                    {option.label}
                </div>
            )
        }
    )

    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="dropdown" className="label">
                    {label}
                </label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open? 'visible transition': ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown