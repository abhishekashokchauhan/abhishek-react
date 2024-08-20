import { CDN_IMG_URL } from "../common/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={CDN_IMG_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
