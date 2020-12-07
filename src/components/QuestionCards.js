import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';

function QuestionCards(props) {
    const questionLimit = 3;
    let [questions, setQuestions] = useState([]);
    useEffect(() => {
        let byCategoryQuery = props.category === '' ? '' : '/categories/' + props.category;
        let getQuestions = async () => {
            fetch('http://localhost:3001/api/questions' + byCategoryQuery)
                .then((response) => response.json())
                .then((data) => setQuestions(data.map(q => q)))
        }
        getQuestions()
    }, [props.category]);
    return (
        <div className="questioncards">
            <h1>Questions</h1>
            {questions.slice(0, questionLimit).map(q => (
                <QuestionCard key={q._id} question={q}/>
            ))}
        </div>
    );
}

export default QuestionCards;