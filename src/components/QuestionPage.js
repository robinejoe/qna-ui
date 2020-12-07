import Header from './Header';
import CategoryDropdown from './CategoryDropdown';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import QuestionDetails from './QuestionDetails';

function QuestionPage() {
    const {id} = useParams();
    const [ question, setQuestion ] = useState();
    const [ isBusy, setBusy ] = useState(true);
    useEffect(() => {
        const getQuestion = async () => {
            const response = await fetch('http://localhost:3001/api/questions/' + id);
            const data = await response.json();
            setQuestion(data);
            setBusy(false);
        }
        getQuestion()
    }, []);
    return (
        <div className="App">
            <Header />
            <div className="selectdropdown"><CategoryDropdown /></div>
            <div className="sectioncontainer">
                { question && <QuestionDetails question={question} /> }
            </div>
        </div>
    )
}


export default QuestionPage;