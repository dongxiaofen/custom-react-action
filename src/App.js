import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
