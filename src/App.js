import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers";
import Body from "./components/Body";

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
