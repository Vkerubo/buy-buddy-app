import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false); // initialize state to false
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Login required");
      return;
    }
    setLoggedIn(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/products">FIND PRODUCTS</Link>
      <Link to="/cart">CART</Link>
      {/* render login form only if user is not logged in */}
      {!loggedIn && (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="login-buttons">
            <button type="submit">Log In</button>
          </div>
        </form>
      )}
      {/* render logged in message if user is logged in */}
      {loggedIn && <button>Logged In!</button>}
      {loggedIn && (
        <div className="logout-buttons">
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
