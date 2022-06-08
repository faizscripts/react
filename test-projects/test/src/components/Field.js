import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component{

    render() {

        const text = this.context === "english" ? "Name" : "Naam"

        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => value === "english" ? "Name" : "Naam"}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field