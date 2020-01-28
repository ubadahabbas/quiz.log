const questionsData =[
    {
        question: "function aaa() {   return test: 1  } alert( typeof aaa() ); ",
        body:"What is alert message?",
        answers:[
            {text: "undefind",correct: true},
            {text: "object",correct: false},
            {text: "number",correct: false},
            {text: "function",correct: false}
        ],
        category: ["JavaScript" ,"alert","typeof"]
    },
    {
        question: `( true + false ) > 2 + true; `,
        body: `what is the result?`,
        answers:[
            {text: "true",correct: false},
            {text: "TypeError",correct: false},
            {text: "Nan",correct: false},
            {text: "false",correct: true}
        ],
        category: ["JavaScript","boolean", "arithmetic"]
    },
    {
        question: `var foo = function foo() { console.log( foo === foo ) } foo();`,
        body: `What is printed on the console?`,
        answers:[
            {text: "0.97191",correct: true},
            {text: "1",correct: false}
        ],
        category: ["javascript", "console"]
    }
]