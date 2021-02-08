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

//Footer
import Footer from "./Components/Footer/Footer";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import JobOffers from "./Components/Pages/JobOffers/JobOffers";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {}, [result]);

  return (
    <Router>
      <div className="App">
        <Nav setResult={setResult} />
        <div className="main_content">
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
            <Route path="/about" component={About}></Route>
            <Route path="/contact-us" component={ContactUs}></Route>
            <Route path="/job-offers" component={JobOffers}></Route>
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
