import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendVideos from "./RecommendVideos";
import React from "react";
import SearchPage from "./SearchPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
