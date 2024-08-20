import { APP_LOGO } from "../common/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
