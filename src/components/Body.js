import { useState } from "react";
import restaurantListData from "../common/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState(restaurantListData);

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
