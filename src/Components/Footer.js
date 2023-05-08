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
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC"
      alt="Facebook"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxAttt7XPuEMP-TgDlXsd4pkMrdl8YVi6_VrHGWv56Z3QlrnU_GotWAHnUe0DucjrJ0Q&usqp=CAU"
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
