import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const cubeNum = (num) => {
        console.log('task done')
        return Math.pow(num, 3)
    }
    const res = useMemo(() => cubeNum(number), [number])
  return (
    <div>
        <input type="number" value={number} onChange={(e) => {setNumber(
            e.target.value
        )}} />
        <p>number {res}</p>

        <button onClick={(e) => {setCount(count + 1)}}>count++</button>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default UseMemo