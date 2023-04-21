import "../ArticleContainer/ArticleContainer.css"
import React from "react"
import ArticleCard from "../ArticleCard/ArticleCard"

function ArticleContainer({ filteredArticles, homeArticles}) {
  console.log("home Article", homeArticles)
  console.log("filtered articles", filteredArticles)
  return (
    <div>
      <h1>Welcome to News Reader!</h1>
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