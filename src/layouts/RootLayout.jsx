import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
      <header>
        <h2>react router practice</h2>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/help">Help</NavLink>
      </header>
      <Outlet />
    </div>
  );
}

export default RootLayout