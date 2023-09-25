import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
function Nav({ className }) {
  let { user,logoutUser } = useContext(AuthContext);
  return (
    <nav className={className}>
      <div>
        <img src={Logo} alt="Logo"></img>
      </div>
      <div>
        <ul>
          <li data-testid="Nav-Home">
            <Link to="/">Home</Link>
          </li>
          <li data-testid="Nav-About">
            <Link to="/about">About</Link>
          </li>
          <li data-testid="Nav-Menu">
            <Link to="/menu">Menu</Link>
          </li>
          <li data-testid="Nav-ReserveTable">
            <Link to="/reserve-table">Reservations</Link>
          </li>
          <li data-testid="Nav-OrderOnline">
            <Link to="/order-online">OrderOnline</Link>
          </li>
          {user ? (
            <li data-testid="Nav-Logout" onClick={logoutUser}>
            <Link to="#">Logout</Link>
          </li>
            
          ) : (
            <li data-testid="Nav-Login">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      {user && <p>Hello, {user.username}</p>}
    </nav>
  );
}

export default Nav;
