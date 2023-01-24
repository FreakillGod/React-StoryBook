import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
// import 'antd/dist/antd.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          yep
        </p>
        <Button>Yepp==== </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello
        </a>
      </header>
    </div>
  );
}

export default App;
