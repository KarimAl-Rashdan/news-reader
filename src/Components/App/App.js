import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { useState, useEffect } from "react"

function App() {
  const [homeArticles, setHomeArticles] = useState([])

  useEffect =() => {
    
  }
  return (
    <div className="App">
      <NavBar />
      <Route
        exact path="/"
        render={() =>
          <ArticleContainer /> 
        }
      />
    </div>
  );
}

export default App;
