import logo from './logo.svg';
import './App.css';
import CategoryDropdown from './components/CategoryDropdown';
import Header from './components/Header';
import QuestionCards from './components/QuestionCards';
import QuestionForm from './components/QuestionForm';
import React, { useState } from 'react';

function App() {
  const [selectedCategory, setCategory] = useState('');
  function onCategoryChange(event) {
    const {value} = event.target;
    setCategory(value);
  }
  return (
    <div className="App">
      <Header />
      <CategoryDropdown onChange={onCategoryChange}/>
      <div className="mainbody">
      <QuestionCards category={selectedCategory}/>
      <QuestionForm />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
