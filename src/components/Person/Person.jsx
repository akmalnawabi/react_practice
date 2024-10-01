import React, {useState} from 'react'

const Person = (props) => {

  const [name, setName] = useState({
    persons: [
      { name: "ahmad", age: 22 },
      { name: "akmal", age: 12 },
    ],
    showPerson: false,
  });
  
    return (
      <div className="person">
        {/* <button onClick={nameHandler}>change</button> */}
        <p onClick={props.click}>
          {props.name} wit age {props.age}
          {props.name2} wit age {props.age2}
        </p>
        <input type="text" onChange={props.change} />
      </div>
    );
}

export default Person