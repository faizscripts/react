import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component{

    render() {

        const text = this.context === "english" ? "Submit" : "Voorlegen"

        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => value === "english" ? "Submit" : "Voorlegen" }
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button