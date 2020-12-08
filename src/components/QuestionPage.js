import Header from './Header';
import CategoryDropdown from './CategoryDropdown';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import QuestionDetails from './QuestionDetails';
import CommentCard from './CommentCard';

function QuestionPage() {
    const {id} = useParams();
    const [ question, setQuestion ] = useState();
    const [ isBusy, setBusy ] = useState(true);
    const [ comments, setComments ] = useState([]);
    useEffect(() => {
        const getQuestion = async () => {
            const response = await fetch('http://localhost:3001/api/questions/' + id);
            const data = await response.json();
            setQuestion(data);
            setBusy(false);
        }
        const getComments = async () => {
            const response = await fetch('http://localhost:3001/api/questions/' + id + '/comments');
            const data = await response.json();
            setComments(data);
        }
        getQuestion()
        getComments()
    }, []);
    return (
        <div className="App">
            <Header />
            <div className="selectdropdown"><CategoryDropdown /></div>
            <div className="sectioncontainer">
                { question && <QuestionDetails question={question} /> }
                <div>
                    <h2>Responses:</h2>
                    { comments.length >0 ?
                        comments.map((comment) => (
                            <CommentCard key={comment._id} comment={comment} />
                        ))
                        : <div>No comments yet.</div>
                    }
                </div>
                <div className="commentalign">
                    <div className="commentcontainer">
                        <form className="commentform">
                        <h2>Add Comment</h2>
                        <input
                            name="user"
                            placeholder="User"
                        />
                        <textarea
                            name="comment"
                            placeholder="Comment"
                        />
                        <button className="commentbutton">Submit Comment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default QuestionPage;