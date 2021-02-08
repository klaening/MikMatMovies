import React, { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "./Components/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Imported components
import Nav from "./Components/Nav";
import Favourites from "./Components/Favourites/Favourites";
import StartSite from "./Components/StartSite";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import SearchResult from "./Components/Search/SearchResult";
import Footer from "./Components/Footer/Footer";

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
            <Route
              path="/search"
              component={() => (
                <SearchResult header="search results" SearchResult={result} />
              )}
            />
            <Route path="/details/:id" component={ItemDetails} />
          </Switch>
          <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
