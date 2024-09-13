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
    
    q: 'Which of the following particles is responsible for the strong nuclear force in an atomic nucleus?' ,  
    options: [ 'Photon', 'Electron','Gluon', 'Neutron'] ,  
    answer: 2 },

    {q: 'What is the name of the process where water molecules move from an area of low solute concentration to high solute concentration across a semi-permeable membrane?' ,  
    options: ['Osmosis', 'Diffusion', 'Active transport', 'Endocytosis'] ,  
    answer: 0 },

    {q: 'In Einstein’s famous equation E = mc², what does "c" represent?' ,  
    options: ['Speed of light', 'Speed of sound', 'Energy constant', 'Gravitational constant'] ,  
    answer: 0 },

    {q: 'Which of these is not a type of quark?' ,  
    options: ['Charm', 'Strange', 'Top', 'Glint'] ,  
    answer: 3 },

    {q: 'Which principle explains why a spinning ice skater can increase their rotational speed by pulling in their arms?' ,  
    options: ['Conservation of angular momentum', 'Conservation of energy', 'Bernoulli’s principle', 'Heisenberg’s uncertainty principle'] ,  
    answer: 0 },

    {q: 'Which law states that the total entropy of an isolated system can never decrease over time?' ,  
    options: ['Second law of thermodynamics', 'First law of thermodynamics', 'Law of conservation of mass', 'Hooke’s law'] ,  
    answer: 0 },

    {q: 'Which mathematical concept is used to describe the shape of planetary orbits around the Sun?' ,  
    options: ['Parabolas', 'Ellipses','Hyperbolas', 'Circles'] ,  
    answer: 1 },

    {q: 'In chemistry, what is the hybridization of carbon atoms in ethene (C2H4)?' ,  
    options: ['sp²', 'sp', 'sp³', 'dsp²'] ,  
    answer: 0 },

    {q: 'What does Heisenberg’s uncertainty principle state about the properties of particles?' ,  
    options: ['You cannot simultaneously know the exact position and momentum of a particle', 'Particles can exist in two places at once', 'Every particle has a counterpart', 'The speed of a particle is proportional to its energy'] ,  
    answer: 0 },

    {q: 'What is the name of the scientist who first formulated the laws of motion and universal gravitation?' ,  
    options: [ 'Albert Einstein', 'Galileo Galilei','Isaac Newton', 'James Clerk Maxwell'] ,  
    answer: 2 },

    {q: 'What is the most abundant gas in Earth’s atmosphere?' ,  
    options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Helium'] ,  
    answer: 0 },

    {q: 'Which organelle is responsible for photosynthesis in plants?' ,  
    options: ['Chloroplast', 'Mitochondria', 'Nucleus', 'Endoplasmic reticulum'] ,  
    answer: 0 },

    {q: 'What is the acceleration due to gravity on Earth?' ,  
    options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '7.5 m/s²'] ,  
    answer: 0 },

    {q: 'What part of the atom contains protons and neutrons?' ,  
    options: [ 'Electron shell','Nucleus', 'Orbital', 'Valence shell'] ,  
    answer: 1},


    {q: 'Which vitamin is produced when human skin is exposed to sunlight?' ,  
    options: [ 'Vitamin A', 'Vitamin C', 'Vitamin D','Vitamin B12'] ,  
    answer: 2 },


    {q: 'What is the process by which plants convert sunlight into energy?' ,  
    options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Digestion'] ,  
    answer: 0 },


    {q: 'What is the most common element in the universe?' ,  
    options: [ 'Oxygen', 'Helium', 'Carbon', 'Hydrogen'] ,  
    answer: 3 },


    {q: 'What is the measure of the amount of matter in an object?' ,  
    options: ['Mass', 'Weight', 'Volume', 'Density'] ,  
    answer: 0 },


    {q: 'What does DNA stand for?' ,  
    options: ['Deoxyribonucleic Acid', 'Dinucleic Acid', 'Dicarboxylic Acid', 'Deoxygenated Acid'] ,  
    answer: 0 },


    {q: 'What is the hardest natural substance on Earth?' ,  
    options: ['Quartz', 'Granite', 'Gold', 'Diamond'] ,  
    answer: 3 },


    {q: 'In mathematics, what is the value of Pi (π) rounded to two decimal places?' ,  
    options: ['3.14', '2.71', '1.61', '3.16'] ,  
    answer: 0 },


    {q: 'What is the largest planet in our solar system?' ,  
    options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'] ,  
    answer: 0 },


    {q: 'What organ is responsible for filtering blood in the human body?' ,  
    options: [ 'Liver', 'Heart','Kidney','Lungs'] ,  
    answer: 2 },


    {q: 'What type of bond involves the sharing of electron pairs between atoms?' ,  
    options: [ 'Ionic bond', 'Hydrogen bond','Covalent bond', 'Van der Waals bond'] ,  
    answer: 2 },


    {q: 'Which state of matter has a definite volume but no definite shape?' ,  
    options: ['Liquid', 'Solid', 'Gas', 'Plasma'] ,  
    answer: 0 },


    {q: 'What is the unit of electrical resistance?' ,  
    options: ['Ohm', 'Volt', 'Ampere', 'Watt'] ,  
    answer: 0 },


    {q: 'Which blood cells help fight infections in the body?' ,  
    options: ['White blood cells', 'Red blood cells', 'Platelets', 'Plasma cells'] ,  
    answer: 0},


    {q: 'What is the chemical formula for table salt?' ,  
    options: ['KCl','NaCl', 'NaOH', 'HCl'] ,  
    answer: 1 },


    {q: 'What is the pH level of pure water?' ,  
    options: ['7', '5', '9', '3'] ,  
    answer: 0 },


    {q: 'Which gas is commonly used in balloons because it is lighter than air?' ,  
    options: ['Helium', 'Oxygen', 'Hydrogen', 'Nitrogen'] ,  
    answer: 0 },


    {q: 'What is the process by which a solid changes directly into a gas?' ,  
    options: ['Sublimation', 'Condensation', 'Evaporation', 'Deposition'] ,  
    answer: 0 },


    {q: 'Which planet is closest to the Sun?' ,  
    options:0 },


    {q: 'What organ in the human body is primarily responsible for detoxification?' ,  
    options: ['Kidney', 'Heart', 'Lungs','Liver'] ,  
    answer: 3 },


    {q: 'Which part of the human brain controls voluntary movements?' ,  
    options: [ 'Cerebellum', 'Brainstem', 'Hypothalamus', 'Cerebrum'] ,  
    answer: 3 },


    {q: 'What type of wave is light?' ,  
    options: ['Electromagnetic', 'Sound', 'Mechanical', 'Transverse'] ,  
    answer: 0 },


    {q: 'What is the primary gas found in the Sun?' ,  
    options: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'] ,  
    answer: 0 },


    {q: 'In chemistry, what is the name for a substance that speeds up a chemical reaction without being consumed?' ,  
    options: [ 'Enzyme','Catalyst', 'Reactant', 'Inhibitor'] ,  
    answer: 1 },


    {

    q: 'In which part of the human body would you find the femur?' ,  
    options: ['Leg', 'Arm', 'Skull', 'Hand'] ,  
    answer: 0 },


    {q: 'Which chemical element is represented by the symbol "Fe"?' ,  
    options: ['Iron', 'Fermium', 'Francium', 'Fluorine'] ,  
    answer: 0},


    {q: 'What is the most abundant metal in Earth’s crust?' ,  
    options: [ 'Iron', 'Magnesium', 'Aluminum','Copper'] ,  
    answer: 2 },


    {q: 'What is the smallest prime number?' ,  
    options: ['2', '1', '3', '5'] ,  
    answer: 0 },


    {q: 'What does RNA stand for?' ,  
    options: ['Ribonucleic Acid', 'Ribosomal Nucleic Acid', 'Radiated Nucleic Acid', 'Reticulated Nucleic Acid'] ,  
    answer: 0 },


    {q: 'What is the main gas that animals exhale?' ,  
    options: [ 'Oxygen', 'Nitrogen','Carbon dioxide', 'Hydrogen'] ,  
    answer: 2 },


    {q: 'What type of star is the Sun?' ,  
    options: ['Yellow dwarf', 'Red giant', 'White dwarf', 'Supernova'] ,  
    answer: 0 },


    {q: 'Which bone is the longest in the human body?' ,  
    options: ['Femur', 'Humerus', 'Tibia', 'Radius'] ,  
    answer: 0 },


    {q: 'What is the chemical formula for glucose?' ,  
    options: [ 'C6H6','C6H12O6', 'CH4', 'CO2'] ,  
    answer: 1 },


    {q: 'What is the freezing point of water in Fahrenheit?' ,  
    options: ['32°F', '0°F', '100°F', '50°F'] ,  
    answer: 0 },


    {q: 'Which blood type is considered the universal donor?' ,  
    options: [ 'AB positive','O negative', 'A positive', 'B negative'] ,  
    answer: 1 },


    {q: 'Which planet has the most moons in our solar system?' ,  
    options: [ 'Jupiter', 'Uranus', 'Neptune', 'Saturn'] ,  
    answer: 3 },


    {q: 'What part of the human eye controls the amount of light that enters?' ,  
    options: ['Pupil', 'Cornea', 'Retina', 'Lens'] ,  
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