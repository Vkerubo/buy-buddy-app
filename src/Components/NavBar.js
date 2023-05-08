import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          transition: "all 0.3s",
        }}
      >
        <img
          src="https://img.icons8.com/?size=512&id=86527&format=png"
          alt="Home icon"
          style={{ width: "35px", height: "35px", marginRight: "8px" }}
        />
      </Link>
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
          <button onClick={handleLoginClick}>Log In</button>
          <button onClick={handleSignupClick}>Sign Up</button>
          {showLogin && (
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
          {showSignup && (
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
          )}
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
