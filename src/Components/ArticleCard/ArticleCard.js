import "../ArticleCard/ArticleCard.css"
import React from "react"
import { Link } from "react-router-dom"

function ArticleCard({id, image, title, category}) {
  return (
    <button className="card">
      <Link to={`/${id}`}>
        <img src={image} alt="article thumbnail" />
        <p>{title}</p>
        <p>{category}</p>
      </Link> 
    </button>
  )

}

export default ArticleCard;