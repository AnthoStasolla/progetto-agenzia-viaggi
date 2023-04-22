import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homescreen from "./screen/Homescreen";
import Aboutscreen from "./screen/Aboutscreen";
import Offertescreen from "./screen/Offertescreen";
import Contactscreen from "./screen/Contactscreen";
import Errorscreen from "./screen/Errorscreen";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<Aboutscreen />} />
          <Route path="/offerte" element={<Offertescreen />} />
          <Route path="/contact" element={<Contactscreen />} />
          <Route path="*" element={<Errorscreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
