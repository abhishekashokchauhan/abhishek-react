import { APP_LOGO } from "../common/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

/**
 * Adding the Login button
 * When Login is clicked, it shall change to Logout
 * When Logout is clicked, it shall change to Login
 */

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header-frame">
      <div className="logo-space">
        <img className="logo-image" src={APP_LOGO} />
      </div>
      <div className="navigation-bar">
        <ul>
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
