import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useeffect");
    return () => {
      clearInterval(timer);
      console.log("useeffect return");
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h2>Profile Component</h2>
      <h2>Name: {props.name}</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default Profile;
