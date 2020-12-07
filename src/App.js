import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import QuestionPage from './components/QuestionPage';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/question/:id'><QuestionPage /></Route>
      <Route path='/'><HomePage /></Route>
    </Switch>
    </Router>
  );
}

export default App;
