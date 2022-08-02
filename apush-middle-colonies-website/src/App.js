import './CSS/App.css';
import Kyla from './articles/Kyla';
import Lenny from './articles/Lenny';
import Hewan from './articles/Hewan';
import Kaarli from './articles/Kaarli';
import Jordan from './articles/Jordan';
import AboutUs from './articles/AboutUs';
import Abigail from './articles/Abigail';
import Welcome from './components/Welcome';
import WorkCited from './articles/WorkCited';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/abigail" component={Abigail}/>
          <Route path="/lenny" component={Lenny}/>
          <Route path="/hewan" component={Hewan}/>
          <Route path="/kyla" component={Kyla}/>
          <Route path="/kaarli" component={Kaarli}/>
          <Route path="/jordan" component={Jordan}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/work-cited" component={WorkCited}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
