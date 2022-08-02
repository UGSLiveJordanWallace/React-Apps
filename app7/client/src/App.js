import React from "react";
import Posts from "./Posts";
import { Container } from "react-bootstrap";
import CreatePost from "./CreatePost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Switch>
            <Route path={"/posts"} component={Posts}/>
            <Route path={"/create-post"} component={CreatePost} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
