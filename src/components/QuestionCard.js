import React, { useState, useEffect } from 'react';

function QuestionCard(props) {   
    const [question, setQuestion] = useState(props.question)
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        if(question !== props.question) {
            setQuestion(props.question)
        }
        let url = 'http://localhost:3001/api/questions/' + props.question._id + '/comments'
        let getComments = async () => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => setComments(data.map(c => c)))
        }
        getComments()
    }, [question, props.question]);
    const [showAnswers, setShowAnswers] = useState(false);
    const toggleAnswers = () => {
        if (!showAnswers) {
            setShowAnswers(true)
        }
        else {
            setShowAnswers(false)
        }
    }
    return (
        <div className="questioncard">
            <h1>{question.title}</h1>
            <span>Posted by: <em>{question.user}</em> in </span>
            <h3 className="categoryflair">{question.category.name}</h3>
            <p>{question.description}</p>
            <button className="answersbutton" onClick={toggleAnswers}>Answers:</button>
            <div style={{display: showAnswers ? 'block' : 'none'}}>
                {comments.map(c => (
                <div className="comment">
                    <p>Reply by: {c.user} on {c.createdAt}</p>
                    <p>{c.content}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;