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
        <div>
            <h1>Questions</h1>
            <p>{props.category}</p>
            {questions.slice(0, questionLimit).map(q => (
                <QuestionCard question={q}/>
            ))}
        </div>
    );
}

export default QuestionCards;