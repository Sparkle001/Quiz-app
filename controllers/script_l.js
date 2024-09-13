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
    q: 'Who wrote "Pride and Prejudice"?' ,  
    options: ['Jane Austen', 'Charlotte Brontë', 'Emily Brontë', 'Mary Shelley'] ,  
    answer: 0 },

    {q: 'What is the title of the first Harry Potter book?' ,  
    options: ['Harry Potter and the Chamber of Secrets', 'Harry Potter and the Philosophers Stone', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Goblet of Fire'] ,  
    answer: 1},

    {q: 'Who is the author of "1984"?' ,  
    options: ['Aldous Huxley', 'Ray Bradbury', 'George Orwell', 'Isaac Asimov'] ,  
    answer: 2 },

    {q: 'In which novel would you find the character Holden Caulfield?' ,  
    options: ['To Kill a Mockingbird', 'The Great Gatsby', 'Of Mice and Men','The Catcher in the Rye' ] ,  
    answer: 3},

    {q: 'Who wrote "Moby-Dick"?' ,  
    options: ['Mark Twain', 'Herman Melville', 'Nathaniel Hawthorne', 'Edgar Allan Poe'] ,  
    answer: 1 },

    {q: 'Which Shakespeare play features the character Iago?' ,  
    options: ['Hamlet', 'Macbeth', 'Othello', 'King Lear'] ,  
    answer: 2 },

    {q: 'What is the title of the epic poem by Homer that describes the journey of Odysseus?' ,  
    options: ['The Odyssey', 'The Iliad', 'The Aeneid', 'The Argonautica'] ,  
    answer: 0 },

    {q: 'Who wrote "The Road"? ' ,  
    options: ['Cormac McCarthy', 'Don DeLillo', 'Jonathan Franzen', 'Philip Roth'] ,  
    answer: 0 },

    {q: 'What is the name of the fictional African country in "Black Panther"?' ,  
    options: ['Wakanda', 'Zamunda', 'Nambutu', 'Elbonia'] ,  
    answer: 0 },

    {q: 'Who is the author of "Jane Eyre"?' ,  
    options: ['Emily Brontë', 'Charlotte Brontë', 'Louisa May Alcott', 'Mary Shelley'] ,  
    answer: 1 },

    {q: 'Which novel is set during the American Civil War and follows the life of Scarlett O’Hara?' ,  
    options: ['Gone with the Wind', 'The Grapes of Wrath', 'Little Women', 'The Red Badge of Courage'] ,  
    answer: 0 },

    {q: 'Who wrote the "A Song of Ice and Fire" series?' ,  
    options: ['J.R.R. Tolkien', 'C.S. Lewis', 'George R.R. Martin', 'J.K. Rowling'] ,  
    answer: 2 },

    {q: 'Which novel features the characters Elizabeth Bennet and Mr. Darcy?' ,  
    options: ['Emma',' Pride and Prejudice', 'Sense and Sensibility', 'Northanger Abbey'] ,  
    answer: 1 },

    {q: 'What is the setting of "The Hobbit"?' ,  
    options: ['Middle-earth', 'Narnia', 'Hogwarts', 'Gotham'] ,  
    answer: 0 },

    {q: 'Who wrote "Frankenstein"?' ,  
    options: ['Frankenstein', 'H.G. Wells', 'Mary Shelley', 'Robert Louis Stevenson'] ,  
    answer: 2 },

    {q: 'Which novel by Leo Tolstoy is known for its portrayal of Russian society during the Napoleonic era?' ,  
    options: ['Anna Karenina', 'The Kreutzer Sonata', 'War and Peace', 'The Cossacks'] ,  
    answer: 2},

    {q: 'In which novel would you find the character Atticus Finch?' ,  
    options: ['Go Set a Watchman', 'The Catcher in the Rye', 'To Kill a Mockingbird', 'Of Mice and Men'] ,  
    answer: 2 },

    {q: 'Who is the author of "The Great Gatsby"?' ,  
    options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'William Faulkner'] ,  
    answer: 0 },

    {q: 'Which book is considered a classic dystopian novel about a future society where technology controls every aspect of life?' ,  
    options: ['Brave New World', '1984', 'Fahrenheit 451', 'The Handmaid\'s Tale'] ,  
    answer: 0 },

    {q: 'Which novel by J.D. Salinger follows the life of a disaffected teenager in post-World War II New York?' ,  
    options: ['Franny and Zooey', 'The Catcher in the Rye', 'Nine Stories', 'Raise High the Roof Beam, Carpenters'] ,  
    answer: 1 },

    {q: 'Who wrote "The Canterbury Tales"?' ,  
    options: [ 'Dante Alighieri', 'Geoffrey Chaucer','John Milton', 'Edmund Spenser'] ,  
    answer: 1 },

    {q: 'In which book would you find the character Huck Finn?' ,  
    options: ['The Adventures of Huckleberry Finn', 'The Adventures of Tom Sawyer', 'Tales of Huckleberry Finn', 'David Copperfield'] ,  
    answer: 0 },

    {q: 'Which author is known for the series of novels featuring detective Hercule Poirot?' ,  
    options: ['Agatha Christie', 'Arthur Conan Doyle', 'Dashiell Hammett', 'Raymond Chandler'] ,  
    answer: 0 },

    {q: 'Which novel tells the story of a group of boys stranded on an uninhabited island?' ,  
    options: ['The Coral Island', 'Peter Pan', 'Lord of the Flies', 'Treasure Island'] ,  
    answer: 2},

    {q: 'What is the title of the first book in the "Chronicles of Narnia" series?' ,  
    options: ['The Lion, the Witch and the Wardrobe', 'The Magician’s Nephew', 'The Horse and His Boy', 'The Silver Chair'] ,  
    answer: 0 },

    {q: 'Which classic novel by George Orwell explores a dystopian future dominated by totalitarianism?' ,  
    options: ['1984', 'Animal Farm', 'Brave New World', 'Fahrenheit 451'] ,  
    answer: 0 },

    {q: 'Who is the author of "The Catcher in the Rye"?' ,  
    options: ['J.D. Salinger', 'Harper Lee', 'Ernest Hemingway', 'Mark Twain'] ,  
    answer: 0 },

    {q: 'In which novel does the character Jay Gatsby appear?' ,  
    options: ['Tender Is the Night', 'The Great Gatsby', 'This Side of Paradise', 'The Sun Also Rises'] ,  
    answer: 1 },

    {q: 'Which novel by Mary Shelley is considered one of the earliest examples of science fiction?' ,  
    options: ['Frankenstein', 'The Last Man', 'The Fortunes of Perkin Warbeck', 'The Invisible Man'] ,  
    answer: 0 },

    {q: 'Who wrote "Brave New World"?' ,  
    options: ['George Orwell', 'Ray Bradbury', 'Aldous Huxley', 'H.G. Wells'] ,  
    answer: 2},

    {q: 'Which novel features the character Pip, an orphaned boy who receives an unexpected fortune?' ,  
    options: ['Oliver Twist', 'Great Expectations', 'David Copperfield', 'Jane Eyre'] ,  
    answer: 1},

    {q: 'Who wrote "Les Misérables"?' ,  
    options: ['Alexandre Dumas', 'Emile Zola', 'Gustave Flaubert', 'Victor Hugo'] ,  
    answer: 3 },

    {q: 'What is the title of the famous novel by Gabriel García Márquez that tells the story of a century-long family saga?' ,  
    options: ['One Hundred Years of Solitude', 'Love in the Time of Cholera', 'Chronicle of a Death Foretold', 'The Autumn of the Patriarch'] ,  
    answer: 0 },

    {q: 'Which novel by J.R.R. Tolkien is set in Middle-earth and follows the quest to destroy the One Ring?' ,  
    options: [ 'The Hobbit', 'The Silmarillion', 'The Children of Húrin', 'The Lord of the Rings'] ,  
    answer: 3 },

    {q: 'Who is the author of "The Bell Jar"?' ,  
    options: ['Sylvia Plath', 'Margaret Atwood', 'Joan Didion', 'Toni Morrison'] ,  
    answer: 0 },

    {q: 'Which English poet is known for works such as "The Tyger" and "Songs of Innocence and Experience"?' ,  
    options: ['William Blake', 'John Keats', 'Percy Bysshe Shelley', 'Lord Byron'] ,  
    answer: 0},

    {q: 'Which novel begins with the line, "It was the best of times, it was the worst of times"?' ,  
    options: ['Great Expectations', 'Bleak House', 'A Tale of Two Cities', 'David Copperfield'] ,  
    answer: 2},

    {q: 'Who wrote the play "Macbeth"?' ,  
    options: ['William Shakespeare', 'Christopher Marlowe', 'Ben Jonson', 'Thomas Middleton'] ,  
    answer: 0 },

    {q: 'Which novel features the character Holden Caulfield and explores themes of teenage angst and rebellion?' ,  
    options: ['The Catcher in the Rye', 'Franny and Zooey', 'Salinger', 'A Separate Peace'] ,  
    answer: 0 },

    {q: 'Who wrote "Wuthering Heights"?' ,  
    options: [ 'Charlotte Brontë', 'Anne Brontë', 'Mary Shelley', 'Emily Brontë'] ,  
    answer: 3 },

    {q: 'Which novel by Ernest Hemingway tells the story of a disillusioned expatriate living in Paris?' ,  
    options: ['The Sun Also Rises', 'A Farewell to Arms', 'For Whom the Bell Tolls', 'The Old Man and the Sea'] ,  
    answer: 0 },

    {q: 'Who is the author of "Beloved"?' ,  
    options: [ 'Alice Walker', 'Zora Neale Hurston', 'Toni Morrison','Maya Angelou'] ,  
    answer: 2 },

    {q: 'Which novel features the character Mr. Darcy and is set in Regency-era England?' ,  
    options: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma', 'Northanger Abbey'] ,  
    answer: 0 },

    {q: 'What is the title of the book by J.D. Salinger that features a protagonist named Holden Caulfield?' ,  
    options: ['The Catcher in the Rye', 'Franny and Zooey', 'Nine Stories', 'Raise High the Roof Beam, Carpenters'] ,  
    answer: 0 },

    {q: 'Which play by William Shakespeare features the characters of Prospero and Ariel?' ,  
    options: ['The Tempest', 'A Midsummer Night\'s Dream', 'Twelfth Night', 'The Winter\'s Tale'] ,  
    answer: 0 },

    {q: 'Who wrote "Middlemarch"?' ,  
    options: ['George Eliot', 'Charles Dickens', 'Thomas Hardy', 'Henry James'] ,  
    answer: 0 },

    {q: 'Which novel by Aldous Huxley explores a dystopian future dominated by technological and societal control?' ,  
    options: ['Brave New World', '1984', 'Fahrenheit 451', 'The Handmaid\'s Tale'] ,  
    answer: 0 },

    {q: 'Who is the author of the epic poem "Paradise Lost"?' ,  
    options: ['William Blake', 'John Bunyan', 'Edmund Spenser','John Milton'] ,  
    answer: 3 },

    {q: 'Which novel tells the story of the mysterious and wealthy Jay Gatsby and his obsession with Daisy Buchanan?' ,  
    options: ['The Great Gatsby', 'Tender Is the Night', 'This Side of Paradise', 'The Beautiful and Damned'] ,  
    answer: 0 },

    {q: 'Who wrote "The Picture of Dorian Gray"?' ,  
    options: ['H.G. Wells', 'James Joyce', 'Oscar Wilde', 'D.H. Lawrence'] ,  
    answer: 2},

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