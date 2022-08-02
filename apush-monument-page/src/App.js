import './App.css';
import Opening from './Sections/Opening';
import Monument from './Sections/Monument';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Opening} />
          <Route path="/monument" component={Monument} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
