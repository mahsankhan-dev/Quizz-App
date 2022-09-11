function Question_Answer (props) {
    return (
        <>
        <h1>Question {props.questionList + 1} /  {props.QuestionList.length}</h1>
        <h3>{props.myQuestion}</h3>
        <div className='my-list'>
        <ul>
            {props.myAnswer.map(e => {
               return <li>
                 <button onClick={() => props.nextQuestion(e.isCorrect)}>
                 {e.answer}
                 </button>
               </li>
        })}
        </ul>
        </div>
        </>
    )
}

export default Question_Answer;