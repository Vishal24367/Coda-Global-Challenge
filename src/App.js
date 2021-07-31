import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from "./constant/history";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}
