import { CDN_IMG_URL } from "../common/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-50 rounded-lg hover:bg-slate-200 transition-all ">
      <img
        className="w-[250px] rounded-lg"
        src={CDN_IMG_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ❤️</h4>
      <h4>{costForTwo}</h4>
      <h4>🛵 {deliveryTime} Minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
