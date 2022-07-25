import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
