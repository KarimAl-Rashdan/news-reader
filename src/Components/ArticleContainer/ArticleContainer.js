import "../ArticleContainer/ArticleContainer.css"
import React from "react"
import ArticleCard from "../ArticleCard/ArticleCard"

function ArticleContainer({ homeArticles}) {
  console.log("home Article", homeArticles)
  return (
    <div>
      <h1>Welcome to News Reader!</h1>
      <section className="card-grid">
        {homeArticles.map((articleDetails, index) => {
          return <ArticleCard id={index} image={articleDetails.multimedia[2].url} title={articleDetails.title} category={articleDetails.section} />
        })}
      </section>
    </div>
  )
}

export default ArticleContainer