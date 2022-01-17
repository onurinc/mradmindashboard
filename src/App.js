import CommentDashboard from "./Pages/CommentDashboard";
import ReviewsDashboard from "./Pages/ReviewsDashboard";
// import Login from ".Pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/">
          <Login />
        </Route> */}
          <Route exact path="/commentsdashboard">
            <CommentDashboard />
          </Route>
          <Route exact path="/reviewsdashboard">
            <ReviewsDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
