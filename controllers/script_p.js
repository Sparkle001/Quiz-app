const answersTrackerContainer = document.querySelector(".answers-tracker")
const options = document.querySelector(".options").children
const questionNumberSpan = document.querySelector(".question-num-value")
const question = document.querySelector(".question")
const totalQuestionsSpan = document.querySelector(".total-questions")
const correctAnswersSpan = document.querySelector(".correct-answers")
const totalQuestionsSpan2 = document.querySelector(".total-questions2")
const percentageSpan = document.querySelector(".percentage")
const timeText = document.querySelector(".question-number .Timer");
const timeCount = document.querySelector(".question-number .DisplayTime");

let currentIndex;
let index = 0;
let answeredQuestions = [];
let score = 0;
let counter;
let time = 10;

const opt1 = document.querySelector(".option1")
const opt2 = document.querySelector(".option2")
const opt3 = document.querySelector(".option3")
const opt4 = document.querySelector(".option4")

const questions = [{
    q: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks Text Markup Language', 'Hyperlinking Text Markdown Language'] ,
    answer: 0 
},

    {q: 'Which of the following is used to style web pages?',
    options: ['HTML', 'CSS', 'JavaScript', 'Python'] ,
    answer: 1},

    {q: 'What is the correct syntax to link a CSS file to an HTML document?',
    options: ['link rel="stylesheet" href="style.css"', 'style src="style.css"', 'css rel="stylesheet" link="style.css"', 'link src="stylesheet" href="style.css"'] ,
    answer: 0},

    {q: 'What does DOM stand for in web development?',
    options: ['Document Object Model', 'Data Object Module', 'Dynamic Object Model', 'Document Oriented Model'] ,
    answer: 0 },

    {q: 'Which of the following is a front-end JavaScript framework?',
    options: ['Django', 'Angular', 'Flask', 'Laravel'] ,
    answer: 1},

    {q: 'Which tag is used for inserting a line break in HTML?',
    options: ['br', 'lb', 'break', 'newline'] ,
    answer: 0},

    {q: 'What is the purpose of the "box-sizing" property in CSS?',
    options: ['To define border thickness', 'To include padding and border in the element’s total width and height', 'To adjust font size', 'To set the display mode of an element'] ,
    answer: 1},

    {q: 'Which HTTP method is used to retrieve data from a server?',
    options: ['POST', 'DELETE', 'GET', 'PUT'] ,
    answer: 2},

    {q: 'Which of these is NOT a JavaScript data type?',
    options: ['String', 'Boolean', 'Character', 'Number'] ,
    answer: 2},

    {q: 'In JavaScript, how do you declare a variable?',
    options: ['var variableName;', 'variableName;', 'let variableName;', 'var = variableName;'] ,
    answer: 0
    },
    
    {q: 'What is the purpose of the "alt" attribute in an <img> tag?' ,
    options: ['To provide an alternative text if the image cannot be displayed', 'To define the image height', 'To link to an external image', 'To set the alignment of the image'] ,
    answer: 0 },

    {q: 'Which programming language is primarily used for server-side scripting?' ,
    options: ['Python', 'JavaScript', 'PHP', 'C++'] ,
    answer: 2 },

    {q: 'In CSS, what is the correct syntax for applying a background color?' ,
    options: ['background-color: blue,', 'color-background: blue,', 'bg-color: blue,', 'background: blue-color,'] ,
    answer: 0 },

    {q: 'Which HTML attribute is used to define inline styles?' ,
    options: ['class', 'id', 'style', 'link'] ,
    answer: 2 },

    {q: 'What is the correct way to declare an array in JavaScript?' ,
    options: ['let arr = [1, 2, 3],', 'let arr = {1, 2, 3},', 'let arr = (1, 2, 3),', 'let arr = <1, 2, 3>,'] ,
    answer: 1 },

    {q: 'Which CSS property is used to control text size?' ,
    options: ['font-weight', 'font-size', 'text-transform', 'text-size'] ,
    answer: 1 },

    {q: 'Which of the following is a valid JavaScript function declaration?' ,
    options: ['function myFunction()', 'func myFunction()', 'def myFunction()', 'method myFunction()'] ,
    answer: 0 },

    {q: 'In CSS, how do you make a font italic?' ,
    options: ['font-weight: italic,', 'font-style: italic,', 'text-transform: italic,', 'text-style: italic,'] ,
    answer: 1 },

    {q: 'What does SQL stand for?' ,
    options: ['Structured Query Language', 'System Query Language', 'Sequential Query Language', 'Stylized Query Language'] ,
    answer: 0 },

    {q: 'The && and || operators compare two' ,
    options: ['String values', 'Number values', 'Classes', 'Boolean values'] ,
    answer: 3 },

    {q: 'Which HTML element is used for creating a table row?' ,
    options: ['tr', 'td', 'th', 'table'] ,
    answer: 0 },

    {q: 'What is the purpose of the "flexbox" in CSS?' ,
    options: ['To create flexible layouts that can adjust dynamically', 'To define grid layouts', 'To apply background images', 'To format text'] ,
    answer: 0 },

    {q: 'Which of the following is not a JavaScript framework?' ,
    options: ['React', 'Vue', 'Angular', 'Bootstrap'] ,
    answer: 3 },

    {q: 'In SQL, which command is used to retrieve data from a database?' ,
    options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'] ,
    answer: 0 },

    {q: 'Which of the following is a front-end technology?' ,
    options: ['Node.js', 'Express.js', 'React', 'MySQL'] ,
    answer: 2 },

    {q: 'In HTML, how do you create a checkbox?' ,
    options: ['input type="checkbox"', 'input type="check"', 'checkbox', 'input type="box"'] ,
    answer: 0 },

    {q: 'Which of these is a NoSQL database?' ,
    options: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'] ,
    answer: 1 },

    {q: 'Which CSS property is used to create space inside the element border?' ,
    options: ['padding', 'margin', 'border-spacing', 'spacing'] ,
    answer: 0 },

    {q: 'What does API stand for?' ,
    options: ['Application Programming Interface', 'Application Protocol Interface', 'Active Protocol Interface', 'Application Proxy Interface'] ,
    answer: 0 },

    {q: 'Which of the following is a JavaScript library for building user interfaces?' ,
    options: ['React', 'Angular', 'Vue', 'Flask'] ,
    answer: 0 },

    {q: 'In Python, what symbol is used to denote a block of code?' ,
    options: ['Indentation', 'Curly braces {}', 'Parentheses ()', 'Semicolon ,'] ,
    answer: 0 },

    {q: 'In CSS, what is the correct way to add a comment?' ,
    options: ['/* comment */', '\// comment', '<-- comment -->', '/* comment //*/'] ,
    answer: 0 },

    {q: 'Which HTML element is used for the largest heading?' ,
    options: ['h6', 'heading', 'h5', 'h1'] ,
    answer: 3 },

    {q: 'Which HTTP status code means "Not Found"?' ,
    options: ['404', '500', '200', '301'] ,
    answer: 0 },

    {q: 'Which programming language runs in the browser?' ,
    options: ['Java', 'Python', 'JavaScript', 'C++'] ,
    answer: 2 },

    {q: 'What does JSON stand for?' ,
    options: ['JavaScript Object Notation', 'JavaScript Online Node', 'JavaScript Open Network', 'JavaScript Operational Network'] ,
    answer: 0 },

    {q: 'In Python, how do you create a function?' ,
    options: ['def functionName():', 'func functionName()', 'function functionName()', 'create functionName()'] ,
    answer: 0 },

    {q: 'Which of the following is NOT a database management system?' ,
    options: ['MySQL', 'MongoDB', 'Oracle', 'React'] ,
    answer: 3 },

    {q: 'In CSS, which property is used to change the text color?' ,
    options: ['color', 'text-color', 'font-color', 'background-color'] ,
    answer: 0 },

    {q: 'Which CSS property controls the transparency of an element?' ,  
    options: ['opacity', 'visibility', 'filter', 'transparency'] ,  
    answer: 0 },

    {q: 'In JavaScript, which method is used to add an element to the end of an array?' ,  
    options: ['push()', 'pop()', 'shift()', 'unshift()'] ,  
    answer: 0 },

    {q: 'What is the default value of the "position" property in CSS?' ,  
    options: ['relative', 'absolute', 'static', 'fixed'] ,  
    answer: 2 },

    {q: 'Which of the following is not a valid position value?' ,  
    options: ['Static', 'Absolute', 'Relative', 'Top'] ,  
    answer: 3 },

    {q: 'Which JavaScript function can be used to parse a string into a JSON object?' ,  
    options: ['JSON.parse()', 'JSON.stringify()', 'parseJSON()', 'parseString()'] ,  
    answer: 0 },

    {q: 'In Python, which keyword is used to create a loop that iterates over a sequence?' ,  
    options: ['for', 'while', 'loop', 'iterate'] ,  
    answer: 0 },

    {q: 'What is the use of the "media" attribute in a <link> tag in HTML?' ,  
    options: ['To specify the media type of the linked resource', 'To link multiple stylesheets', 'To apply a style only to media devices', 'To embed a video in a webpage'] ,  
    answer: 0 },

    {q: 'Which of the following is a method used to prevent SQL injection attacks?' ,  
    options: [ 'HTML encoding','Prepared statements', 'CSS sanitization', 'Using comments in SQL queries'] ,  
    answer: 1 },

    {q: 'In CSS Grid, which property is used to define the number of columns in a grid?' ,  
    options: ['grid-template-columns', 'grid-auto-columns', 'grid-column-start', 'grid-column'] ,  
    answer: 0 },

    {q: 'Which Git command is used to upload local repository content to a remote repository?' ,  
    options: ['git push', 'git commit', 'git pull', 'git clone'] ,  
    answer: 0 },

    {q: 'In Python, what is the correct way to handle exceptions?' ,  
    options: ['try-except', 'try-catch', 'if-else', 'try-finally'] ,  
    answer: 0 },
]
console.log(questions.length);
totalQuestionsSpan.innerHTML = 10;

function load() {
    questionNumberSpan.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++
}

//Check if selected answer is correct or wrong or no answer
function check(element) {
    if (element == undefined) {
        updateAnswersTracker("wrong")
        disableClick()
        setTimeout(next, 1500);
    } else if (element.id == questions[currentIndex].answer) {
        element.className = "correct"
        updateAnswersTracker("correct")
        score += 1
        disableClick()
        setTimeout(next, 1500)

    } else {
        element.className = "wrong"
        updateAnswersTracker("wrong")
        disableClick()
        setTimeout(next, 1500)
    }

}

//Listener function for click event on Next button
function next() {
    clearInterval(counter);
    randomQuestion();
    enableClick();
}

//Function to disable click for the options and marks right answer
function disableClick() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled")

        if (options[i].id == questions[currentIndex].answer) {
            options[i].classList.add('correct');
        }
    }
}

//Function to re-enable click in the options
function enableClick() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong")

    }
}

//Function to select a random question
function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    if (index == 10) {
        quizOver();
    } else {
        if (answeredQuestions.length > 0) {
            if (answeredQuestions.includes(randomNumber)) {
                randomQuestion()
                currentQuestionTracker()
                clearInterval(counter)
                startTimer(time);
            } else {
                currentIndex = randomNumber;
                load()
                currentQuestionTracker()
                clearInterval(counter)
                startTimer(time);
            }
        }
        if (answeredQuestions.length == 0) {
            currentIndex = randomNumber
            clearInterval(counter);
            load()
        }
        //add the question to list of anwered questions
        answeredQuestions.push(randomNumber)
    }
}

//Restart the quiz
window.onload = function () {
    this.randomQuestion();
    this.answersTracker(); //calling answer tracker
    this.currentQuestionTracker(); //calling current question tracker
    this.startTimer(time); //calling startTimer function
}

//Set up answers tracker elements
function answersTracker() {
    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div")
        div.innerHTML = i + 1; //add number to answer tracker
        answersTrackerContainer.appendChild(div);
    }
}
//Update the answers tracker elements
function updateAnswersTracker(newClass) {
    answersTrackerContainer.children[index - 1].classList.add(newClass)
}

function currentQuestionTracker() {
    updateAnswersTracker("current")
}
//Displays the quiz-over page if quiz is over
function quizOver() {
    document.querySelector(".quiz-over").classList.add("show")
    // correctAnswersSpan.innerHTML = score;
    // totalQuestionsSpan2.innerHTML = 10;
    percentageSpan.innerHTML = Math.round((score / 10) * 100) + "%"
    const ScorePercentage = Math.round((score / 10) * 100);
    if (ScorePercentage > 50) {
        document.querySelector(".box").classList.remove("hide")
    } else {
        document.querySelector(".boxed").classList.remove("hide")
    }

}

function tryAgain() {
    window.location.reload();
}
function home() {
    location.href = "../index.html"
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value

        if (time > 5) {
            document.querySelector(".DisplayTime").style.color = "white"
        }
        if (time == 0) {
            // clearInterval(counter);
            // timeText.textContent = "Time Off";
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
            check(); //Check if selected answer is correct or wrong or no answer
            clearInterval(counter) // clearInterval(counter);
            return time;
        } else {
            time--; //decrement the time value
            // timeText.textContent = "Time Left:";
            if (time < 9) { //if timer is less than 9
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero; //add a 0 before time value
                if (time < 5) {
                    document.querySelector(".DisplayTime").style.color = "red"
                } else {
                    document.querySelector(".DisplayTime").style.color = "white"
                }
            }
        }
    }
}