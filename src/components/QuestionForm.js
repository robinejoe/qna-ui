import CategoryDropdown from './CategoryDropdown';
import { useHistory } from 'react-router-dom';

function QuestionForm() {
    let history = useHistory();
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const body = {
            user: event.target[0].value,
            category: event.target[1].value,
            title: event.target[2].value,
            description: event.target[3].value
        };
        let response = await fetch('http://localhost:3001/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        });
        history.push('/question/' + response._id);
    }
    return (
        <div className="formcontainer">
            <h1>Post A Question</h1>
            <form className="form" onSubmit={handleOnSubmit}>
            <input 
                name="user"
                placeholder="User"
            />
            <CategoryDropdown />
            <textarea
                name="title"
                placeholder="Question"
            />
            <textarea
                name="description"
                placeholder="Description"
            />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default QuestionForm;