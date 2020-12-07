import { useState, useEffect } from 'react';
import Moment from 'react-moment';

function QuestionDetails(props) {
    const [ question, setQuestion ] = useState();
    useEffect(() => {
        setQuestion(props.question);
    }, []);
    return (
        <div>
            {question &&
                <div>
                <h1>{question.title}</h1>
                <h3 className="categoryflair">{question.category.name}</h3>
                <p>Posted by: <em>{question.user}</em> on <Moment format="MM/DD/YYYY \a\t h:mm:ss a">{question.createdAt}</Moment></p>
                <p>{question.description}</p>
                </div>
            }
        </div>
    )
}

export default QuestionDetails;