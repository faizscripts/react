import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({label, options, selected, setSelected}) => {

    const [open, setOpen] = useState(false)

    const ref = useRef()

    useEffect(() => {
        document.body.addEventListener("click", event => {
            if (ref.current.contains(event.target)) {
                return null
            }
            setOpen(false);
        })
    }, [])

    const renderedOptions = options.map(
        option => {
            if (selected.label !== option.label){
                return (
                    <div onClick={() => setSelected(option)} key={option.value} className="item">
                        {option.label}
                    </div>
                )
            }
        }
    )

    const openDropdown = open ? "visible active" : ""

    const openList = open ? "visible transition" : ""

    return(
        <div className="ui form">
            <div className="field">
                <label htmlFor="dropdown" className="label" >
                    {label}
                </label>
                <div ref={ref} onClick={() => setOpen(!open)} className={`ui selection dropdown ${openDropdown}`}>
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${openList}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown