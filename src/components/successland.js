import React, { Fragment } from "react";
import { connect } from "react-redux";

const Successland = ({ dispatch }) => {
  const setSuccessLand = (e) => {
    console.log("e.target", e.target.value);
    dispatch({ type: "SET_SUCCESS_LAND", payload: e.target.value });
  };
  return (
    <Fragment>
      <p className="launch_year">
        <h6>Success Land</h6>
      </p>
      <div
        className=" btn-group-toggle m-2 d-flex justify-content-between"
        data-toggle="buttons"
      >
        <label className="btn btn-primary">
          <input
            type="radio"
            name="options"
            autoComplete="off"
            value="true"
            onClick={setSuccessLand}
          />{" "}
          true
        </label>
        <label className="btn btn-primary">
          <input
            type="radio"
            name="options"
            autoComplete="off"
            value="false"
            onClick={setSuccessLand}
          />{" "}
          false
        </label>
      </div>
    </Fragment>
  );
};

export default connect()(Successland);
