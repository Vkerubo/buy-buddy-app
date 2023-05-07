import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
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
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupEmail === "" || signupPassword === "") {
      alert("Please fill out all fields");
      return;
    }
    setLoggedIn(true);
  };
  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  };
  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };
  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/products">EXPLORE OUR PRODUCTS</Link>
      <Link
        to="/cart"
        style={{
          display: "flex",
          alignItems: "center",
          transition: "all 0.3s",
        }}
      >
        <img
          src="https://img.icons8.com/?size=512&id=rPCAH753HAqD&format=png"
          alt="Shopping Cart Icon"
          style={{ width: "35px", height: "35px", marginRight: "8px" }}
        />
      </Link>
      {!loggedIn && (
        <div className="login-form">
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
          <div className="signup-form">
            <form onSubmit={handleSignup}>
              <input
                type="text"
                name="signup-email"
                placeholder="Email"
                value={signupEmail}
                onChange={handleSignupEmailChange}
              />
              <input
                type="password"
                name="signup-password"
                placeholder="Password"
                value={signupPassword}
                onChange={handleSignupPasswordChange}
              />
              <div className="signup-buttons">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      )}
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
