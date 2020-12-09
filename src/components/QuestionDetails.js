import { useState } from 'react';
import Moment from 'react-moment';

function QuestionDetails(props) {
    const [ editQuestion, setEditQuestion ] = useState(false);
    const [ question, setQuestion ] = useState(props.question);

    function toggleEdit(event) {
        setEditQuestion(true);
    }

    const handleQuestionEdit = async (event) => {
        event.preventDefault();
        const body = {
            title: event.target[0].value,
            description: event.target[1].value
        };
        const updatedQuestion = await fetch('http://localhost:3001/api/questions/' + question._id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((data) => {
            setEditQuestion(false);
            setQuestion(data.data);
        })
    }

    return (
        <div className="card">
            {question &&
                <div>
                {editQuestion ? 
                    <div>
                        <form className="form" onSubmit={handleQuestionEdit}>
                            <textarea
                            name="title"
                            placeholder="Question"
                            defaultValue={question.title}
                            />
                            <textarea
                            name="description"
                            placeholder="Description"
                            defaultValue={question.description}
                            />
                            <button>Update</button>  
                        </form>
                    </div>
                    :
                    <div>
                        <h1>{question.title}</h1>
                        <h3 className="categoryflair">{question.category.name}</h3>
                        <p>Posted by: <em>{question.user}</em> on <Moment format="MM/DD/YYYY \a\t h:mm:ss a">{question.createdAt}</Moment> <button onClick={toggleEdit}>Edit</button></p>
                        <p>{question.description}</p>
                    </div>
                }
                </div>
            }
        </div>
    )
}

export default QuestionDetails;