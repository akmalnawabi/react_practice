import React from 'react'

const Validation = (props) => {
  const {inputLength} = props
  return (
    <div>
        <p>{inputLength}</p>
    </div>
  )
}

export default Validation