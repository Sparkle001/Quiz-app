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
    q: '“Who said: I think, therefore I am.”' ,  
    options: ['René Descartes', 'Immanuel Kant', 'Friedrich Nietzsche', 'John Locke'] ,  
    answer: 0 },

    {q: '“Who said: The only thing we have to fear is fear itself.”' ,  
    options: [ 'Winston Churchill', 'Franklin D. Roosevelt','John F. Kennedy', 'Theodore Roosevelt'] ,  
    answer: 1 },

    {q: '“Who said: To be, or not to be, that is the question.”' ,  
    options: ['Christopher Marlowe', 'William Shakespeare', 'Ben Jonson', 'John Milton'] ,  
    answer: 1 },

    {q: '“Who said: In the end, we will remember not the words of our enemies, but the silence of our friends.”' ,  
    options: ['Malcolm X', 'Nelson Mandela', 'Martin Luther King Jr.', 'Gandhi'] ,  
    answer: 2 },

    {q: '“Who said: The unexamined life is not worth living.”' ,  
    options: [ 'Plato', 'Aristotle', 'Epicurus','Socrates'] ,  
    answer: 3 },

    {q: '“Who said: Give me liberty, or give me death!”' ,  
    options: ['Patrick Henry', 'Thomas Jefferson', 'Benjamin Franklin', 'George Washington'] ,  
    answer: 0 },

    {q: '“Who said: I have a dream.”' ,  
    options: ['Martin Luther King Jr.', 'Malcolm X', 'Rosa Parks', 'Harriet Tubman'] ,  
    answer: 0 },

    {q: '“Who said: To infinity and beyond!”' ,  
    options: ['Woody', 'Buzz Lightyear', 'Mr. Potato Head', 'Slinky Dog'] ,  
    answer: 1 },

    {q: '“Who said: The only way to do great work is to love what you do.”' ,  
    options: [ 'Bill Gates', 'Elon Musk','Steve Jobs', 'Mark Zuckerberg'] ,  
    answer: 2 },

    {q: '“Who said: That’s one small step for man, one giant leap for mankind.”' ,  
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Michael Collins', 'Yuri Gagarin'] ,  
    answer: 1 },

    {q: '“Who said: We are what we repeatedly do. Excellence, then, is not an act, but a habit.”' ,  
    options: ['Plato', 'Socrates', 'Marcus Aurelius','Aristotle' ] ,  
    answer: 3 },

    {q: '“Who said: Imagination is more important than knowledge.”' ,  
    options: ['Isaac Newton', 'Stephen Hawking', 'Albert Einstein', 'Niels Bohr'] ,  
    answer: 2 },

    {q: '“Who said: The pen is mightier than the sword.”' ,  
    options: [ 'William Shakespeare', 'Edward Bulwer-Lytton','Julius Caesar', 'John Locke'] ,  
    answer: 1 },

    {q: '“Who said: To thine own self be true.”' ,  
    options: ['William Shakespeare', 'Christopher Marlowe', 'Ben Jonson', 'John Bunyan'] ,  
    answer: 0 },

    {q: '“Who said: An eye for an eye only ends up making the whole world blind.”' ,  
    options: ['Mahatma Gandhi', 'Martin Luther King Jr.', 'Nelson Mandela', 'Dalai Lama'] ,  
    answer: 0 },

    {q: '“Who said: The greatest glory in living lies not in never falling, but in rising every time we fall.”' ,  
    options: ['Winston Churchill', 'Franklin D. Roosevelt', 'Nelson Mandela', 'John F. Kennedy'] ,  
    answer: 2 },

    {q: '“Who said: We must learn to live together as brothers or perish together as fools.”' ,  
    options: ['Malcolm X', 'Rosa Parks', 'Martin Luther King Jr.', 'Harriet Tubman'] ,  
    answer: 2 },

    {q: '“Who said: The journey of a thousand miles begins with one step.”' ,  
    options: [ 'Confucius', 'Sun Tzu', 'Zhuangzi','Lao Tzu'] ,  
    answer: 3 },

    {q: '“Who said: The future belongs to those who believe in the beauty of their dreams.”' ,  
    options: ['Eleanor Roosevelt', 'Maya Angelou', 'Helen Keller', 'Margaret Mead'] ,  
    answer: 0 },

    {q: '“Who said: Not all those who wander are lost.”' ,  
    options: [ 'C.S. Lewis', 'J.R.R. Tolkien','J.K. Rowling', 'George R.R. Martin'] ,  
    answer: 1 },

    {q: '“Who said: The only limit to our realization of tomorrow is our doubts of today.”' ,  
    options: ['Franklin D. Roosevelt', 'Winston Churchill', 'John F. Kennedy', 'Theodore Roosevelt'] ,  
    answer: 0},

    {q: '“Who said: The best way to predict the future is to invent it.”' ,  
    options: [ 'Steve Jobs', 'Bill Gates', 'Alan Kay','Elon Musk'] ,  
    answer:2 },

    {q: '“Who said: Life is what happens when you’re busy making other plans.”' ,  
    options: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'] ,  
    answer: 0 },

    {q: '“Who said: In three words I can sum up everything I’ve learned about life: it goes on.”' ,  
    options: ['Robert Frost', 'Emily Dickinson', 'Walt Whitman', 'Langston Hughes'] ,  
    answer: 0 },

    {q: '“Who said: Success is not final, failure is not fatal: It is the courage to continue that counts.”' ,  
    options: [ 'Franklin D. Roosevelt', 'Winston Churchill','John F. Kennedy', 'Theodore Roosevelt'] ,  
    answer: 1 },

    {q: '“Who said: I would rather be a little nobody, then to be an evil somebody.”' ,  
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'James Madison'] ,  
    answer: 2 },

    {q: '“Who said: Happiness is not something ready made. It comes from your own actions.”' ,  
    options: ['Dalai Lama', 'Buddha', 'Gandhi', 'Mother Teresa'] ,  
    answer: 0 },

    {q: '“Who said: The unexamined life is not worth living.”' ,  
    options: ['Socrates', 'Plato', 'Aristotle', 'Confucius'] ,  
    answer: 0 },

    {q: '“Who said: Do not go gentle into that good night. Rage, rage against the dying of the light.”' ,  
    options: ['Dylan Thomas', 'W.B. Yeats', 'T.S. Eliot', 'Robert Frost'] ,  
    answer: 'Dylan Thomas' },

    {q: '“Who said: The measure of intelligence is the ability to change.”' ,  
    options: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Niels Bohr'] ,  
    answer: 1},

    {q: '“Who said: The greatest wealth is to live content with little.”' ,  
    options: ['Plato', 'Socrates', 'Aristotle', 'Epicurus'] ,  
    answer: 3 },

    {q: '“Who said: You must be the change you wish to see in the world.”' ,  
    options: ['Mahatma Gandhi', 'Nelson Mandela', 'Martin Luther King Jr.', 'Mother Teresa'] ,  
    answer: 0 },

    {q: '“Who said: You only live once, but if you do it right, once is enough.”' ,  
    options: [ 'Marilyn Monroe', 'Audrey Hepburn', 'Mae West','Grace Kelly'] ,  
    answer: 2 },

    {q: '“Who said: The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”' ,  
    options: ['Winston Churchill', 'Franklin D. Roosevelt', 'John F. Kennedy', 'Theodore Roosevelt'] ,  
    answer: 0 },

    {q: '“Who said: All the world’s a stage, and all the men and women merely players.”' ,  
    options: ['William Shakespeare', 'Christopher Marlowe', 'Ben Jonson', 'John Milton'] ,  
    answer: 0 },

    {q: '“Who said: You miss 100% of the shots you don’t take.”' ,  
    options: [ 'Michael Jordan','Wayne Gretzky', 'LeBron James', 'Kobe Bryant'] ,  
    answer: 1},

    {q: '“Who said: Everyone thinks forgiveness is a lovely idea until he has something to forgive”' ,  
    options: ['Albert Einstein', 'Michael Jordan', 'LeBron James', 'CS Lewis'] ,  
    answer: 0 },

    {q: '“Who said: To love and be loved is to feel the sun from both sides.”' ,  
    options: ['David Viscott', 'Erich Fromm', 'Rainer Maria Rilke', 'Khalil Gibran'] ,  
    answer: 0 },

    {q: '“Who said: The best revenge is massive success.”' ,  
    options: ['Donald Trump', 'Frank Sinatra', 'Winston Churchill', 'Oscar Wilde'] ,  
    answer: 1 },

    {q: '“Who said: Not everything that is faced can be changed, but nothing can be changed until it is faced.”' ,  
    options: ['Martin Luther King Jr.', 'Malcolm X', 'James Baldwin', 'Toni Morrison'] ,  
    answer: 2 },

    {q: '“Who said: In the midst of chaos, there is also opportunity.”' ,  
    options: ['Sun Tzu', 'Mao Zedong', 'Winston Churchill', 'Abraham Lincoln'] ,  
    answer: 0 },

    {q: '“Who said: We don’t see things as they are, we see them as we are.”' ,  
    options: ['Anaïs Nin', 'Eleanor Roosevelt', 'Marcel Proust', 'Jean-Paul Sartre'] ,  
    answer: 0 },

    {q: '“Who said: Life isn’t about finding yourself. Life is about creating yourself.”' ,  
    options: ['Oscar Wilde', 'Arthur Miller', 'George Bernard Shaw', 'William Faulkner'] ,  
    answer: 2 },

    {q: '“Who said: The best way to find yourself is to lose yourself in the service of others.”' ,  
    options: ['Mahatma Gandhi', 'Nelson Mandela', 'Mother Teresa', 'Eleanor Roosevelt'] ,  
    answer: 0 },

    {q: '“Who said: A person who never made a mistake never tried anything new.”' ,  
    options: ['Albert Einstein', 'Thomas Edison', 'Isaac Newton', 'Henry Ford'] ,  
    answer: 0 },

    {q: '“Who said: You can’t help everyone, but everyone can help someone.”' ,  
    options: ['Ronald Reagan', 'Mother Teresa', 'Mahatma Gandhi', 'Eleanor Roosevelt'] ,  
    answer: 1 },

    {q: '“Who said: The only impossible journey is the one you never begin.”' ,  
    options: [ 'Mark Twain', 'Wayne Dyer', 'Eleanor Roosevelt', 'Tony Robbins'] ,  
    answer: 3 },

    {q: '“Who said: Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.”' ,  
    options: ['Albert Schweitzer', 'Franklin D. Roosevelt', 'Abraham Lincoln', 'Winston Churchill'] ,  
    answer: 0 },

    {q: '“Who said: You must do the things you think you cannot do.”' ,  
    options: [ 'Helen Keller', 'Maya Angelou', 'Marian Wright Edelman','Eleanor Roosevelt'] ,  
    answer: 'Eleanor Roosevelt' },

    {q: '“It does not do to dwell on dreams and forget to live.”' ,  
    options: ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'J.M. Barrie'] ,  
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