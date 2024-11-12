import React from 'react'
import Contact from './Contact'
import { NavLink, Outlet } from 'react-router-dom'

const Help = () => {
  return (
    <div>
       <h3>Help section for customers</h3>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>

        <Outlet />
    </div>
  )
}

export default Help