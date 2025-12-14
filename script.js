const questions = [
    // --- EASY (1-10) ---
    {
        question: "1. Which sentence is grammatically correct?",
        options: ["She don't like coffee.", "She doesn't like coffee.", "She not like coffee.", "She no likes coffee."],
        answer: 1,
        explanation: "'She' is a third-person singular subject, so it requires 'doesn't' (does not) for negation in the present simple tense."
    },
    {
        question: "2. What is the past tense of 'buy'?",
        options: ["Buyed", "Bought", "Bringed", "Brought"],
        answer: 1,
        explanation: "'Buy' is an irregular verb. Its past form is 'bought'. 'Brought' is the past tense of 'bring'."
    },
    {
        question: "3. Choose the correct synonym for 'Happy'.",
        options: ["Sad", "Angry", "Joyful", "Bored"],
        answer: 2,
        explanation: "'Joyful' means feeling or expressing great pleasure and happiness, making it a synonym for 'Hatppy'."
    },
    {
        question: "4. I have been living here ____ 2010.",
        options: ["since", "for", "in", "at"],
        answer: 0,
        explanation: "We use 'since' with the Present Perfect Continuous tense to indicate a starting point in time (2010)."
    },
    {
        question: "5. They ____ to the beach yesterday.",
        options: ["go", "goes", "gone", "went"],
        answer: 3,
        explanation: "The sentence uses 'yesterday', which indicates the Past Simple tense. The past form of 'go' is 'went'."
    },
    {
        question: "6. She is the ____ student in the class.",
        options: ["smart", "smarter", "smartest", "more smart"],
        answer: 2,
        explanation: "Superlative adjectives are used to compare three or more things. The superlative form of 'smart' is 'smartest'."
    },
    {
        question: "7. If it rains, we ____ stay home.",
        options: ["will", "would", "are", "have"],
        answer: 0,
        explanation: "This is a First Conditional sentence (If + Present Simple, ... will + infinitive), describing a real possibility in the future."
    },
    {
        question: "8. Can you ____ me a favor?",
        options: ["make", "do", "give", "take"],
        answer: 1,
        explanation: " The correct collocation is to 'do a favor'. We don't say 'make a favor'."
    },
    {
        question: "9. There isn't ____ milk left in the fridge.",
        options: ["some", "many", "any", "no"],
        answer: 2,
        explanation: "We use 'any' in negative sentences and questions with uncountable nouns like 'milk'."
    },
    {
        question: "10. He is interested ____ learning Thai.",
        options: ["on", "at", "in", "for"],
        answer: 2,
        explanation: "The adjective 'interested' is always followed by the preposition 'in' (interested in doing something)."
    },

    // --- INTERMEDIATE (11-20) ---
    {
        question: "11. By the time we arrive, the movie ____.",
        options: ["will start", "will be starting", "will have started", "starts"],
        answer: 2,
        explanation: "The Future Perfect tense ('will have started') is used to describe an action that will be completed before a specific time in the future."
    },
    {
        question: "12. Neither the teacher nor the students ____ in the classroom.",
        options: ["is", "are", "was", "be"],
        answer: 1,
        explanation: "When using 'neither...nor', the verb agrees with the subject closest to it. Here, 'students' is plural, so we use 'are'."
    },
    {
        question: "13. I wish I ____ harder for the exam.",
        options: ["study", "studied", "have studied", "had studied"],
        answer: 3,
        explanation: "We use 'wish' + Past Perfect ('had studied') to express regret about a past situation."
    },
    {
        question: "14. The man ____ car was stolen called the police.",
        options: ["who", "whom", "whose", "which"],
        answer: 2,
        explanation: "'Whose' is a relative pronoun used to indicate possession (the man's car)."
    },
    {
        question: "15. You'd better ____ a doctor if you don't feel well.",
        options: ["see", "to see", "seeing", "saw"],
        answer: 0,
        explanation: "'Had better' behaves like a modal verb and is always followed by the bare infinitive (verb without 'to')."
    },
    {
        question: "16. Despite ____ tired, he continued working.",
        options: ["he was", "of being", "being", "to be"],
        answer: 2,
        explanation: "'Despite' is a preposition and is followed by a noun, pronoun, or gerund (-ing form). 'Being' is the correct gerund here."
    },
    {
        question: "17. It's high time we ____ home.",
        options: ["go", "went", "Gone", "are going"],
        answer: 1,
        explanation: "After 'It's high time', we use the Past Simple to imply that something should have already been done."
    },
    {
        question: "18. Unless you ____ hard, you won't pass.",
        options: ["study", "don't study", "studied", "will study"],
        answer: 0,
        explanation: "'Unless' means 'if...not'. It is followed by a positive verb in the present tense to refer to the future."
    },
    {
        question: "19. The meeting has been put ____ until next week.",
        options: ["out", "off", "away", "up"],
        answer: 1,
        explanation: "'Put off' is a phrasal verb meaning to postpone or delay."
    },
    {
        question: "20. Would you mind ____ the window?",
        options: ["open", "to open", "opening", "opened"],
        answer: 2,
        explanation: "'Would you mind' is always followed by a gerund (-ing form)."
    },

    // --- ADVANCED (21-30) ---
    {
        question: "21. Choose the word that best completes the sentence: The politician's speech was so ____ that the audience was left confused.",
        options: ["lucid", "ambiguous", "coherent", "explicit"],
        answer: 1,
        explanation: "'Ambiguous' means open to more than one interpretation or having a double meaning, leading to confusion."
    },
    {
        question: "22. Identify the error: 'Hardly had he entered the room than the lights went out.'",
        options: ["Hardly had", "entered", "than", "went out"],
        answer: 2,
        explanation: "The correct structure is 'Hardly had... when', not 'than'. 'No sooner... than' is the other pairing."
    },
    {
        question: "23. The phrase 'turn a blind eye' means to:",
        options: ["Have poor vision", "Ignore something intentionally", "Stare at something", "Be confused"],
        answer: 1,
        explanation: "This is an idiom meaning to pretend not to notice something bad or illegal."
    },
    {
        question: "24. Which word is a synonym for 'Ephemeral'?",
        options: ["Lasting", "Transient", "Eternal", "Solid"],
        answer: 1,
        explanation: "'Ephemeral' means lasting for a very short time. 'Transient' implies the same fleeting quality."
    },
    {
        question: "25. ____ that the proposal was accepted, we began the project immediately.",
        options: ["Given", "Giving", "To give", "Gave"],
        answer: 0,
        explanation: "'Given that' is a conjunction meaning 'taking into account that' or 'assuming that'."
    },
    {
        question: "26. The manager was accused of ____ funds from the company accounts.",
        options: ["embezzling", "reimbursing", "allocating", "subsidizing"],
        answer: 0,
        explanation: "'Embezzling' refers to stealing or misappropriating money placed in one's trust or belonging to the organization one works for."
    },
    {
        question: "27. Had I known about the traffic, I ____ earlier.",
        options: ["left", "would leave", "would have left", "had left"],
        answer: 2,
        explanation: "This is a Third Conditional structure (Had I known... I would have...), used for impossible past conditions."
    },
    {
        question: "28. The concept of 'Ubiquitous' implies being:",
        options: ["Rare", "Everywhere", "Unique", "Hidden"],
        answer: 1,
        explanation: "'Ubiquitous' means present, appearing, or found everywhere."
    },
    {
        question: "29. Which sentence uses the subjunctive mood correctly?",
        options: ["I was there, I would help.", "If I were you, I would accept the offer.", "I wish I am rich.", "It is important that he is on time."],
        answer: 1,
        explanation: "'If I were you' is the standard subjunctive form for hypothetical situations in the present."
    },
    {
        question: "30. The dichotomy between his public persona and private life was ____.",
        options: ["startling", "mundane", "irrelevant", "consistent"],
        answer: 0,
        explanation: "'Dichotomy' implies a contrast between two things. 'Startling' (surprising) fits well to describe a notable contrast."
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null); // Store user answers

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen'); // New

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const reviewBtn = document.getElementById('review-btn'); // New
const backToResultBtn = document.getElementById('back-to-result-btn'); // New

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progress = document.getElementById('progress');
const questionCount = document.getElementById('question-count');

const finalScore = document.getElementById('final-score');
const feedbackText = document.getElementById('feedback-text');
const totalQuestionsSpan = document.querySelector('.score-circle .total');
const reviewContainer = document.getElementById('review-container'); // New


const timerDisplay = document.getElementById('timer');

let timerInterval;
const TIME_LIMIT = 15 * 60; // 15 minutes in seconds
let timeLeft = TIME_LIMIT;

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => {
    // Reset state
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    timeLeft = TIME_LIMIT;
    resultScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    startQuiz();
});

prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);

// New Event Listeners
reviewBtn.addEventListener('click', showReview);
backToResultBtn.addEventListener('click', () => {
    reviewScreen.classList.remove('active');
    resultScreen.classList.add('active');
});

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    totalQuestionsSpan.textContent = `/ ${questions.length}`;
    loadQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay(); // Show initial time immediately

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz(); // Renamed showResults to finishQuiz to be clearer
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft <= 60) { // Last minute warning
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    showResults();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCount.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;

    // Update progress bar
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progress.style.width = `${progressPercent}%`;

    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;

        // Restore previous selection if exists
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }

        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    updateNavigationButtons();
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;

    // Visual feedback for selection
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    // Check if an answer is selected
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Please select an answer before proceeding.");
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = "Finish";
    } else {
        nextBtn.textContent = "Next";
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    let score = 0;
    userAnswers.forEach((ans, index) => {
        if (ans === questions[index].answer) {
            score++;
        }
    });

    finalScore.textContent = score;

    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        feedbackText.textContent = "Perfect! You are a true English scholar! 🏆";
    } else if (percentage >= 80) {
        feedbackText.textContent = "Excellent work! Scholarship material! 👏";
    } else if (percentage >= 60) {
        feedbackText.textContent = "Good job! Keep practicing to reach the top. 😊";
    } else {
        feedbackText.textContent = "Keep learning! Consistency is key. 💪";
    }
}

function showReview() {
    resultScreen.classList.remove('active');
    reviewScreen.classList.add('active');
    reviewContainer.innerHTML = '';

    questions.forEach((q, index) => {
        const userAns = userAnswers[index];
        const isCorrect = userAns === q.answer;

        const item = document.createElement('div');
        item.classList.add('review-item');

        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            let className = 'review-option';

            if (optIndex === q.answer) {
                className += ' correct';
            } else if (optIndex === userAns && !isCorrect) {
                className += ' wrong';
            }

            optionsHtml += `<div class="${className}">${opt}</div>`;
        });

        item.innerHTML = `
            <div class="review-question">${q.question}</div>
            <div class="review-options">
                ${optionsHtml}
            </div>
            <div class="explanation-box">
                <h4>Explanation</h4>
                <p>${q.explanation}</p>
            </div>
        `;

        reviewContainer.appendChild(item);
    });
}
