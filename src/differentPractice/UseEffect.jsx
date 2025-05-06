import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {
    const [value, setValue] = useState(0)

    // const count = useRef(0)

    // useEffect(() => {
    //     count.current += 1
    // })

    const inputRef = useRef()

    const btnClicked = () => {
        inputRef.current.style.background = "green"
    }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={btnClicked}>click</button>
    </div>
  );
}

export default UseEffect