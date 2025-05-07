import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState = {count: 0}

        const reducer = (state, action) => {
            switch (action.type) {
              case "increase": {
                return { count: state.count + 1 };
              }
              case "decrease": {
                return { count: state.count - 1 };
              }
              case "input": {
                return { count: action.payload };
              }
              default: {
                return state;
              }
            }
        }

    const [state, dipatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={(e) => dipatch({type: 'increase'})}>increase</button>
      <button onClick={(e) => dipatch({type: 'decrease'})}>decrease</button>

        <br />
      <input type="number" value={state.count} onChange={(e) => dipatch({type: 'input', payload: Number(e.target.value)})} />
    </div>
  );
}

export default UseReducer