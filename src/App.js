import logo from './logo.svg';
import './App.css';
import CategoryDropdown from './components/CategoryDropdown';
import Header from './components/Header';
import QuestionCards from './components/QuestionCards';
import QuestionForm from './components/QuestionForm';

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryDropdown />
      <QuestionCards />
      <QuestionForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
