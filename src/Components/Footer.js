import React, { useState } from "react";
import "./Footer.css";
import { FaTimes } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const [showReportForm, setShowReportForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleReportProduct = (event) => {
    event.preventDefault();
    setShowReportForm(true);
    setShowSuccessMessage(false);
  };

  const handleReportSubmit = (event) => {
    event.preventDefault();
    // Submit the report form data to the server
    // ...
    setShowSuccessMessage(true); // show the success message
  };

  function handleCloseReportForm() {
    setShowReportForm(false);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleVisaClick = () => {
    window.location.href = 'https://www.visa.com/';
  }

  const handleMastercardClick = () => {
    window.location.href = 'https://www.mastercard.us/';
  }

  const handleSubscribe = () => {
    // Send a POST request to a server with the email and gender values
    fetch("https://fakestoreapi.com/products/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, gender }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubscriptionStatus("Subscribed successfully");
        } else {
          setSubscriptionStatus("Failed to subscribe");
        }
      })
      .catch((error) => {
        console.log("Error subscribing:", error);
        setSubscriptionStatus("Failed to subscribe");
      });
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
          <button type="button" onClick={handleSubscribe}>Subscribe</button>
          {subscriptionStatus && <p>{subscriptionStatus}</p>}
        </div>
      </div>
      <div className="app-buttons">
        <h3>Download Buy-buddy free App</h3>
        <div>
        <button>
        <a href="https://www.apple.com/ios/app-store/" className="app-store-btn">App Store</a>
       </button>
     <button>
     <a href="https://play.google.com/store/apps" className="play-store-btn">Play Store</a>
    </button>
       </div>
      </div>
      <div className="social-media">
         <h3>Follow us on social media</h3>
      <div>
         <a href="https://www.facebook.com/buybuddy">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
         <a href="https://twitter.com/buybuddy">
         <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/buybuddy/">
         <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    <div className="payment-methods">
        <h3>Payment Methods</h3>
        <div>
          <img
            src="https://via.placeholder.com/100x50.png?text=Visa"
            alt="Visa"
            onClick={handleVisaClick}
          />
          <img
            src="https://via.placeholder.com/100x50.png?text=Mastercard"
            alt="Mastercard"
            onClick={handleMastercardClick}
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
            <a href="/" onClick={handleReportProduct}>
              Report a Product
            </a>
          </p>
          {showReportForm && (
            <form className="report-form" onSubmit={handleReportSubmit}>
              <button className="close-btn" onClick={handleCloseReportForm}>
                <FaTimes />
              </button>
              <label>
                Product Name:
                <input type="text" name="productName" />
              </label>
              <label>
                Issue:
                <textarea name="issue" />
              </label>
              <button type="submit">Submit</button>
              {showSuccessMessage && <p>Thank you for submitting your issue!</p>}
            </form>
          )}
        </div>
      </div>
</footer>
  );
}

export default Footer;
