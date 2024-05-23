import React from 'react'

const Validation = (props) => {
  const {inputLength} = props
  return (
    <div>
      {inputLength > 5 ? "too long" : "too short"}
      <p>{inputLength}</p>
    </div>
  )
}

export default Validation