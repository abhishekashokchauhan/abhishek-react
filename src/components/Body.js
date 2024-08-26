import { useState, useEffect, useContext } from "react";
import restaurantListData from "../common/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const getDataFromAPI = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999"
    );

    const json = await response.json();

    console.log("Setting the filteredResList", json);

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

  console.log("Showing the filteredResList", filteredResList);

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
        <div className="search m-4 p-4 flex items-center">
          <label htmlFor="name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredResList.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
