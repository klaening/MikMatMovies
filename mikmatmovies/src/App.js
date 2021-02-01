import React, { useState, useEffect } from "react";

import "./App.css";
import "./Components/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Imported components
import Nav from "./Components/Nav";
import StartSite from "./Components/StartSite";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log("UseEffect");
    console.log(result);
  }, [result]);

  return (
    <Router>
      <div className="App">
        <Nav setResult={setResult} />
        <Switch>
          <div className="body">
            <Route result={result} path="/" exact component={StartSite} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
