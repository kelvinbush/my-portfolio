import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <div className={"app__social"}>
      <a href={'https://github.com/kelvinbush'} target={'_blank'}>
        <VscGithub />
      </a>
      <a href={'https://www.linkedin.com/in/kelvinbushWachiye'} target={'_blank'}>
        <ImLinkedin />
      </a>
      <a href={"#"}>
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
