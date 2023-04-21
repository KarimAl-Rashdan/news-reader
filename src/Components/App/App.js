// import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to News Reader!</h1>
    </div>
  );
}

export default App;
