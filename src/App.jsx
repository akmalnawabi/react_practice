import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import Assignment from "./four/Assignment";
import Validation from "./four/Validation";
// import Toggle from "./four/Toggle";

function App(props) {
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     { name: "akmal", age: 22 },
  //     { name: "ahamd", age: 21 }
  //   ],
  //   another: "some value",
  //   showPer: true

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

  // const [name, setName] = useState({
  //   persons: [
  //     { name: "ahmad", age: 22 },
  //     { name: "akmal", age: 12 },
  //   ],
  //   showPerson: false,
  // });

  // if (personState.showPer) {
  //   personState.persons = (
  //     <div>
  //       {personState.persons.map((person) => {
  //         return
  //          <Person />
  //       })}
  //     </div>
  //   )
  // }


  // const userNameChangeHandler = (e) => {
  //   setName({ name: e.target.value });
  // };

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
      <button onClick={() => userNameChangeHandler()}>change</button> */}
      {/* <button togglePerson={togglePerson}>change</button> */}

      {/* {
        showPerson === true ? 
        <div>
<Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        name2={personState.persons[1].name}
        age2={personState.persons[1].age}
        change={changeName}
      />
        </div> : null
      }  */}

      {/* // assignement  */}

      {/* <UserInput changed={userNameChangeHandler} 
      currentName={name.name} />
      <UserOutput userName={name.name} /> */}

      {/* fourth part  */}

      {/* <Toggle /> */}

      <Assignment />
    </>
  );
}

export default App;
