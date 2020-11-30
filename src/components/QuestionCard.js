import React from 'react';

function QuestionCard(props) {   
    const question = props.question;
    return (
        <div>
            <h1>{question.title}</h1>
            <h3>{question.category.name}</h3>
            <p>{question.description}</p>
            <h2>Answer:</h2>
            <p>This is where the answer text will go...</p>
        </div>
    );
}

export default QuestionCard;



//This should display a sample question, its category, and when clicked, should be collapseable with one answer/comment to the question becomining viewable, or several comments.