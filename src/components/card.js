import React from "react";

const Card = ({ data }) => {
  const {
    mission_name,
    flight_number,
    mission_id = [],
    land_success = " - ",
    launch_success = " - ",
    links,
  } = data;
  const { mission_patch_small } = links;
  return (
    <div className="card w-10 m-1">
      <img className="card-img-top" src={mission_patch_small} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">
          {mission_name} # {flight_number}
        </h5>
        <p className="card-text">
          <span className="font-weight-bold">Mission Id</span>
          {mission_id.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">launch_success</span>{launch_success}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">land_success</span>{land_success}
        </p>
      </div>
    </div>
  );
};

export default Card;
