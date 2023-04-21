import "../NavBar/NavBar.css"
import logo from "../../Images/news-logo.png"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="returnHome">
      <Link to="/">
        <img src={logo} alt="logo" className="logo"/>
      </Link>
    </div>
  )
}

export default NavBar;