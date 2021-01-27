import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import VideoSection from "./Components/VideoSection";
import CardHolder from "./Components/Card/CardHolder";

function App() {
  return (
    <div className="App">
      <Nav />
      <VideoSection />
      <CardHolder />
    </div>
  );
}

export default App;
