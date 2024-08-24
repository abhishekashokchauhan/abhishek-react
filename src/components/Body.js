import { useState, useEffect } from "react";
import restaurantListData from "../common/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
 *
 * If there is no dependecy array, every render.
 * If there is a dependency array, then for the initial render.
 * If there is a dependency, then when the dependency changes,
 * we need to change this.
 */

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getDataFromAPI = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  if (filteredResList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body mx-4">
      <div className="my-2 border-2 border-gray-400 rounded-lg">
        <div className="serach-bar m-3">
          <input
            name="myInput"
            value={searchInput}
            className="px-3 py-2 border-2 border-gray-300 rounded-lg"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="ml-4 px-3 py-2 rounded-lg bg-green-100 hover:bg-green-400"
            onClick={() => {
              const filteredItems = resList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              setFilteredResList(filteredItems);
            }}
          >
            Search
          </button>

          <button
            className="ml-4 px-3 py-2 rounded-lg bg-yellow-100 hover:bg-yellow-400"
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
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredResList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
