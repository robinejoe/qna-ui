import CategoryDropdown from './CategoryDropdown';

function QuestionForm() {
    function handleOnSubmit(event) {
        const body = {
            user: event.target[0].value,
            category: event.target[1].value,
            title: event.target[2].value,
            description: event.target[3].value
        };
        fetch('http://localhost:3001/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then((response) => {
            console.log("Status: " + response.status);
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => console.log('Success:', data))

        event.preventDefault();
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