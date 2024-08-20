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

export default Header;
