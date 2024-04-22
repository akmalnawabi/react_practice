import React, {useState} from 'react';
import Person from './Person/Person'

function App(props) {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "akmal", age: 22 },
      { name: "ahmad", age: 21 }
    ],
    another: "some value"
  });
  console.log(personState)

  const nameHandler = () => {
    setPersonState({
      persons: [
        { name: "mahmmod", age: 12 },
        { name: "ahmad", age: 21 },
      ],
    });
  };

  
  return (
    <>
    <Person name={personState.persons[0].name}/>
      <Person name={personState.persons[0].name}
      age={personState.persons[0].age}/>
      <Person >this is children</Person>
      <button onClick={nameHandler}>change</button>
    </>
  )
}

export default App
