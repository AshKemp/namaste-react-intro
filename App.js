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

const Title = () => (
  <h1 id="title" key={"h1"}>
    Namaste React from Ashwin for parcel
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
