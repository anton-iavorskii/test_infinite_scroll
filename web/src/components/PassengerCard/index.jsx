import React from "react";

import "./index.css";

const PassengerCard = ({ passengers }) => {
  return (
    <div className="Container">
      {passengers?.map((item, index) => {
        return (
          <div className="PassangerCard" key={item._id}>
            <img
              className="PassangerCard__logoAirline"
              src={item.airline[0].logo}
              alt="logo airline"
            />
            <span className="PassangerCard__name">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PassengerCard;
