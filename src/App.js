import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

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

/**
 * Header
 *  - Logo
 *  - Nav Items (Right Side)
 *  - Cart
 *
 * Body
 *  - Search Bar
 *  - Restaurant List
 *      - Restaurant Card
 *        - Image
 *        - Name
 *        - Rating
 *        - Cuisines
 *
 * Footer
 *  - Links
 *  - Copyright
 *
 */

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
