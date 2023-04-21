import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { useState, useEffect } from "react"
import fetchData from '../../apiCalls';
import DetailsView from '../DetailsView/DetailsView';

function App() {
  const [homeArticles, setHomeArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    fetchData()
    .then((data) => {
      setHomeArticles(data.results)
      let finalList=[]
      const options = data.results.map(article => {
        if(!finalList.includes(article.section)) {
          finalList.push(article.section)
        }
      })
      setCategories(finalList)
    })
    .catch((error) => console.log(error))
  }, [])

  const filterArticles = (category) => {
    const filterHome = homeArticles.filter((article) => article.section === category)
    return setFilteredArticles(filterHome)
  }
  return (
    <div className="App">
      <NavBar />
      <input type="list" list="categories" placeholder='Categories'  onChange={(event) => filterArticles(event.target.value)}/>
      <datalist id="categories">
        {categories.map((category,index) => 
            <option key={index} value={category}>{category}</option>
        )}
      </datalist>
      <Route
        exact path="/"
        render={() =>
          <ArticleContainer filteredArticles={filteredArticles} homeArticles={homeArticles}/> 
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
