import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <div className={"app__social"}>
      <div>
        <VscGithub />
      </div>
      <div>
        <ImLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
