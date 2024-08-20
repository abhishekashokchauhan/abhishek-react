import restaurantListData from "../common/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="serach-bar">
        <input name="myInput" />
      </div>
      <div className="restaurant-container">
        {restaurantListData.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
