import { useState, useEffect } from "react";
import restaurantListData from "../common/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

/**
 * 2 types of the rendering.
 *
 * 1) Page Load -> API Call -> Render
 * 2) Page Load -> Render -> API Call -> Re-render
 *
 * React would always use the second approach.
 * We would do the useEffect , to execte the function when
 * the element renders.
 *
 * We would call the Swiggy's API and show the data
 * We would use async and await.
 *
 * Shimmer UI, Conditional rendering, Loading
 * Make the custom shimmer and don't use external.
 *
 * State variable, Rating example, Maintain state
 * We would do and Login and Logout button too.
 * When the state variable changes, then re-render the element.
 */

const Body = () => {
  const [resList, setResList] = useState([]);
  console.log(resList);

  const getDataFromAPI = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  if (resList.length === 0) {
    console.log("Returning shimmer");
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="serach-bar">
        <input name="myInput" />
        <button
          onClick={() => {
            const updated = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setResList(updated);
          }}
        >
          {" "}
          Above 4 ratings
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
