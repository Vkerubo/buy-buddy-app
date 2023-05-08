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
          console.log("Subscribed successfully");
        } else {
          console.log("Failed to subscribe");
        }
      })
      .catch((error) => {
        console.log("Error subscribing:", error);
      });
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
    <img
      src="data:image/jpeg;base64,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"
      alt="Facebook"
    />
    <img
      src="data:image/png;base64,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"
      alt="Twitter"
    />
    <img
      src="data:image/jpeg;base64,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"
      alt="Instagram"
    />
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
