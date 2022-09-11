import QuestionList from "../Questions";

function Grade (props) {
    const myGrade = (item) => {
        if(item >= 90 && item <= 100) {
            return "A"
        }
        else if(item >= 80 && item <= 90) {
            return "B"
        }
        else if(item >= 70 && item <= 80) {
            return "C"
        }else if(item >= 60 && item <= 70) {
            return "D"
        }else if(item >= 50 && item <= 60) {
            return "E"
        }else if(item >= 0 && item <= 50) {
            return "F"
        }
    }
    return (
        <div className="complete">
        <h1>Completed</h1>
        <h2>You have {props.grade} Correctly</h2>
        <h2>Your Percentage is : {props.grade / QuestionList.length * props.totalNumber} %</h2>
        <h2>Your Grade is: <h1>{myGrade((props.grade / QuestionList.length)*100)}</h1></h2>
        </div>
    )
};

export default Grade;