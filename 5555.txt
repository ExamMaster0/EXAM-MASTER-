// Mock Test Questions (Same as in script.js)
const mockTestQuestions = [
    {
        id: 1,
        question: "India's first war of independence started in which year?",
        options: ["1857", "1947", "1757", "1905"],
        correct: 0,
        explanation: "The Indian Rebellion of 1857 began on May 10, 1857, as a mutiny of sepoys of the British East India Company's army."
    },
    {
        id: 2,
        question: "Who was the first President of India?",
        options: ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel", "B.R. Ambedkar"],
        correct: 1,
        explanation: "Dr. Rajendra Prasad served as the first President of India from 1950 to 1962."
    },
    {
        id: 3,
        question: "The Constitution of India was adopted on?",
        options: ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"],
        correct: 2,
        explanation: "The Constitution was adopted by the Constituent Assembly on 26 November 1949 and came into effect on 26 January 1950."
    }
];

let currentTest = {
    questions: mockTestQuestions,
    currentQuestion: 0,
    userAnswers: new Array(mockTestQuestions.length).fill(null),
    startTime: Date.now()
};

// Timer Function
function startTestTimer() {
    let time = 15 * 60; // 15 minutes
    const timerElement = document.getElementById('testTimer');

    function updateTimer() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        timerElement.textContent = `${minutes}:${seconds}`;

        if (time > 0) {
            time--;
        } else {
            timerElement.textContent = "Time's Up!";
            timerElement.style.background = "#ff6b6b";
            submitTest();
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();
}

// Display Question
function displayQuestion() {
    const question = currentTest.questions[currentTest.currentQuestion];
    const questionElement = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    
    questionElement.textContent = `Q${currentTest.currentQuestion + 1}: ${question.question}`;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (currentTest.userAnswers[currentTest.currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    
    updateNavigation();
}

// Select Option
function selectOption(optionIndex) {
    currentTest.userAnswers[currentTest.currentQuestion] = optionIndex;
    displayQuestion();
}

// Navigation
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.style.display = currentTest.currentQuestion === 0 ? 'none' : 'block';
    nextBtn.style.display = currentTest.currentQuestion === currentTest.questions.length - 1 ? 'none' : 'block';
    submitBtn.style.display = currentTest.currentQuestion === currentTest.questions.length - 1 ? 'block' : 'none';
}

function nextQuestion() {
    if (currentTest.currentQuestion < currentTest.questions.length - 1) {
        currentTest.currentQuestion++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentTest.currentQuestion > 0) {
        currentTest.currentQuestion--;
        displayQuestion();
    }
}

// Submit Test and Show Results
function submitTest() {
    let score = 0;
    let results = [];
    
    currentTest.questions.forEach((question, index) => {
        const userAnswer = currentTest.userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) score++;
        
        results.push({
            question: question.question,
            userAnswer: question.options[userAnswer],
            correctAnswer: question.options[question.correct],
            explanation: question.explanation,
            isCorrect: isCorrect
        });
    });
    
    const percentage = (score / currentTest.questions.length) * 100;
    
    // Store results in localStorage
    localStorage.setItem('testResults', JSON.stringify({
        score: score,
        total: currentTest.questions.length,
        percentage: percentage,
        results: results,
        timeTaken: Math.floor((Date.now() - currentTest.startTime) / 1000)
    }));
    
    // Redirect to results page
    window.location.href = "results.html";
}

// Initialize Test
document.addEventListener('DOMContentLoaded', function() {
    startTestTimer();
    displayQuestion();
    
    document.getElementById('prevBtn').onclick = prevQuestion;
    document.getElementById('nextBtn').onclick = nextQuestion;
    document.getElementById('submitBtn').onclick = submitTest;
});