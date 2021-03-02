import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Card from "./card";

function Spacex({ successLaunch, successLand, launchYear }) {
  const [data, setData] = useState();

  useEffect(() => {
    let url = "https://api.spacexdata.com/v3/launches?limit=100";
    const fetchData = async () => {
      if (successLaunch) {
        url = url + `&launch_success=${successLaunch}`;
      }
      if (successLand) {
        url = url + `&land_success=${successLand}`;
      }
      if (launchYear) {
        url = url + `&launch_year=${launchYear}`;
      }
      const result = await axios.get(url);

      setData(result.data);
    };

    fetchData();
  }, [successLaunch, successLand, launchYear]);

  return data ? (
    <div className="card_view">
      {data &&
        data.map((item) => <Card key={item.flight_number} data={item} />)}
    </div>
  ) : (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  launchYear: state.add.launchYear,
  successLaunch: state.add.successLaunch,
  successLand: state.add.successLand,
});

export default connect(mapStateToProps)(Spacex);
