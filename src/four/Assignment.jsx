import React, { useState } from 'react'
import Validation from './Validation';
import Char from './Char';

const Assignment = () => {

    const [state, setState] = useState({
        userInput: ''
    })

    const inputHandler = (event) => {
        setState({userInput: event.target.value});
    }

    const deleteHandler = (index) => {
      const text = state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('')
      setState({userInput: updatedText})
    }

  const charList = state.userInput.split('').map((ch, index) => {
    return <Char charectar={ch} key={index} 
    clicked={() => deleteHandler(index)}/>;
  });    
  return (
    <div>
      
      <input type="text" onChange={inputHandler} value={state.userInput} />
      <p>{state.userInput}</p>
      <Validation inputLength={state.userInput.length} />

      <h2>{charList}</h2>
    </div>
  );
}

export default Assignment