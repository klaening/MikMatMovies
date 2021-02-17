import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "./Components/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Imported components
import Nav from "./Components/Nav/Nav";
import Favourites from "./Pages/Favourites/Favourites";
import Movies from "./Pages/Movies/Movies";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import SearchResult from "./Pages/Search/SearchResult";

//Footer
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import JobOffers from "./Pages/JobOffers/JobOffers";
import TVSeries from "./Pages/TVSeries/TVSeries";

function App() {
  const [movieResult, setMovieResult] = useState([]);
  const [seriesResult, setSeriesResult] = useState([]);
  const [searchString, setSearchString] = useState("");

  return (
    <Router>
      <div className="App">
        <Nav
          setMovieResult={setMovieResult}
          setSeriesResult={setSeriesResult}
          setSearchString={setSearchString}
        />
        <div className="main_content">
          <Switch>
            <Route path="/" exact component={Movies} />

            {/* NavBar Pages */}
            <Route path="/movies" exact component={Movies} />
            <Route path="/tv-series" exact component={TVSeries} />
            <Route path="/favourites" exact component={Favourites} />
            <Route
              path="/search"
              component={() => (
                <SearchResult
                  header="search results"
                  SearchResult={movieResult}
                  seriesSearchResult={seriesResult}
                  searchString={searchString}
                />
              )}
            />

            {/* Item Details */}
            <Route path="/details/:type/:id" component={ItemDetails} />

            {/* Footer Pages */}
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
