import React, {useState} from 'react'

const Person = (props) => {
    return (
      <div>
        {/* <button onClick={nameHandler}>change</button> */}
        <p>
          {props.name} {props.age}
        </p>
      </div>
    );
}

export default Person