import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gifs/peru">Gifs de Peru</Link>
        <Link to="/gifs/colombia">Gifs de Colombia</Link>
        <Link to="/gifs/brasil">Gifs de Brasil</Link>
        <Route component={ListOfGifs} path="/gifs/:keyword" />
      </section>
    </div>
  );
}

export default App;
