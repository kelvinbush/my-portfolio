import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className={"app__navigation"}>
      {["home", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={"app__navigation-dot"}
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          >
            <span style={{ display: "none" }}>Hello</span>
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
