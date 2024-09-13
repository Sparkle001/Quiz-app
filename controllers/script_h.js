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
    q: 'Who was the first emperor of China?' ,  
    options: ['Qin Shi Huang', 'Chuk Wudi', 'Kublai Khan', 'Genghis Khan'] ,  
    answer: 0 },

    {q: 'What year did the Berlin Wall fall?' ,  
    options: [ '1991','1989', '1987', '1990'] ,  
    answer: 1 },

    {q: 'Who was the British Prime Minister during World War II?' ,  
    options: [ 'Neville Chamberlain','Winston Churchill', 'Margaret Thatcher', 'Clement Attlee'] ,  
    answer: 1 },

    {q: 'What ancient civilization built the Machu Picchu complex?' ,  
    options: [ 'Maya', 'Aztec', 'Inca','Olmec'] ,  
    answer: 2 },

    {q: 'Which battle is considered the turning point of the American Civil War?' ,  
    options: ['Battle of Antietam', 'Battle of Fort Sumter', 'Battle of Appomattox', 'Battle of Gettysburg'] ,  
    answer: 3 },

    {q: 'Who was the first President of South Africa elected in a fully representative democratic election?' ,  
    options: ['Nelson Mandela', 'Desmond Tutu', 'Jacob Zuma', 'Thabo Mbeki'] ,  
    answer: 0 },

    {q: 'Which French king was executed during the French Revolution?' ,  
    options: ['Louis XIV','Louis XVI',  'Napoleon Bonaparte', 'Charles X'] ,  
    answer: 1 },

    {q: 'What year did the United States declare its independence from Britain?' ,  
    options: [ '1783', '1791','1776', '1801'] ,  
    answer: 2 },

    {q: 'Who was the famous queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?' ,  
    options: ['Nefertiti', 'Cleopatra', 'Hatshepsut', 'Tutankhamun'] ,  
    answer: 1 },

    {q: 'Which event started the First World War?' ,  
    options: ['Assassination of Archduke Franz Ferdinand', 'Invasion of Poland', 'Sinking of the Lusitania', 'Zimmermann Telegram'] ,  
    answer: 0 },

    {q: 'Who was the first person to circumnavigate the globe?' ,  
    options: [ 'Christopher Columbus', 'Ferdinand Magellan','James Cook', 'Vasco da Gama'] ,  
    answer: 1 },

    {q: 'Which empire was ruled by Genghis Khan?' ,  
    options: [ 'Ottoman Empire', 'Roman Empire','Mongol Empire', 'Persian Empire'] ,  
    answer: 2 },

    {q: 'Who was the leader of the Soviet Union during World War II?' ,  
    options: [ 'Leon Trotsky', 'Vladimir Lenin', 'Nikita Khrushchev', 'Joseph Stalin'] ,  
    answer: 3 },

    {q: 'In what year did the Titanic sink?' ,  
    options: ['1912', '1905', '1898', '1921'] ,  
    answer: 0 },

    {q: 'Which battle marked the end of Napoleon Bonaparte’s rule?' ,  
    options: ['Battle of Austerlitz', 'Battle of Waterloo', 'Battle of Trafalgar', 'Battle of Borodino'] ,  
    answer: 1 },

    {q: 'Who was the first emperor of Rome?' ,  
    options: ['Julius Caesar', 'Nero', 'Augustus', 'Constantine'] ,  
    answer: 2 },

    {q: 'Which country was the first to grant women the right to vote?' ,  
    options: ['United States', 'Canada', 'United Kingdom', 'New Zealand'] ,  
    answer: 3 },

    {q: 'What was the primary cause of the Hundred Years’ War?' ,  
    options: ['Territorial disputes between England and France', 'Religious differences', 'Succession crisis in the Holy Roman Empire', 'Trade conflicts'] ,  
    answer: 0 },

    {q: 'Which civilization is known for building the Pyramids of Giza?' ,  
    options: ['Babylonians', 'Ancient Egyptians', 'Greeks', 'Romans'] ,  
    answer: 1 },

    {q: 'Who was the leader of the American Civil Rights Movement in the 1960s?' ,  
    options: ['Malcolm X', 'Rosa Parks', 'Martin Luther King Jr.', 'James Baldwin'] ,  
    answer: 2},

    {q: 'Which country was divided into East and West during the Cold War?' ,  
    options: ['Korea', 'Vietnam', 'China', 'Germany'] ,  
    answer: 3},

    {q: 'Which ancient Greek philosopher was the teacher of Alexander the Great?' ,  
    options: ['Aristotle', 'Plato', 'Socrates', 'Pythagoras'] ,  
    answer: 0 },

    {q: 'What was the main goal of the Crusades?' ,  
    options: ['To reclaim the Holy Land from Muslim control', 'To expand trade routes', 'To spread Christianity in Europe', 'To find new territories for colonization'] ,  
    answer: 0},

    {q: 'Who was the first female prime minister of the United Kingdom?' ,  
    options: ['Theresa May', 'Margaret Thatcher', 'Elizabeth II', 'Priti Patel'] ,  
    answer: 1 },

    {q: 'What was the primary cause of the fall of the Western Roman Empire?' ,  
    options: ['Economic decline', 'Political corruption', 'Barbarian invasions', 'Military defeats'] ,  
    answer: 2 },

    {q: 'Which country was the first to use tanks in warfare?' ,  
    options: ['Germany', 'United Kingdom', 'France', 'United States'] ,  
    answer: 1 },

    {q: 'Who was the first emperor of Japan?' ,  
    options: ['Emperor Akihito', 'Emperor Meiji', 'Emperor Jimmu', 'Emperor Hirohito'] ,  
    answer: 2},

    {q: 'Which U.S. president issued the Emancipation Proclamation?' ,  
    options: ['George Washington', 'Thomas Jefferson', 'Andrew Johnson', 'Abraham Lincoln'] ,  
    answer: 3 },

    {q: 'What was the main purpose of the Marshall Plan?' ,  
    options: ['To rebuild Europe after World War II', 'To provide military aid to allies', 'To promote democracy in Asia', 'To contain the spread of communism'] ,  
    answer: 0 },

    {q: 'Which empire was ruled by Suleiman the Magnificent?' ,  
    options: ['Mughal Empire', 'Ottoman Empire', 'Safavid Empire', 'Byzantine Empire'] ,  
    answer: 1},

    {q: 'In which year did the French Revolution begin?' ,  
    options: ['1776', '1812', '1789', '1799'] ,  
    answer: 2 },

    {q: 'Which Asian country was colonized by the Portuguese, Dutch, and British before gaining independence in the 20th century?' ,  
    options: ['Thailand', 'Indonesia', 'India', 'Vietnam'] ,  
    answer: 1 },

    {q: 'What was the main focus of the Enlightenment period?' ,  
    options: ['Reason and individualism', 'Religious reform', 'Colonial expansion', 'Feudal obligations'] ,  
    answer: 0 },

    {q: 'Who was the leader of the Bolshevik Revolution in Russia?' ,  
    options: [ 'Leon Trotsky', 'Joseph Stalin', 'Nikolai Bukharin', 'Vladimir Lenin'] ,  
    answer: 3 },

    {q: 'What year did the U.S. enter World War I?' ,  
    options: ['1917', '1914', '1918', '1915'] ,  
    answer: 0 },

    {q: 'Which ancient civilization built the Parthenon?' ,  
    options: ['Ancient Greeks', 'Romans', 'Egyptians', 'Persians'] ,  
    answer: 0 },

    {q: 'Who was the first emperor of the Roman Empire?' ,  
    options: [ 'Julius Caesar', 'Nero', 'Augustus','Tiberius'] ,  
    answer: 2 },

    {q: 'Which conflict was known as "The Great War" before World War II was named?' ,  
    options: ['World War I', 'The Korean War', 'The Vietnam War', 'The Crimean War'] ,  
    answer: 0 },

    {q: 'What is the largest desert in the world?' ,  
    options: ['Sahara', 'Gobi', 'Kalahari', 'Antarctic Desert'] ,  
    answer: 3 },

    {q: 'Which river is the longest in the world?' ,  
    options: ['Amazon', 'Yangtze', 'Nile', 'Mississippi'] ,  
    answer: 2 },

    {q: 'What is the capital city of Australia?' ,  
    options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'] ,  
    answer: 0 },

    {q: 'Which country is the largest by land area?' ,  
    options: [ 'Canada', 'China', 'Russia','United States'] ,  
    answer: 2 },

    {q: 'Which mountain range separates Europe from Asia?' ,  
    options: ['Ural Mountains', 'Himalayas', 'Andes', 'Rockies'] ,  
    answer: 0 },

    {q: 'What is the smallest country in the world by land area?' ,  
    options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'] ,  
    answer: 0 },

    {q: 'Which ocean is the largest?' ,  
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'] ,  
    answer: 2 },

    {q: "In which Planet is it's day longer than it's year",
    options: ['Mercury', 'Venus', 'Saturn', 'Pluto'],
    answer: 1},

    {q: 'What is the highest mountain peak in the world?' ,  
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'] ,  
    answer: 0 },

    {q: 'Which country has the longest coastline in the world?' ,  
    options: ['Canada', 'Australia', 'Russia', 'United States'] ,  
    answer: 0 },

    {q: 'Which river flows through Egypt and is crucial to its agriculture?' ,  
    options: ['Nile', 'Tigris', 'Euphrates', 'Jordan'] ,  
    answer: 0 },

    {q: 'What is the capital city of Japan?' ,  
    options: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'] ,  
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