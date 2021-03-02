import React from "react";
import Launchyear from "./launchyear";
import Successland from "./successland";
import Successlaunch from "./successlaunch";

function Team() {
  return (
    <div className="team">
      <h5> Filters </h5>
      <Launchyear />
      <Successlaunch />
      <Successland />
    </div>
  );
}

export default Team;
