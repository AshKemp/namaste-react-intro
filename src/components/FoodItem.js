import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className="w-52 shadow-lg p-2 m-2 bg-pink-50">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>Rs. {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
