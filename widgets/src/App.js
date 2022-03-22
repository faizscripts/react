import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
  return(
      <div>
          <Search />
      </div>
  )
}

export default App