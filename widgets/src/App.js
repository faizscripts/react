import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: 'Question 1',
        content: 'Answer 1'
    },
    {
        title: 'Question 2',
        content: 'Answer 2'
    },
    {
        title: 'Question 3',
        content: 'Answer 3'
    }
]

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

const App = () => {

    const [selected, setSelected] = useState(options[0])

  return(
      <div>
          <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
          />
      </div>
  )
}

export default App