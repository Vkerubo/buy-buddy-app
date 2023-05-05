import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubscribe = () => {
    // Do something with the email and gender values
    console.log(`Subscribing ${email} (${gender}) to the newsletter...`);
  };

  return (
    <footer>
      <div className="subscribe">
        <h3>Subscribe to our newsletter to get our latest offers!</h3>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
      <div className="app-buttons">
        <h3>Download Buy-buddy app from AppStore and Google Play</h3>
        <div>
          <button>
            <img
              src="https://via.placeholder.com/200x50.png?text=AppStore"
              alt="Download on the App Store"
            />
          </button>
          <button>
            <img
              src="https://via.placeholder.com/200x50.png?text=Google+Play"
              alt="Get it on Google Play"
            />
          </button>
        </div>
      </div>
      <div className="social-media">
        <h3>Showcasing our social media handles</h3>
        <div>
          <a href="https://www.facebook.com/buybuddy">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/buybuddy">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/buybuddy/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="payment-methods">
        <h3>Showing the payment methods we use like Visa and Mastercard</h3>
        <div>
          <img
            src="https://via.placeholder.com/100x50.png?text=Visa"
            alt="Visa"
          />
          <img
            src="https://via.placeholder.com/100x50.png?text=Mastercard"
            alt="Mastercard"
          />
        </div>
      </div>
      <div className="about-us">
        <h3>About us and our branches</h3>
        <div>
          <p>
            Buy-buddy is a leading online retailer with branches in several
            countries. Our mission is to provide our customers with the best
            products at affordable prices, while delivering exceptional customer
            service.
          </p>
          <p>
            Visit one of our branches today to see our products in person and
            speak with our knowledgeable staff.
          </p>
          <ul>
            <li>USA: 123 Main St, New York, NY 10001</li>
            <li>Canada: 456 Yonge St, Toronto, ON M4Y 1W9</li>
            <li>UK: 789 Oxford St, London W1D 2HG</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
