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
import About from "./Components/FooterPages/About/About";
import ContactUs from "./Components/FooterPages/ContactUs/ContactUs";
import JobOffers from "./Components/FooterPages/JobOffers/JobOffers";
import TVSeries from "./Components/TVSeries/TVSeries";

function App() {
  const [movieResult, setMovieResult] = useState([]);
  const [seriesResult, setSeriesResult] = useState([]);
  //   useEffect(() => {}, [movieResult]);

  return (
    <Router>
      <div className="App">
        <Nav
          setMovieResult={setMovieResult}
          setSeriesResult={setSeriesResult}
        />
        <div className="main_content">
          <Switch>
            <Route path="/" exact component={StartSite} />
            <Route path="/movies" exact component={StartSite} />
            <Route path="/tv-series" exact component={TVSeries} />
            <Route path="/favourites" exact component={Favourites} />
            <Route
              path="/search"
              component={() => (
                <SearchResult
                  header="search results"
                  SearchResult={movieResult}
                  seriesSearchResult={seriesResult}
                />
              )}
            />
            <Route path="/details/:type/:id" component={ItemDetails} />
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
