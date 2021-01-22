import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="main">
      <div className="App">
        <Nav />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
