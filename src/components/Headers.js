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
    <div className="flex justify-between">
      <div className="logo-space">
        <img className="w-[150px] mx-4" src={APP_LOGO} />
      </div>
      <div className="flex">
        <ul className="flex items-center mx-8">
          <li className="p-3">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li className="p-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3">Cart</li>
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
