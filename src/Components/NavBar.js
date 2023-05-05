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
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
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
          <button type="submit">Log In</button>
        </form>
      )}
      {/* render logged in message if user is logged in */}
      {loggedIn && <button>Logged In!</button>}
    </nav>
  );
}

export default Navbar;
