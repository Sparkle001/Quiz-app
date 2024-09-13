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
q: 'Which Old Testament prophet had a vision of a valley of dry bones?' ,  
options: ['Ezekiel', 'Isaiah', 'Jeremiah', 'Daniel'] ,  
answer: 0 },

{q: 'In which book of the Bible do you find the story of Samson and Delilah?' ,  
options: [ 'Joshua', 'Judges','1 Kings', 'Exodus'] ,  
answer: 1 },

{q: 'Which New Testament book is written to "Theophilus"?' ,  
options: [ 'Acts', '1 Corinthians','Luke', 'Revelation'] ,  
answer: 2},

{q: 'What is the longest chapter in the Bible?' ,  
options: [ 'Psalm 23', 'Isaiah 53', 'Genesis 1', 'Psalm 119'] ,  
answer: 3 },

{q: 'Who was the high priest of Israel when Samuel was a boy?' ,  
options: ['Eli', 'Aaron', 'Phinehas', 'Joshua'] ,  
answer: 0 },

{q: 'Who was the first person to see the resurrected Jesus?' ,  
options: [ 'Peter','Mary Magdalene', 'John', 'Thomas'] ,  
answer: 1},

{q: 'In which book of the Bible is the story of Balaam’s donkey found?' ,  
options: [ 'Exodus', 'Deuteronomy', 'Numbers','Leviticus'] ,  
answer: 2 },

{q: 'Which Old Testament book is largely a collection of love poetry?' ,  
options: [ 'Proverbs', 'Psalms', 'Ecclesiastes', 'Song of Solomon'] ,  
answer: 3 },

{q: 'What was the name of the king who threw Daniel into the lion’s den?' ,  
options: ['Darius', 'Nebuchadnezzar', 'Cyrus', 'Artaxerxes'] ,  
answer: 0 },

{q: 'Who was the prophet that confronted King David after his sin with Bathsheba?' ,  
options: [ 'Samuel','Nathan', 'Gad', 'Elijah'] ,  
answer: 1 },

{q: 'Which king of Israel was known for his great wisdom?' ,  
options: [ 'David', 'Saul','Solomon', 'Hezekiah'] ,  
answer: 2 },

{q: 'Who interpreted King Nebuchadnezzar’s dream of a statue made of various metals?' ,  
options: [ 'Ezekiel', 'Jeremiah', 'Joseph', 'Daniel'] ,  
answer: 3 },

{q: 'In the Book of Revelation, how many churches are addressed in the letters?' ,  
options: ['7', '5', '12', '10'] ,  
answer: 0 },

{q: 'Who was the Roman governor who sentenced Jesus to be crucified?' ,  
options: [ 'Herod','Pontius Pilate', 'Felix', 'Caiaphas Pilate'] ,  
answer: 1 },

{q: 'Which New Testament epistle focuses on faith without works being dead?' ,  
options: [ 'Romans', 'Galatians', 'James','Hebrews'] ,  
answer: 2 },

{q: 'Which of the following books is not part of the Pentateuch?' ,  
options: [ 'Leviticus', 'Exodus', 'Deuteronomy', 'Joshua'] ,  
answer: 3 },

{q: 'Who was the mother of Samuel, the prophet?' ,  
options: ['Hannah', 'Rachel', 'Leah', 'Deborah'] ,  
answer: 0 },

{q: 'In the parable of the Prodigal Son, what animal did the son end up feeding before returning home?' ,  
options: [ 'Sheep', 'Pigs','Cows', 'Goats'] ,  
answer: 1 },

{q: 'Who was the wife of King Ahab, known for her wickedness and idolatry?' ,  
options: [ 'Bathsheba', 'Delilah','Jezebel', 'Michal'] ,  
answer: 2 },

{q: 'In the New Testament, who is referred to as the "beloved disciple"?' ,  
options: [ 'Peter', 'James', 'Andrew','John'] ,  
answer: 3 },

{q: 'What was the name of Moses’ sister?' ,  
options: ['Miriam', 'Rebekah', 'Rachel', 'Leah'] ,  
answer: 0 },

{q: 'In the book of Acts, who had a vision of a sheet filled with unclean animals?' ,  
options: [ 'Paul','Peter', 'Stephen', 'Philip'] ,  
answer: 1 },

{q: 'Which apostle doubted the resurrection of Jesus until he saw Him with his own eyes?' ,  
options: [ 'Peter', 'James', 'Thomas','Andrew'] ,  
answer: 2 },

{q: 'In the Old Testament, who was thrown into a fiery furnace for refusing to worship a golden idol?' ,  
options: [ 'Daniel', 'Elijah', 'Ezekiel', 'Shadrach, Meshach, and Abednego'] ,  
answer: 3 },

{q: 'Which tribe of Israel served as priests?' ,  
options: ['Levi', 'Judah', 'Benjamin', 'Ephraim'] ,  
answer: 0 },

{q: 'What is the name of the woman who hid the Israelite spies in Jericho?' ,  
options: ['Deborah','Rahab', 'Ruth', 'Esther'] ,  
answer: 1 },

{q: 'What was Paul’s name before his conversion on the road to Damascus?' ,  
options: [ 'Simon', 'Joseph','Saul', 'Barnabas'] ,  
answer: 2 },

{q: 'Who was the father of King Solomon?' ,  
options: [ 'Saul', 'Samuel', 'Nathan','David'] ,  
answer: 3 },

{q: 'Which Old Testament prophet was taken up to heaven in a chariot of fire?' ,  
options: ['Elijah', 'Elisha', 'Isaiah', 'Jeremiah'] ,  
answer: 0 },

{q: 'What gift did King Solomon ask God to give him?' ,  
options: ['Wealth', 'Wisdom', 'Power', 'Long life'] ,  
answer: 1 },

{q: 'Which New Testament book contains the fruit of the Spirit?' ,  
options: ['Ephesians', 'Romans', 'Galatians', 'Colossians'] ,  
answer: 2 },

{q: 'In the Book of Revelation, what is the name of the city where John’s vision took place?' ,  
options: [ 'Jerusalem', 'Babylon', 'Antioch', 'Patmos'] ,  
answer: 3 },

{q: 'Who was the first king of Israel?' ,  
options: [ 'David', 'Saul','Solomon', 'Rehoboam'] ,  
answer: 1 },

{q: 'Which Old Testament figure wrestled with an angel and had his name changed to Israel?' ,  
options: ['Jacob', 'Isaac', 'Abraham', 'Joseph'] ,  
answer: 0 },

{q: 'In which Gospel do we find the Beatitudes?' ,  
options: ['Matthew', 'Mark', 'Luke', 'John'] ,  
answer: 0 },

{q: 'What was the profession of the apostle Matthew before following Jesus?' ,  
options: ['Tax collector', 'Fisherman', 'Carpenter', 'Tentmaker'] ,  
answer: 0 },

{q: 'In the Book of Exodus, what did Moses strike to bring forth water?' ,  
options: ['The ground', 'A tree', 'A rock', 'A mountain'] ,  
answer: 2 },

{q: 'What type of tree did Zacchaeus climb to see Jesus?' ,  
options: ['Sycamore tree', 'Olive tree', 'Cedar tree', 'Fig tree'] ,  
answer: 0 },

{q: 'In the book of Acts, which couple was struck dead for lying to the Holy Spirit about their offering?' ,  
options: ['Ananias and Sapphira', 'Aquila and Priscilla', 'Simon and Anna', 'Paul and Phoebe'] ,  
answer: 0 },

{q: 'Who succeeded Moses as the leader of the Israelites?' ,  
options: [ 'Aaron', 'Caleb','Joshua', 'Gideon'] ,  
answer: 2 },

{q: 'What did King Solomon propose to split in half to determine the real mother?' ,  
options: ['A baby', 'A piece of land', 'A crown', 'A sword'] ,  
answer:0 },

{q: 'Who is known as the "weeping prophet"?' ,  
options: [ 'Ezekiel', 'Isaiah', 'Hosea', 'Jeremiah'] ,  
answer: 3 },

{q: 'How many plagues did God send upon Egypt?' ,  
options: ['10', '7', '12', '5'] ,  
answer: 0 },

{q: 'In which Gospel is the Sermon on the Mount recorded?' ,  
options: ['Matthew', 'Mark', 'Luke', 'John'] ,  
answer: 0 },

{q: 'Who was the Roman centurion who recognized Jesus as the Son of God at His crucifixion?' ,  
options: ['The centurion at the cross', 'Pontius Pilate', 'Cornelius', 'Theophilus'] ,  
answer: 0},

{q: 'Which apostle was exiled to the island of Patmos?' ,  
options: [ 'Peter', 'Paul', 'John','James'] ,  
answer: 2},

{q: 'In which Old Testament book do we find the story of David and Goliath?' ,  
options: ['1 Samuel', '2 Samuel', '1 Kings', 'Judges'] ,  
answer: 0 },

{q: 'Who was the first Christian martyr recorded in the New Testament?' ,  
options: ['Stephen', 'James', 'Peter', 'Paul'] ,  
answer: 0 },

{q: 'Which New Testament book is addressed to "the elect lady and her children"?' ,  
options: ['2 John', '1 Peter', 'Jude', '3 John'] ,  
answer: 0 },

{q: 'In the parable of the talents, how many talents did the servant who buried his talent in the ground receive?' ,  
options: ['1', '3', '5', '10'] ,  
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