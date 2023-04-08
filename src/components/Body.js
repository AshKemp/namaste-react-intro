import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const filterRestaurantData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type={"text"}
          placeholder={"Search"}
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurantData = filterRestaurantData(
              searchText,
              restaurants
            );
            setRestaurants(filteredRestaurantData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
