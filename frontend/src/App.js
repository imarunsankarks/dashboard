import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
// import Create1 from './Create1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Update from './Update';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route exact path='/update/:id' component={Update} />
            <Route exact path='/' component={Home} />
            <Route exact path='/:id' component={BlogDetails} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;