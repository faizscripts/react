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
            label:'Hindi',
            value:'hi'
        }
    ]

    const [language, setLanguage] = useState(options[0])

    const [text, setText] = useState('')

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="input">Enter Text</label>
                    <input type="text" value={text} onChange={event => setText(event.target.value)} />
                </div>
            </div>
            <Dropdown options={options} selected={language} setSelected={setLanguage}  label={'Select a language'}/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )

}

export default Translate