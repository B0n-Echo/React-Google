import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from '../src/pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
              <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
