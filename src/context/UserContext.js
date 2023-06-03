import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy User",
    email: "dummyuser@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
