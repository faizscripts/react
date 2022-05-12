import React, {useState} from "react";
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
            title: 'title 1',
            content: 'content1'
        },
        {
            title: 'title 2',
            content: 'content2'
        },
        {
            title: 'title 3',
            content: 'content3'
        },
        {
            title: 'title 4',
            content: 'content4'
        }
    ]

    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" selected={selected} setSelected={setSelected} options={options} />
            </Route>
            <Route path="translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App