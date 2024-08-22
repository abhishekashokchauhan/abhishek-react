import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../common/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();

    setResInfo(json.data);
    console.log("Abhishek is here");
    console.log(json.data.cards[2].card.card.info);
    console.log(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    );
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, city, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h4>{city}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
