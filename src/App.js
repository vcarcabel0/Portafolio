
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home.js";
import NavBar from './components/NavBar.js';
import SobreMi from "./components/SobreMi.js";
import MisProyectos from "./components/MisProyectos.js";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";
import SobremiSection from "./components/SobremiSection";

function App() {
  return (
    <Router>
        <NavBar />
        <Home />
        <SobreMi />
        <MisProyectos />
        <Footer />
{/* se supone que tengo que usar Switch? lo intente y no me funciona :D dice que ya no se usa o algo asi */}
        <Switch>
          <Route path="SobreMiSection">
            <SobremiSection />
          </Route>
        </Switch>

      <ScrollToTop smooth color="#fff" className="btn-up"/>
    </Router>
  );
}

export default App;
