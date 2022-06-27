import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Single from './Pages/Single/Single'
import Add from './Pages/Add/Add'
import About from './Pages/About/About'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/book/:bookID" element={<Single />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
