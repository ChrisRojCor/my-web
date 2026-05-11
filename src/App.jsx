import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Social from './components/Social/Social.jsx';
import Skillset from './components/Skillset/Skillset.jsx';
import Experience from './components/Experience/Experience.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx'

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