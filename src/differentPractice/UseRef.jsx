import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef()

    const focusInput = () => {
        inputRef.current.focus()
    }
  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>focus input</button>
    </div>
  )
}

export default UseRef