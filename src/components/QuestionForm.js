import React, { useState, useEffect } from 'react';
import CategoryDropdown from './CategoryDropdown';

function QuestionForm() {
    const [form, setForm] = useState({
        user: "Robin"
    });
    return (
        <div className="formcontainer">
            <h1>Post A Question</h1>
            <form className="form">
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