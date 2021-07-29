import './App.css';
import { BrowserRouter as Router, Route , Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {

  return (
    <div className="App">
          <Router>
          <div className="topmenulinks">
            <Link to="/createpost">
              Create a Post
            </Link>
            <br/>
            <Link to="/">
              Home Page
            </Link>
            </div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/createpost" exact component={CreatePost} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;
