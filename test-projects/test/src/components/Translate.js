import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {

    const options = [
        {
            label:'Afrikaans',
            value:'af'
        },
        {
            label:'Arabic',
            value:'ar'
        },
        {
            label:'Spanish',
            value:'es'
        }
    ]

    const [language, setLanguage] = useState(options[0])

    const [text, setText] = useState("")

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="input">Enter Text</label>
                    <input value={text} onChange={(event) => setText(event.target.value)} type="text" />
                </div>
            </div>
            <Dropdown label="Select a language" options={options} selected={language} setSelected={setLanguage} />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate