import "./App.css";
import Estimate from "./Estimate";
import logo from "./assets/2020-01.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hettich from "./Hettich";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Estimate />} />
        <Route path="/hettich" element={<Hettich />} />
      </Routes>
    </Router>
  );
}

export default App;
