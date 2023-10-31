import logo from './logo.svg';
import './App.css';
import AboutMe from './pages/AboutMe';
import CrosswordPuzzle from "./components/CrosswordPuzzle"

function App() {
  return (
    <div className="App">
      <AboutMe></AboutMe>
      <CrosswordPuzzle></CrosswordPuzzle>
    </div>
  );
}

export default App;
