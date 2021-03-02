import "./App.css";
import Team from "./components/team";
import Dashboard from "./components/dashboard";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h2>Spacex Launch Programs</h2>
      <div className="App">
        <Team />
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
