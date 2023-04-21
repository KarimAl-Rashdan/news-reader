import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { useState, useEffect } from "react"
import fetchData from '../../apiCalls';

function App() {
  const [homeArticles, setHomeArticles] = useState([])

  useEffect(() => {
    fetchData()
    .then((data) => {
      setHomeArticles(data.results)
      // console.log("data", data.results)
    })
    .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Route
        exact path="/"
        render={() =>
          <ArticleContainer homeArticles={homeArticles}/> 
        }
      />
    </div>
  );
}

export default App;
