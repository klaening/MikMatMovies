import "./App.css";
import "./Components/Global.css";

//Imported components
import Nav from "./Components/Nav";
<<<<<<< HEAD
import Preview from "./Components/Preview";

function App() {
  return (
    <div className="App">
      <Nav />
      <Preview />
=======
import Card from "./Components/Card";

function App() {
  return (
    <div className="main">
      <div className="App">
        <Nav />
        <Card />
        <Card />
      </div>
>>>>>>> main
    </div>
  );
}

export default App;
