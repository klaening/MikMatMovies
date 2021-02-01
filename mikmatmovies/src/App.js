import React, { useState, useEffect } from "react";

import "./App.css";
import "./Components/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Switch>
          <div className="body">
            {/* <Route path="/"  exact component={() => <StartSite movies={result}> /> } /> */}
            <Route
              path="/"
              exact
              component={() => <StartSite movie={result} />}
            />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
