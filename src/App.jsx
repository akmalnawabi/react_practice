import React, {useState} from 'react';
import Person from './Person/Person'
import './App.css'
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

function App(props) {
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     { name: "akmal", age: 22 },
  //     { name: "ahamd", age: 21 }
  //   ],
  //   another: "some value"
  // });

  // const nameHandler = (e) => {
  //   setPersonState({
  //     persons: [
  //       { name: "mahmmod", age: 12 },
  //       { name: "ahmad", age: 21 },
  //     ],
  //   });
  // };

  // const changeName = (e) => {
  //   setPersonState({
  //     persons: [
  //       {name: e.target.value, age: 11},
  //       {name: e.target.value, age: 90}
  //     ]
  //   })
  // }


  const [name, setName] = useState({
     name: "ahmad" ,
  });

  const userNameChangeHandler = (e) => {
    setName({name: e.target.value})
  }

  
  return (
    <>
      {/* 3rd folder  */}

      {/* <Person name={personState.persons[0].name} />
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={nameHandler}
      />
      <Person>this is children</Person>
      <button onClick={() => nameHandler()}>change</button>

      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        name2={personState.persons[1].name}
        age2={personState.persons[1].age}
        change={changeName}
      /> */}

      {/* // assignement  */}


      <UserInput changed={userNameChangeHandler} 
      currentName={name.name} />
      <UserOutput userName={name.name} />
    </>
  );
}

export default App
