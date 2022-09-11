import { useState } from 'react';
import './App.css';
import QAnswer from './View/Q-A Render';
import QuestionList from './View/Questions';
import PlayAgain from './Component/PlayAgain';
import Grade from './View/Grade';

function App() {

  const [startQuiz, setStartQuiz] = useState(true)
  const [questionList, setQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  let totalNumber = 100;
  
  const letsQuiz = () => {
    setStartQuiz(false)
  }
 
  const nextQuestion =  (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1)
    }
    if(questionList < QuestionList.length - 1) {
      setQuestion(questionList + 1)
    }
    else{
      setResult(true)
    }
  }

  const reset = () => {
    setResult(false)
    setScore(0)
    setQuestion(0)
  }

  return (
    <div className="container">
    {result ? (
      <div>
      <Grade grade={score} questionList={questionList} totalNumber={totalNumber} />
      <PlayAgain reset={reset} title={'Play Again'} />
      </div>
    ) : (
      <div>
      {startQuiz ? (
        <>
        <h1>Welcome</h1>
        <PlayAgain reset={letsQuiz} title={'Start Quiz'} />
        </>
      ) : (
    <div>
       <QAnswer 
        nextQuestion={nextQuestion} 
        questionList={questionList} 
        QuestionList={QuestionList}
        myQuestion={QuestionList[questionList].question}
        myAnswer={QuestionList[questionList].answerList}
         />
      </div>
      )}
      </div>
      )}
    </div>
  );
}

export default App;
