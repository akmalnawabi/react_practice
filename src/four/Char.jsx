import React from 'react'
import Assignment from './Assignment'

const Char = (props) => {
    const {charectar, clicked} = props
    const style = {
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid black",
        textAlign: "center",
        backgroundColor: 'dodgerblue'
    }
  return (
    <div style={style} onClick={clicked}>{charectar}</div>
  )
}

export default Char