import React from "react";
import SocialMedia from "../components/SocialMedia";
import NavigationDots from "../components/NavigationDots";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className={"app__wrapper app__flex"}>
          <Component />
          <div className="copyright">
            <p className={"p-text"}>@2023 Kelvin Bush</p>
            <p className={"p-text"}>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
export default AppWrap;
