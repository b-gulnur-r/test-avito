import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { News } from "./components/news"
import { New } from "./components/new"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route path={"/news/:newId"}>
          <New />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return (
    <div style={{ margin: 20}}>
      <h2>Тестовое задание</h2>
      <Link to="/news"><button>Go to News</button></Link>
    </div>
  );
}
export default App
