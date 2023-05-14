import { useContext, useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import UserContext from "../stores/UserContext";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZbPUWQIQ8CEwuTrWpEIo8kgEPj_HO0FunPO4O3_lrWConeJw1cXBE9LdLMuZ1-s6s2A&usqp=CAU"
      src={Logo}
      alt="Logo"
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-300 md:bg-yellow-300">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            {" "}
            <Link to={"/"}>Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
      <span className="font-bold p-10 text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
