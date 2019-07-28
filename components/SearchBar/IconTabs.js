import React from "react";
import compass from "./compass.svg";
import heart from "./heart-reg.svg";
import user from "./red-user.svg";
import PropTypes from "prop-types";

const IconTabs = props => {
  return (
    <div className="icon-container">
      <div className="logo location">
        <img src={compass} alt="" />
      </div>
      <div className="logo likes">
        <img src={heart} alt="" />
      </div>
      <div className="logo profile" onClick={props.modalClick}>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

IconTabs.propTypes = {
  isModalClicked: PropTypes.bool,
  modalClick: PropTypes.func
};

export default IconTabs;
