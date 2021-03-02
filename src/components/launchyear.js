import React, { Fragment } from "react";
import {connect} from 'react-redux';

const Launchyear = ({ dispatch }) => {
  const setYear = (e) => {
    dispatch({type: "SET_LAUNCH_YEAR", payload: e.target.value});
  };
  return (
    <Fragment>
      <p className="launch_year">
        <h6>Launch Year</h6>
      </p>
      <div className="m-2">
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2006" onClick={setYear}>
            2006
          </button>
          <button className="btn btn-primary" value="2007" onClick={setYear}>
            2007
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2008" onClick={setYear}>
            2008
          </button>
          <button className="btn btn-primary" value="2009" onClick={setYear}>
            2009
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2010" onClick={setYear}>
            2010
          </button>
          <button className="btn btn-primary" value="2011" onClick={setYear}>
            2011
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2012" onClick={setYear}>
            2012
          </button>
          <button className="btn btn-primary" value="2013" onClick={setYear}>
            2013
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2014" onClick={setYear}>
            2014
          </button>
          <button className="btn btn-primary" value="2015" onClick={setYear}>
            2015
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2016" onClick={setYear}>
            2016
          </button>
          <button className="btn btn-primary" value="2017" onClick={setYear}>
            2017
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2018" onClick={setYear}>
            2018
          </button>
          <button className="btn btn-primary" value="2019" onClick={setYear}>
            2019
          </button>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-primary" value="2020" onClick={setYear}>
            2020
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default connect()(Launchyear);
