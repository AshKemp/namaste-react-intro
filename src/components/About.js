import { Outlet } from "react-router-dom";
import ProfileFC from "./Profile";
import Profile from "./ProfileClass";
import React from "react";
import UserContext from "../stores/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the path
        </p>
        {/* <Profile name={"First Child"} xyz={"abc"} /> */}
        {/* <ProfileFC name={"First Child"} xyz={"abc"} /> */}
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 * Parent Constructor
 * Parent render
 *    First Child Constructor
 *    First Child render
 *    Second Child Constructor
 *    Second Child render
 *    First Child componentDidMount
 *    Second Child componentDidMount
 * Parent componentDidMount
 */
