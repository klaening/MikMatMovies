import React, { useState, useEffect } from "react";

import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import CardHolder from "./Components/Card/CardHolder";
import { ToastContainer } from "react-toastify";
import Search from "./Components/Search/Search";
import movies from "./Components/Card/movies.json";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log("UseEffect");
    console.log(result);
  }, [result]);

  return (
    <div className="App">
      <Nav setResult={setResult} />
      <div className="body">
        {/* <VideoSection /> */}

        <CardHolder header="Recommended" movies={movies} />
        <CardHolder header="Search" movies={result} />

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
    </div>
  );
}

export default App;
