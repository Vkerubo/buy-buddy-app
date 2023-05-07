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

  const handleSubscribe = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          gender
        })
      });
      if (response.ok) {
        console.log('Successfully subscribed!');
      } else {
        console.error('Failed to subscribe:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to subscribe:', error);
    }
  };
  
  const handleReportProduct = () => {
    // Do something when "Report a Product" link is clicked
    console.log("Reporting a product...");
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
        <h3>Download Buy-buddy free App</h3>
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
        <h3>Follow us on social media</h3>
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
        <h3>Payment Methods</h3>
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
        <h3>About us</h3>
        <div>
          <p>
            Buy-buddy is a leading online retailer with branches in several
            countries. Our mission is to provide our customers with the best
            products at affordable prices, while delivering exceptional customer
            service.
          </p>
          <p>
            <em>Reach out for any assistance: </em> <b>020 345 123</b>
          </p>
          <p>
            <b>Headquarters:</b> Drive Inn lane, Westlands, Nairobi
          </p>
          <p>
            <a href="#" onClick={handleReportProduct}>
              Report a Product
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
