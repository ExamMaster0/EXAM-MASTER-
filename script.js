// Timer for Limited Offer
function startOfferTimer() {
    let timerElement = document.getElementById('timer');
    let time = 2 * 60 * 60; // 2 hours in seconds

    function updateTimer() {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        timerElement.textContent = `${hours}:${minutes}:${seconds}`;

        if (time > 0) {
            time--;
        } else {
            timerElement.textContent = "Offer Expired!";
            timerElement.style.color = "#ff6b6b";
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();
}

// Mock Test Questions
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

// Mock Test Functionality
function startMockTest() {
    localStorage.setItem('currentTest', JSON.stringify({
        questions: mockTestQuestions,
        currentQuestion: 0,
        score: 0,
        startTime: Date.now()
    }));
    window.location.href = "test.html";
}

// Payment Integration (Razorpay)
function initializePayment(amount, productName) {
    const options = {
        key: "YOUR_RAZORPAY_KEY_HERE", // Replace with your Razorpay key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "EXAM MASTER",
        description: productName,
        handler: function(response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // Redirect to product/download page
        },
        prefill: {
            name: "Student Name",
            email: "student@example.com",
            contact: "9999999999"
        },
        theme: {
            color: "#667eea"
        }
    };
    
    const rzp = new Razorpay(options);
    rzp.open();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Start offer timer
    startOfferTimer();
    
    // Free test button
    const freeTestBtn = document.querySelector('.free-btn');
    if (freeTestBtn) {
        freeTestBtn.addEventListener('click', startMockTest);
    }
    
    // Premium test button
    const premiumTestBtn = document.querySelector('.premium-btn');
    if (premiumTestBtn) {
        premiumTestBtn.addEventListener('click', function() {
            initializePayment(299, "Premium Mock Test - 100 Questions");
        });
    }
    
    // PDF buttons
    const pdfBtns = document.querySelectorAll('.pdf-btn');
    pdfBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const prices = [199, 179, 249];
            const products = [
                "History Complete Notes PDF",
                "Polity Master Guide PDF", 
                "General Knowledge 2024 PDF"
            ];
            initializePayment(prices[index], products[index]);
        });
    });
    
    // CTA button
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', startMockTest);
    }
});

// Fake Review Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + "+";
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + "+";
            }
        };
        
        updateCounter();
    });
}

// Initialize when page loads
window.onload = function() {
    animateCounters();
};