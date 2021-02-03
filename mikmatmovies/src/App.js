import React, { useState, useEffect } from "react";

import "./App.css";
import "./Components/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Imported components
import Nav from "./Components/Nav";
import Favourites from "./Components/Favourites/Favourites";
import StartSite from "./Components/StartSite";
import ItemDetails from "./Components/ItemDetails/ItemDetails";

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
            <Route path="/favourites" component={Favourites} />
            <Route path="/details/:id" component={ItemDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
