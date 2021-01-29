import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import VideoSection from "./Components/VideoSection";
import CardHolder from "./Components/Card/CardHolder";
import { ToastContainer } from "react-toastify";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <VideoSection /> */}
      <Grid container justify="center" alignItems="center">
        <div xs={3}>
          <p>Hej</p>
        </div>
        <CardHolder xs={6} />
        <div xs={3}>
          <p>Hej</p>
        </div>
      </Grid>
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
  );
}

export default App;
