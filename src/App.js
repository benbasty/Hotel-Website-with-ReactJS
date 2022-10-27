import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer />      
    </div>
  );
}

export default App;
