<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam MASTER - Premium Exam Preparation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --accent: #7209b7;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4cc9f0;
            --text: #333;
        }

        body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: var(--light);
            overflow-x: hidden;
            line-height: 1.6;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Styles */
        header {
            background: rgba(26, 26, 46, 0.9);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            display: flex;
            align-items: center;
        }

        .logo i {
            color: var(--success);
            margin-right: 10px;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 25px;
        }

        nav ul li a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        nav ul li a:hover {
            color: var(--success);
        }

        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--success);
            transition: width 0.3s;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        .login-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
        }

        .login-btn:hover {
            background: var(--secondary);
            transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
            padding: 160px 0 100px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
            opacity: 0.1;
            z-index: -1;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            background: linear-gradient(to right, #4cc9f0, #4361ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: fadeIn 1s ease;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            color: #b8b8b8;
            animation: fadeIn 1.5s ease;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
            animation: fadeIn 2s ease;
        }

        .btn {
            padding: 14px 32px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn i {
            margin-right: 8px;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background: var(--secondary);
            transform: translateY(-5px);
        }

        .btn-secondary {
            background: var(--accent);
            color: white;
        }

        .btn-secondary:hover {
            background: #5a08a1;
            transform: translateY(-5px);
        }

        /* Stats Section */
        .stats {
            padding: 80px 0;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            text-align: center;
        }

        .stat-item {
            padding: 30px;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: transform 0.3s;
        }

        .stat-item:hover {
            transform: translateY(-10px);
        }

        .stat-number {
            font-size: 3.5rem;
            font-weight: 700;
            color: var(--success);
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 1.2rem;
            color: #b8b8b8;
        }

        /* Mock Tests Section */
        .mocks-section {
            padding: 100px 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }

        .section-title h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: white;
        }

        .section-title p {
            color: #b8b8b8;
            max-width: 600px;
            margin: 0 auto;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
        }

        .exam-info {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .exam-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .exam-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            transition: all 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .exam-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--primary);
        }

        .exam-icon {
            font-size: 2.5rem;
            color: var(--success);
            margin-bottom: 15px;
        }

        .exam-name {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: white;
        }

        .exam-price {
            font-size: 1.1rem;
            color: var(--success);
            margin-bottom: 20px;
            font-weight: 600;
        }

        .unlock-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
        }

        .unlock-btn:hover {
            background: var(--secondary);
            transform: translateY(-3px);
        }

        /* PDF Store Section */
        .pdf-section {
            padding: 100px 0;
            background: rgba(255, 255, 255, 0.05);
        }

        .pdf-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .pdf-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            transition: all 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pdf-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent);
        }

        .pdf-card h3 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: white;
            display: flex;
            align-items: center;
        }

        .pdf-card h3 i {
            margin-right: 10px;
            color: var(--success);
        }

        .pdf-list {
            list-style: none;
        }

        .pdf-list li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pdf-list li:last-child {
            border-bottom: none;
        }

        .pdf-name {
            display: flex;
            align-items: center;
        }

        .pdf-name i {
            margin-right: 10px;
            color: var(--primary);
        }

        .pdf-price {
            background: var(--accent);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        /* Reviews Section */
        .reviews-section {
            padding: 100px 0;
        }

        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .review-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .review-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .review-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .review-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            margin-right: 15px;
        }

        .review-info h4 {
            color: white;
            margin-bottom: 5px;
        }

        .review-stars {
            color: gold;
            margin-bottom: 5px;
        }

        .review-date {
            font-size: 0.8rem;
            color: #b8b8b8;
        }

        .review-text {
            color: #b8b8b8;
            font-style: italic;
        }

        /* Footer */
        footer {
            background: rgba(0, 0, 0, 0.5);
            padding: 40px 0 20px;
            text-align: center;
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .footer-logo {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
        }

        .footer-links {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        .footer-links a {
            color: #b8b8b8;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: var(--success);
        }

        .copyright {
            color: #b8b8b8;
            font-size: 0.9rem;
            margin-top: 20px;
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s, transform 0.6s;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
            }

            nav ul {
                margin-top: 15px;
                flex-wrap: wrap;
                justify-content: center;
            }

            nav ul li {
                margin: 5px 10px;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 300px;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-graduation-cap"></i>
                    Exam MASTER
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Week Tests</a></li>
                        <li><a href="#">PDF Store</a></li>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><button class="login-btn">Login</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Empower your preparation. Learn smart. Score high.</h1>
            <p>Access high-quality PDFs and real exam-style mock tests designed to help you master competitive exams at an affordable cost.</p>
            <div class="cta-buttons">
                <a href="#" class="btn btn-primary">
                    <i class="fas fa-play-circle"></i> Start Mock Test ₹19
                </a>
                <a href="#" class="btn btn-secondary">
                    <i class="fas fa-shopping-cart"></i> Buy PDF ₹39
                </a>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item fade-in">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">Mock Tests</div>
                </div>
                <div class="stat-item fade-in">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Study PDFs</div>
                </div>
                <div class="stat-item fade-in">
                    <div class="stat-number">1000k+</div>
                    <div class="stat-label">Students</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mock Tests Section -->
    <section class="mocks-section">
        <div class="container">
            <div class="section-title">
                <h2>Attempt Real Exam-Style Mocks</h2>
                <p>Each mock has 100 MCQs | 120 Minutes | Instant Score</p>
            </div>
            
            <div class="exam-info fade-in">
                <p>Practice with our extensive collection of mock tests designed by experts to simulate real exam conditions.</p>
            </div>
            
            <div class="exam-grid">
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-university"></i>
                    </div>
                    <div class="exam-name">JKSSB Mock</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn">Unlock Now</button>
                </div>
                
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="exam-name">SSC Mock</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn">Unlock Now</button>
                </div>
                
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-train"></i>
                    </div>
                    <div class="exam-name">Railway Mock</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn">Unlock Now</button>
                </div>
                
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <div class="exam-name">Banking Mock</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn">Unlock Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- PDF Store Section -->
    <section class="pdf-section">
        <div class="container">
            <div class="section-title">
                <h2>PDF Store</h2>
                <p>Comprehensive study materials for all competitive exams</p>
            </div>
            
            <div class="pdf-grid">
                <div class="pdf-card fade-in">
                    <h3><i class="fas fa-book"></i> Available PDFs</h3>
                    <ul class="pdf-list">
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Quantitative Aptitude Guide
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Reasoning Practice Sets
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> General Knowledge 2024
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> English Language Mastery
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> History Guide
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Political Science
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Computer Fundamentals
                            </div>
                            <div class="pdf-price">₹39</div>
                        </li>
                    </ul>
                </div>
                
                <div class="pdf-card fade-in">
                    <h3><i class="fas fa-history"></i> History</h3>
                    <ul class="pdf-list">
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-shopping-cart"></i> JKSSB PDF - Purchased
                            </div>
                            <div class="pdf-price">Completed</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-eye"></i> SSC Guide - Viewed
                            </div>
                            <div class="pdf-price">In Progress</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-download"></i> Maths Formulas - Downloaded
                            </div>
                            <div class="pdf-price">Completed</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-bookmark"></i> Current Affairs - Bookmarked
                            </div>
                            <div class="pdf-price">Saved</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-star"></i> History Notes - Rated
                            </div>
                            <div class="pdf-price">5 Stars</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
        <div class="container">
            <div class="section-title">
                <h2>What Our Students Say</h2>
                <p>Join thousands of successful students who aced their exams with Exam MASTER</p>
            </div>
            
            <div class="reviews-grid">
                <div class="review-card fade-in">
                    <div class="review-header">
                        <div class="review-avatar">RS</div>
                        <div class="review-info">
                            <h4>Rahul Sharma</h4>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="review-date">2 weeks ago</div>
                        </div>
                    </div>
                    <p class="review-text">"The mock tests are incredibly similar to the actual exam. I cleared SSC CGL in my first attempt thanks to Exam MASTER!"</p>
                </div>
                
                <div class="review-card fade-in">
                    <div class="review-header">
                        <div class="review-avatar">PK</div>
                        <div class="review-info">
                            <h4>Priya Kumar</h4>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="review-date">1 month ago</div>
                        </div>
                    </div>
                    <p class="review-text">"The PDFs are comprehensive and well-structured. The history notes helped me score 45/50 in the history section!"</p>
                </div>
                
                <div class="review-card fade-in">
                    <div class="review-header">
                        <div class="review-avatar">AS</div>
                        <div class="review-info">
                            <h4>Ankit Singh</h4>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="review-date">3 weeks ago</div>
                        </div>
                    </div>
                    <p class="review-text">"The platform is user-friendly and the content is top-notch. The quantitative aptitude PDF is a game-changer!"</p>
                </div>
                
                <div class="review-card fade-in">
                    <div class="review-header">
                        <div class="review-avatar">NM</div>
                        <div class="review-info">
                            <h4>Neha Mehta</h4>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="review-date">2 months ago</div>
                        </div>
                    </div>
                    <p class="review-text">"I've tried many platforms, but Exam MASTER stands out. The railway mock tests are incredibly accurate and helpful."</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">Exam MASTER</div>
                <div class="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Mock Tests</a>
                    <a href="#">PDF Store</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <p class="copyright">© 2024 Exam MASTER. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Fade-in animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Initial check
            fadeInOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', fadeInOnScroll);
            
            // Login button functionality
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.addEventListener('click', function() {
                alert('Redirecting to login page...');
            });
            
            // Unlock buttons functionality
            const unlockButtons = document.querySelectorAll('.unlock-btn');
            unlockButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const examName = this.closest('.exam-card').querySelector('.exam-name').textContent;
                    alert(`Processing payment of ₹19 for ${examName}`);
                });
            });
        });
    </script>
</body>
</html># EXAM-MASTER-
