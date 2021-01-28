import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import VideoSection from "./Components/VideoSection";
import CardHolder from "./Components/Card/CardHolder";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Nav />
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
  );
}

export default App;
