import React from "react";

import HomeIcon from "../../assets/icons/Home.png";
import BarIcon from "../../assets/icons/BarIcon.png";
import BarIcon_1 from "../../assets/icons/BarIcon_1.png";

import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_items">
        <img className="Footer_icon" src={HomeIcon} />
        <img className="Footer_icon" src={BarIcon} />
        <img className="Footer_icon" src={BarIcon_1} />
      </div>
    </div>
  );
};

export default Footer;
