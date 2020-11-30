import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';

function QuestionCards() {
    const questionLimit = 3;
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const getQuestions = async () => {
            fetch('http://localhost:3001/api/questions')
                .then((response) => response.json())
                .then((data) => setQuestions(data.map(q => q)))
        }
        getQuestions()
    }, []);
    return (
        <div>
            <h1>Questions</h1>
            {questions.slice(0, questionLimit).map(q => (
                <QuestionCard question={q}/>
            ))}
        </div>
    );
}

export default QuestionCards;