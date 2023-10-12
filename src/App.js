import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Social from './components/Social';
import Skillset from './components/Skillset';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Social />
      <Skillset />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;