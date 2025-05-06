import React, { useState } from 'react'

const UseStatePrc = () => {

    const [car, setCar] = useState({
        brand: 'benz',
        color: 'black',
        price: 9000
    })
    const handleChange = () => {
        setCar((prev) => {
            return {...prev, color: 'white', price: 10000}
        })
    }
  return (
    <div>
        <h1>my {car.brand} car</h1>
        <p>with {car.color} color and {car.price} price</p>
        <button onClick={handleChange}>change</button>
    </div>
  )
}

export default UseStatePrc