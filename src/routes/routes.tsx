import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Teams from "../pages/Teams/Teams";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/teams" exact component={Teams} />
    </Switch>
  );
}

export default Routes;
