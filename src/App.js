import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/About" element={<About /> }/>
          <Route path="/Experience" element={<Experience /> }/>
          <Route path="/Projects" element={<Projects /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
