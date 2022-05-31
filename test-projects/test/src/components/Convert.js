import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({text, language}) => {

    const [translated, setTranslated] = useState("")

    useEffect(() => {
        doTranslation()
    }, [language, text])

    const doTranslation = async () => {
        const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })

        console.log("translating")

        setTranslated(response.data.data.translations[0].translatedText)
    }

    return(
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    )
}

export default Convert