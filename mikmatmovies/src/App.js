import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import CardHolder from "./Components/Card/CardHolder";

function App() {
  return (
    <div className="main">
      <div className="App">
        <Nav />
        <CardHolder />
      </div>
    </div>
  );
}

export default App;
