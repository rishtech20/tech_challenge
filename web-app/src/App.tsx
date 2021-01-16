import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SongsList from "./SongsList";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <h3>Songalysis</h3>
          </div>
          <div className="App-header-content">
            <Link to="/list" className="App-link">
              Check out the List &gt;
            </Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={SongsList} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
