const QuestionList = [
    {
        question: 'How do you write "Hello World" in an alert box?',
            answerList: [
                {answer: 'msgBox("Hello World")', isCorrect: false}, 
                {answer: 'alertBox("Hello World")', isCorrect: false},
                {answer: 'msg("Hello World")', isCorrect: false },
                {answer: 'alert("Hello World")', isCorrect: true}
        ]
    },

    {
        question: 'How do you create a function in JavaScript?',
            answerList: [
                {answer: 'function = myFunc()', isCorrect: false}, 
                {answer: 'myFunc = function()', isCorrect: false},
                {answer: 'function myFunc()', isCorrect: true },
                {answer: 'function:myFunction()', isCorrect: true}
        ]
    },

    {
        question: 'What is HTML?',
            answerList: [
                {answer: 'Hyper Text Markup Language', isCorrect: true}, 
                {answer: 'Hyper That Markup Lands', isCorrect: false},
                {answer: 'How That Mark Language', isCorrect: false },
                {answer: 'Hello Thats Markup Language', isCorrect: false}
        ]
    },

    {
        question: 'What Is CSS?',
            answerList: [
                {answer: 'Computer Style Sheet', isCorrect: false}, 
                {answer: 'Cascading Style Sheets', isCorrect: true},
                {answer: 'Creative Style Sheet', isCorrect: false },
                {answer: 'Coloful Style Shet', isCorrect: false}
        ]
    },

    {
        question: 'What is the correct HTML for referring to an external style sheet?',
            answerList: [
                {answer: '<style src="mystyle.css">', isCorrect: false}, 
                {answer: '<link rel="stylesheet" type="text/css" href="mystyle.css">', isCorrect: true},
                {answer: '<stylesheet>mystyle.css</stylesheet>', isCorrect: false },
                {answer: 'Coloful Style Shet', isCorrect: false}
        ]
    },

    {
        question: 'Inside which HTML element do we put the JavaScript?',
            answerList: [
                {answer: '<scripting>', isCorrect: false}, 
                {answer: '<javscript">', isCorrect: true},
                {answer: '<js>', isCorrect: false },
                {answer: '<script>', isCorrect: true}
        ]
    },

    {
        question: 'Where is the correct place to insert a JavaScript?',
            answerList: [
                {answer: 'The <head> Section ', isCorrect: false}, 
                {answer: 'Both the <head> section and the <body> section are correct', isCorrect: true},
                {answer: 'The <body> Section', isCorrect: false },
        ]
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
            answerList: [
                {answer: '<script name="xxx.js">', isCorrect: false}, 
                {answer: '<script src="xxx.js">', isCorrect: true},
                {answer: '<script href="xxx.js">', isCorrect: false },
        ]
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
            answerList: [
                {answer: 'true', isCorrect: false}, 
                {answer: 'false', isCorrect: true},
        ]
    },

    {
        question: 'How do you call a function named "myFunction"?',
            answerList: [
                {answer: 'call myFunction()', isCorrect: false}, 
                {answer: 'call function myFuction()', isCorrect: false},
                {answer: 'myFunction()', isCorrect: true},
        ]
    }
    
]

export default QuestionList;