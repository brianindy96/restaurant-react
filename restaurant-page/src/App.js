import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <div className="first-page">
        <div className="overlay"></div>
        <Header />
        <Home />
      </div>
      <div className="second-page">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
