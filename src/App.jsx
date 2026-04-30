import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Social from './components/Social.jsx';
import Skillset from './components/Skillset.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skillset />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;