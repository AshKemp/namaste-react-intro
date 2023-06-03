import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurantData } from "../utils/helper";
import useOnline from "../hooks/useOnline";
import UserContext from "../context/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.030335468886307&lng=80.26849642395973&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check your internet connection.</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type={"text"}
          placeholder={"Search"}
          className="focus:bg-green-200 m-2 p-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn p-2 m-2 bg-green-900 text-white rounded-md hover:bg-red-900"
          onClick={() => {
            const filteredRestaurantData = filterRestaurantData(
              searchText,
              allRestaurants
            );
            setFilteredRestaurants(filteredRestaurantData);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 && (
          <h1>No restaurants match for your filter!</h1>
        )}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
