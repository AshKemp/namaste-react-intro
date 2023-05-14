import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {!isVisible ? (
        <>
          <button
            onClick={() => setIsVisible(true)}
            className="cursor-pointer underline"
          >
            Show
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl m-2 p-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of instamart"}
        isVisible={isVisibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of instamart. The team has 50 members."
        }
        isVisible={isVisibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title={"Careers"}
        description={"This is the careers section of instamart."}
        isVisible={isVisibleSection === "careers"}
        setIsVisible={() => setIsVisibleSection("careers")}
      />
    </div>
  );
};

export default Instamart;
