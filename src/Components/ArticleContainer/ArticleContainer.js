import "../ArticleContainer/ArticleContainer.css"
import React from "react"

function ArticleContainer({ homeArticles}) {
  console.log("home Article", homeArticles)
  return (
    <div>
      <h1>Welcome to News Reader!</h1>
      <section className="card-grid">
        {homeArticles.map((articleDetails) => {
          return <ArticleCard image={articleDetails.multimedia[2].url} title={articleDetails.title} category={articleDetails.section} />
        })}
      </section>
    </div>
  )
}

export default ArticleContainer