import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../stores/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const params = useParams();

  const { resId } = params;
  console.log("Id: ", resId);

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant Id: {resId}</h1>
        <h2>Restaurant Name: {restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => {
              return (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} -{" "}
                  <button
                    className="p-2 bg-green-50"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
