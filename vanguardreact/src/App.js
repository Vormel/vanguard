import logo from './logo.svg';
import Testing from './Testing';
import './App.css';

function App() {
  function A() {
    console.log("IN A")
    var out=[]
    var i=0
    for (i; i<3; i++) {
      out.push(<Testing/>)
      console.log("Text")
    }
    return out
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to have fun.
        </p>
        {A().map(field => (field))} 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a>
      </header>
    </div>
  );
}

export default App;
