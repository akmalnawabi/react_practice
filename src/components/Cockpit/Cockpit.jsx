import React, { useEffect } from 'react'

const Cockpit = () => {
  useEffect(() =>{
    console.log("new hook")
    setTimeout(() => {
      alert("data has been saved")
    }, 1000)
    return () => {
      console.log("cleaning up the hook")
    }
  },[])
  return (
    <div>
      <p>welcome to new lesson</p>
    </div>
  );
}

export default Cockpit