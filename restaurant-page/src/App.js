import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <div className="first-page">
        <div className="overlay"></div>
        <Header />
        <Home />
      </div>
      <div className="second-page">
        <About />
      </div>
    </div>
  );
}

export default App;
