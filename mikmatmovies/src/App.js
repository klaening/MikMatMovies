import React, { useState, useEffect } from "react";

import "./App.css";
import "./Components/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import itemDetails from "./Components/ItemDetails";

//Imported components
import Nav from "./Components/Nav";
import StartSite from "./Components/StartSite";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {}, [result]);

  return (
    <Router>
      <div className="App">
        <Nav setResult={setResult} />
        <div className="body">
          <Switch>
            <Route
              path="/"
              exact
              component={() => <StartSite SearchResult={result} />}
            />
            <Route path="/details/:id" component={itemDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
