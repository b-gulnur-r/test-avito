import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { News } from "./components/news"
import { New } from "./components/new"

function App() {
  return (
    <Router>
      <Switch>
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

export default App
