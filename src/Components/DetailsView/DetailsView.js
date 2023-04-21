import { useEffect, useState } from "react"
import "../DetailsView/DetailsView.css"
import { Link } from "react-router-dom"

function DetailsView({id, homeArticles}) {
  const [currentArticle, setCurrentArticle]= useState({})
  const [articleImage, setArticleImage]= useState("")
  // const [date, setDate] = useState([])
  useEffect(() => {
    const article= homeArticles[id]
    // console.log("am i infinite?", article)
    setArticleImage(article.multimedia[0].url)
    // const update = new Date(article.updated_date)
    // setDate(update)
    return setCurrentArticle(article)
  }, [])
  return (
    <section className="detailsContainer" style={{backgroundImage: `url(${articleImage})`}}>
      <article className="posterDetails">
        <p className="detailTitle">{currentArticle.title}</p>
        <p className="detailByline">Written by:{currentArticle.byline}</p>
        <p className="detailDate">Updated Date: {currentArticle.updated_date}</p>
        <p className="detailAbstract">{currentArticle.abstract}</p>
        <p className="detailUrl">Click to Read More → <Link to={{ pathname: `${currentArticle.url}` }} target="_blank">{currentArticle.title}</Link></p>
      </article>
    </section>
  )
}

export default DetailsView