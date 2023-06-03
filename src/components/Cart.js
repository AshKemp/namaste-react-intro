import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../stores/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="font-bold text-lg">
      <h1>Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>
      <div className="flex">
        {cartItems.map((cardItem) => (
          <FoodItem {...cardItem.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
