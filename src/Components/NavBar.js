import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false); // initialize state to false

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // handle login action here with username and password
    setLoggedIn(true); // update state to true when user logs in
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      {/* render login form only if user is not logged in */}
      {!loggedIn && (
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      )}
      {/* render logged in message if user is logged in */}
      {loggedIn && <button>Logged In!</button>}
    </nav>
  );
}

export default Navbar;
