import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste React from Ashwin for parcel"
);
const heading2 = React.createElement("h2", { id: "title2" }, "Namaste Again");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
