import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Project />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
