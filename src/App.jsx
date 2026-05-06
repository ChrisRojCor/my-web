import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Social from './components/Social.jsx';
import Skillset from './components/Skillset.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Hero />
        <Skillset />
        <Experience />
        <Portfolio />
        <Education />
      </div>
      <Contact />
    </div>
  );
}

export default App;