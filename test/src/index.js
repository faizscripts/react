import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: true}

  return (
      <div>
        <label htmlFor="name" className="label"> Enter name: </label>
        <input id="name" type="text"/>
        <button style= {{ backgroundColor:'blue', color:'white' }}> {buttonText.text}</button>
      </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))