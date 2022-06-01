import React, {useState} from "react";
import axios from "axios";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const App = () => {

    const options = [
        {
            label: 'Red',
            value: 'red'
        },
        {
            label: 'Green',
            value: 'green'
        },
        {
            label: 'Blue',
            value: 'blue'
        }
    ]

    const [selected, setSelected] = useState(options[0])

    const items = [
        {
            title: "Title 1",
            content: "Content 1"
        },
        {
            title: "Title 2",
            content: "Content 2"
        },
        {
            title: "Title 3",
            content: "Content 3"
        },
        {
            title: "Title 4",
            content: "Content 4"
        }
    ]

    return(
        <div className="ui container" >
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list" >
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} label="Select a color" selected={selected} setSelected={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App