import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { useState, useEffect } from "react"
import fetchData from '../../apiCalls';
import DetailsView from '../DetailsView/DetailsView';

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
      <Route
        exact path="/:id"
        render={({ match }) => {
          return (
            <DetailsView id={match.params.id} homeArticles={homeArticles}/>
          )
        }}
      />
    </div>
  );
}

export default App;
