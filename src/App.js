import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import store from "./stores/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";

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

/**
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 */

const Instamart = lazy(() => import("./components/Instamart"));

// Upon On Demand Loading -> upon render -> suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ashwin Km",
    email: "test@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
