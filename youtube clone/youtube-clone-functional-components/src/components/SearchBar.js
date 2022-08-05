import React, {useState} from "react";

const SearchBar = ({termSubmit}) => {
    const [term, setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()

        termSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="icon-input">
                        Search Video
                    </label>
                    <div className="ui icon input">
                        <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
                    </div>
                </div>
            </form>
        </div>
    )

}

export default SearchBar;