import { useState, useEffect } from "react";
import { MENU_URL } from "../common/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

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

  return resInfo;
};

export default useRestaurantMenu;
