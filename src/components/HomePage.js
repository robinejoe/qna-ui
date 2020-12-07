import '../App.css';
import CategoryDropdown from './CategoryDropdown';
import Header from './Header';
import QuestionCards from './QuestionCards';
import QuestionForm from './QuestionForm';
import React, { useState } from 'react';

function HomePage() {
  const [selectedCategory, setCategory] = useState('');
  function onCategoryChange(event) {
    const {value} = event.target;
    setCategory(value);
  }
  return (
    <div className="App">
      <Header />
      <div className="selectdropdown">
      <CategoryDropdown onChange={onCategoryChange}/>
      </div>
      <div className="mainbody">
      <QuestionCards category={selectedCategory}/>
      <QuestionForm />
      </div>
    </div>
  );
}

export default HomePage;
