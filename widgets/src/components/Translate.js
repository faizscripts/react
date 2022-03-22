import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[3])
    const [text, setText] = useState('good morning')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="input">Enter Text</label>
                    <input type="text" value={text} onChange={event => setText(event.target.value)} />
                </div>
            </div>
            <Dropdown
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
                label="Select a language"
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate