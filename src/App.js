import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav'

//Paginas
import Home from './Pages/Home/Home';
import About from './Pages/About.js/About';
import Contact from './Pages/Contact/Contact';
import CharacterDetail from './Pages/CharacterDetail/CharacterDetail'

const App = () => {

  return (
    <Router>   
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  </Router>

  );
}

export default App;
