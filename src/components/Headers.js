import { APP_LOGO } from "../common/constant";
import { useState } from "react";

/**
 * Adding the Login button
 * When Login is clicked, it shall change to Logout
 * When Logout is clicked, it shall change to Login
 */

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header-frame">
      <div className="logo-space">
        <img className="logo-image" src={APP_LOGO} />
      </div>
      <div className="navigation-bar">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="my-btn"
              onClick={() => {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }}
            >
              {" "}
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
