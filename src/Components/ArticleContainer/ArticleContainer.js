import "../ArticleContainer/ArticleContainer.css"
import React from "react"
import ArticleCard from "../ArticleCard/ArticleCard"
import { useState, useEffect } from "react"

function ArticleContainer({  homeArticles}) {
  // console.log("home Article", homeArticles)
  // console.log("filtered articles", filteredArticles)
  const [categories, setCategories] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    let finalList=[]
        const options = homeArticles.map(article => {
          if(!finalList.includes(article.section)) {
            finalList.push(article.section)
          }
        })
        console.log("sjksbjbd", categories)
        setCategories(finalList)

  }, [])

  const filterArticles = (category) => {
    const filterHome = homeArticles.filter((article) => article.section === category)
    return setFilteredArticles(filterHome)
  }
  return (
    <div>
      <h1>Welcome to News Reader!</h1>
      <input type="list" list="categories" placeholder='Categories' onChange={(event) => filterArticles(event.target.value)}/>
      <datalist id="categories">
        {categories.map((category,index) => 
            <option key={index} value={category}>{category}</option>
        )}
      </datalist>
      <section className="card-grid">
        {
        filteredArticles.length>0 ? filteredArticles.map((articleDetails, index) => {
          return <ArticleCard id={index} key={index} image={articleDetails.multimedia[2].url} title={articleDetails.title} category={articleDetails.section} />
        }) : homeArticles.map((articleDetails, index) => {
          return <ArticleCard id={index} key={index} image={articleDetails.multimedia[2].url} title={articleDetails.title} category={articleDetails.section} />
        })  
        }
      </section>
    </div>
  )
}

export default ArticleContainer