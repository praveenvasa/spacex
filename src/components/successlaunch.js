import React, { Fragment } from "react";
import { connect } from "react-redux";

const Successlaunch = ({ dispatch }) => {
  const setSuccessLaunch = (e) => {
    console.log("e.target", e.target.value);
    dispatch({ type: "SET_SUCCESS_LAUNCH", payload: e.target.value });
  };
  return (
    <Fragment>
      <p className="launch_year">
        <h6>Success Launch</h6>
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
            onClick={setSuccessLaunch}
          />{" "}
          true
        </label>
        <label className="btn btn-primary">
          <input
            type="radio"
            name="options"
            autoComplete="off"
            value="true"
            onClick={setSuccessLaunch}
          />{" "}
          false
        </label>
      </div>
    </Fragment>
  );
};

export default connect()(Successlaunch);
