import React, { useState, useEffect } from "react";

import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import VideoSection from "./Components/VideoSection";
import CardHolder from "./Components/Card/CardHolder";
import { ToastContainer } from "react-toastify";
import { Grid } from "@material-ui/core";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="App">
      <Nav setResult={setResult} />
      <div className="body">
        {/* <VideoSection /> */}
        <CardHolder />
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
