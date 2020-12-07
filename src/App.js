import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/'><HomePage /></Route>
    </Switch>
    </Router>
  );
}

export default App;
