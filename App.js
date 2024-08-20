import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Making the layout for my app
 *
 * Header
 *  Logo
 *  Navigation Menu
 * Body
 *  Search bar
 *  Restaurant Container
 *    Restaurant Card
 * Footer
 */

const Header = () => {
  return (
    <div className="header-frame">
      <div className="logo-space">
        <img
          className="logo-image"
          src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493630.jpg?t=st=1724173588~exp=1724177188~hmac=11adf48eee8a35594e471b31a990a5409c3960e8e191bf65d60f249605de53f5&w=1060"
        />
      </div>
      <div className="navigation-bar">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src="https://images.pexels.com/photos/6363501/pexels-photo-6363501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <h4>Abhishek's Restaurant</h4>
      <h4>4.4 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="serach-bar">
        <input name="myInput" />
      </div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="application">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
