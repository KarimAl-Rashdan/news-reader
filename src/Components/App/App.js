import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import ArticleContainer from '../ArticleContainer/ArticleContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route
        exact path="/"
        render={() =>
          <ArticleContainer /> 
        }
      />
    </div>
  );
}

export default App;
