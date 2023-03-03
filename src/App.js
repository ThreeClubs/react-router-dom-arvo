import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// BONUS CHALLENGE: This App is functional but it looks TERRIBLE!!! Make it look awesome with your amazing CSS skills and post a screen for us all.
// if you want to -- change the content in the components as it is very generic - be as creative as your want and make it your own!
