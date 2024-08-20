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

const restaurantData = {
  info: {
    id: "636894",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Ellis Bridge",
    areaName: "CG Road",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.3,
    parentId: "61955",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-08-21 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹149",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "2.8",
        ratingCount: "20+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/chinese-wok-ellis-bridge-cg-road-ahmedabad-636894",
    type: "WEBLINK",
  },
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h4>{resData.info.name}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
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
        <RestaurantCard resData={restaurantData} />
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
