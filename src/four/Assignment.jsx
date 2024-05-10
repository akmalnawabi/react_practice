import React, { useState } from 'react'
import Validation from './Validation';

const Assignment = () => {

    const [state, setState] = useState({
        userInput: ''
    })

    const inputHandler = (event) => {
        setState({userInput: event.target.value});
    }

  return (
    <div>
      <input type="text" onChange={inputHandler} value={state.userInput} />
      <p>{state.userInput}</p>
      <Validation inputLength={state.userInput.length} />
    </div>
  );
}

export default Assignment