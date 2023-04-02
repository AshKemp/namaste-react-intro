import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from "./user_icon.png";
import "./assignment.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="center">
          <input
            type={"text"}
            placeholder={"Search some text"}
            className="input"
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt={"User Icon"} />
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
