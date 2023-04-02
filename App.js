import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Creater server
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port number
 * Consistent hashing algorithm
 * Zero config
 * Tree Shaking - Removing unwanted code
 *
 * Transitive dependencies
 */

const title = (
  <h1 id="title" key={"h2"}>
    Food Villa
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {title}
      <h2>Namaste React Functional Component </h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
