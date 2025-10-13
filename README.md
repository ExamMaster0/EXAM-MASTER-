<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam MASTER - Premium Exam Preparation Platform</title>
    <meta name="description" content="Access high-quality PDFs and real exam-style mock tests designed to help you master competitive exams at an affordable cost.">
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
            --gray: #6c757d;
        }

        html {
            scroll-behavior: smooth;
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
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }

        .header-scrolled {
            padding: 10px 0;
            background: rgba(26, 26, 46, 0.98);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            color: white;
            font-size: 1.2rem;
        }

        .logo-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
        }

        .logo-text span {
            color: var(--success);
        }

        nav {
            display: flex;
            align-items: center;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 25px;
        }

        .nav-links li a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        .nav-links li a:hover {
            color: var(--success);
        }

        .nav-links li a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--success);
            transition: width 0.3s;
        }

        .nav-links li a:hover::after {
            width: 100%;
        }

        .auth-buttons {
            display: flex;
            align-items: center;
            margin-left: 30px;
        }

        .login-btn, .signup-btn {
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
        }

        .login-btn {
            background: transparent;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            margin-right: 10px;
        }

        .login-btn:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .signup-btn {
            background: var(--primary);
            color: white;
            border: none;
        }

        .signup-btn:hover {
            background: var(--secondary);
            transform: translateY(-2px);
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background: white;
            margin: 3px 0;
            transition: 0.3s;
        }

        /* Hero Section */
        .hero {
            padding: 180px 0 100px;
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

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            background: linear-gradient(to right, #4cc9f0, #4361ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: fadeIn 1s ease;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.2rem;
            margin: 0 auto 30px;
            color: #b8b8b8;
            animation: fadeIn 1.5s ease;
            max-width: 600px;
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

        .exam-details {
            margin-bottom: 15px;
            color: #b8b8b8;
            font-size: 0.9rem;
        }

        .exam-subjects {
            margin-bottom: 15px;
            color: #b8b8b8;
            font-size: 0.85rem;
            font-style: italic;
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
            padding: 60px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-bottom: 40px;
        }

        .footer-column h3 {
            color: white;
            margin-bottom: 20px;
            font-size: 1.2rem;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: #b8b8b8;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: var(--success);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .copyright {
            color: #b8b8b8;
            font-size: 0.9rem;
        }

        .footer-legal {
            display: flex;
            gap: 20px;
        }

        .footer-legal a {
            color: #b8b8b8;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s;
        }

        .footer-legal a:hover {
            color: var(--success);
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            width: 90%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .modal h2 {
            margin-bottom: 20px;
            color: white;
        }

        .modal input {
            width: 100%;
            padding: 12px 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
        }

        .modal input::placeholder {
            color: #b8b8b8;
        }

        .modal-buttons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .modal-btn {
            flex: 1;
            padding: 12px;
            border-radius: 8px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .modal-btn-primary {
            background: var(--primary);
            color: white;
        }

        .modal-btn-primary:hover {
            background: var(--secondary);
        }

        .modal-btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }

        .modal-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Dashboard Styles */
        .dashboard-section {
            padding: 120px 0 100px;
            min-height: 80vh;
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }

        .dashboard-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .dashboard-card h3 {
            color: white;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }

        .dashboard-card h3 i {
            margin-right: 10px;
            color: var(--success);
        }

        .dashboard-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
        }

        .dashboard-stat {
            text-align: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
        }

        .dashboard-stat-number {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--success);
            margin-bottom: 5px;
        }

        .dashboard-stat-label {
            font-size: 0.9rem;
            color: #b8b8b8;
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
        @media (max-width: 992px) {
            .footer-content {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .nav-links, .auth-buttons {
                display: none;
            }

            .hamburger {
                display: flex;
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

            .footer-content {
                grid-template-columns: 1fr;
            }

            .footer-bottom {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
        }

        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: rgba(26, 26, 46, 0.98);
            backdrop-filter: blur(10px);
            z-index: 1001;
            transition: right 0.3s ease;
            padding: 80px 30px 30px;
            overflow-y: auto;
        }

        .mobile-menu.active {
            right: 0;
        }

        .mobile-nav-links {
            list-style: none;
            margin-bottom: 30px;
        }

        .mobile-nav-links li {
            margin-bottom: 15px;
        }

        .mobile-nav-links a {
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-auth-buttons {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .mobile-auth-buttons .login-btn, 
        .mobile-auth-buttons .signup-btn {
            text-align: center;
            width: 100%;
        }

        .close-menu {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Overlay */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }

        .overlay.active {
            opacity: 1;
            visibility: visible;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="header">
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="logo-text">Exam <span>MASTER</span></div>
                </a>
                <nav>
                    <ul class="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#mocks">Mock Tests</a></li>
                        <li><a href="#pdfs">PDF Store</a></li>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div class="auth-buttons">
                        <a href="#" class="login-btn" id="openLogin">Login</a>
                        <a href="#" class="signup-btn" id="openSignup">Sign Up</a>
                    </div>
                </nav>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <button class="close-menu" id="closeMenu">
            <i class="fas fa-times"></i>
        </button>
        <ul class="mobile-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#mocks">Mock Tests</a></li>
            <li><a href="#pdfs">PDF Store</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="mobile-auth-buttons">
            <a href="#" class="login-btn" id="openLoginMobile">Login</a>
            <a href="#" class="signup-btn" id="openSignupMobile">Sign Up</a>
        </div>
    </div>

    <!-- Overlay -->
    <div class="overlay" id="overlay"></div>

    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <h2>Login to Your Account</h2>
            <input type="email" placeholder="Email Address" id="loginEmail">
            <input type="password" placeholder="Password" id="loginPassword">
            <div class="modal-buttons">
                <button class="modal-btn modal-btn-secondary" id="closeLogin">Cancel</button>
                <button class="modal-btn modal-btn-primary" id="submitLogin">Login</button>
            </div>
        </div>
    </div>

    <!-- Signup Modal -->
    <div class="modal" id="signupModal">
        <div class="modal-content">
            <h2>Create an Account</h2>
            <input type="text" placeholder="Full Name" id="signupName">
            <input type="email" placeholder="Email Address" id="signupEmail">
            <input type="password" placeholder="Password" id="signupPassword">
            <div class="modal-buttons">
                <button class="modal-btn modal-btn-secondary" id="closeSignup">Cancel</button>
                <button class="modal-btn modal-btn-primary" id="submitSignup">Sign Up</button>
            </div>
        </div>
    </div>

    <!-- Payment Modal -->
    <div class="modal" id="paymentModal">
        <div class="modal-content">
            <h2>Complete Your Purchase</h2>
            <p id="paymentItem" style="margin-bottom: 20px; color: #b8b8b8;">Item: </p>
            <p id="paymentPrice" style="margin-bottom: 20px; color: var(--success); font-weight: 600;">Price: </p>
            <input type="text" placeholder="Card Number" id="cardNumber">
            <input type="text" placeholder="Expiry Date (MM/YY)" id="expiryDate">
            <input type="text" placeholder="CVV" id="cvv">
            <div class="modal-buttons">
                <button class="modal-btn modal-btn-secondary" id="closePayment">Cancel</button>
                <button class="modal-btn modal-btn-primary" id="submitPayment">Pay Now</button>
            </div>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Empower your preparation.<br>Learn smart. Score high.</h1>
                <p>Access high-quality PDFs and real exam-style mock tests designed to help you master competitive exams at an affordable cost.</p>
                <div class="cta-buttons">
                    <a href="#mocks" class="btn btn-primary">
                        <i class="fas fa-play-circle"></i> Start Mock Test ₹19
                    </a>
                    <a href="#pdfs" class="btn btn-secondary">
                        <i class="fas fa-shopping-cart"></i> Buy PDF ₹39
                    </a>
                </div>
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
                    <div class="stat-number">100k+</div>
                    <div class="stat-label">Students</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mock Tests Section -->
    <section class="mocks-section" id="mocks">
        <div class="container">
            <div class="section-title">
                <h2>Attempt Real Exam-Style Mocks</h2>
                <p>Each mock has 100 MCQs | 120 Minutes | Instant Score</p>
            </div>
            
            <div class="exam-info fade-in">
                <p>Practice with our extensive collection of mock tests designed by experts to simulate real exam conditions. Each test includes detailed explanations and performance analytics.</p>
            </div>
            
            <div class="exam-grid">
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-university"></i>
                    </div>
                    <div class="exam-name">JKSSB Mock</div>
                    <div class="exam-details">Difficulty: Medium | Subjects: 5</div>
                    <div class="exam-subjects">Subjects: General Knowledge, Mathematics, Reasoning, English, Computer</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="JKSSB Mock" data-price="19">Unlock Now</button>
                </div>
                
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="exam-name">SSC Mock</div>
                    <div class="exam-details">Difficulty: Hard | Subjects: 4</div>
                    <div class="exam-subjects">Subjects: Quantitative Aptitude, English, Reasoning, General Awareness</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="SSC Mock" data-price="19">Unlock Now</button>
                </div>
                
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-train"></i>
                    </div>
                    <div class="exam-name">Railway Mock</div>
                    <div class="exam-details">Difficulty: Medium | Subjects: 6</div>
                    <div class="exam-subjects">Subjects: Mathematics, General Intelligence, General Science, Current Affairs</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="Railway Mock" data-price="19">Unlock Now</button>
                </div>
                
                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <div class="exam-name">Banking Mock</div>
                    <div class="exam-details">Difficulty: Hard | Subjects: 5</div>
                    <div class="exam-subjects">Subjects: Reasoning, Quantitative Aptitude, English, General Awareness, Computer</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="Banking Mock" data-price="19">Unlock Now</button>
                </div>

                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="exam-name">UPSC Prelims Mock</div>
                    <div class="exam-details">Difficulty: Very Hard | Subjects: 7</div>
                    <div class="exam-subjects">Subjects: History, Geography, Polity, Economy, Science, Environment, Current Affairs</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="UPSC Prelims Mock" data-price="19">Unlock Now</button>
                </div>

                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-flask"></i>
                    </div>
                    <div class="exam-name">Science & Tech Mock</div>
                    <div class="exam-details">Difficulty: Medium | Subjects: 4</div>
                    <div class="exam-subjects">Subjects: Physics, Chemistry, Biology, Computer Science</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="Science & Tech Mock" data-price="19">Unlock Now</button>
                </div>

                <div class="exam-card fade-in">
                    <div class="exam-icon">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <div class="exam-name">Data Interpretation Mock</div>
                    <div class="exam-details">Difficulty: Hard | Subjects: 3</div>
                    <div class="exam-subjects">Subjects: Data Interpretation, Logical Reasoning, Quantitative Analysis</div>
                    <div class="exam-price">Pay ₹19 to Unlock Test</div>
                    <button class="unlock-btn" data-item="Data Interpretation Mock" data-price="19">Unlock Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- PDF Store Section -->
    <section class="pdf-section" id="pdfs">
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
                            <button class="pdf-price buy-pdf" data-item="Quantitative Aptitude Guide" data-price="39">₹39</button>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Reasoning Practice Sets
                            </div>
                            <button class="pdf-price buy-pdf" data-item="Reasoning Practice Sets" data-price="39">₹39</button>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> General Knowledge 2024
                            </div>
                            <button class="pdf-price buy-pdf" data-item="General Knowledge 2024" data-price="39">₹39</button>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> English Language Mastery
                            </div>
                            <button class="pdf-price buy-pdf" data-item="English Language Mastery" data-price="39">₹39</button>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> History Guide
                            </div>
                            <button class="pdf-price buy-pdf" data-item="History Guide" data-price="39">₹39</button>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Political Science
                            </div>
                            <button class="pdf-price buy-pdf" data-item="Political Science" data-price="39">₹39</button>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Computer Fundamentals
                            </div>
                            <button class="pdf-price buy-pdf" data-item="Computer Fundamentals" data-price="39">₹39</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Dashboard Section -->
    <section class="dashboard-section" id="dashboard">
        <div class="container">
            <div class="section-title">
                <h2>My Dashboard</h2>
                <p>Track your progress and access your purchased content</p>
            </div>
            
            <div class="dashboard-grid">
                <div class="dashboard-card fade-in">
                    <h3><i class="fas fa-chart-line"></i> Progress Overview</h3>
                    <div class="dashboard-stats">
                        <div class="dashboard-stat">
                            <div class="dashboard-stat-number">5</div>
                            <div class="dashboard-stat-label">Tests Taken</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="dashboard-stat-number">72%</div>
                            <div class="dashboard-stat-label">Average Score</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="dashboard-stat-number">12</div>
                            <div class="dashboard-stat-label">PDFs Purchased</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="dashboard-stat-number">15</div>
                            <div class="dashboard-stat-label">Study Hours</div>
                        </div>
                    </div>
                </div>
                
                <div class="dashboard-card fade-in">
                    <h3><i class="fas fa-book-open"></i> My Purchases</h3>
                    <ul class="pdf-list">
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Quantitative Aptitude Guide
                            </div>
                            <div class="pdf-price">Download</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> Reasoning Practice Sets
                            </div>
                            <div class="pdf-price">Download</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-file-pdf"></i> General Knowledge 2024
                            </div>
                            <div class="pdf-price">Download</div>
                        </li>
                    </ul>
                </div>
                
                <div class="dashboard-card fade-in">
                    <h3><i class="fas fa-clock"></i> Recent Activity</h3>
                    <ul class="pdf-list">
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-play-circle"></i> Completed SSC Mock Test
                            </div>
                            <div class="pdf-price">Score: 85%</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-shopping-cart"></i> Purchased History Guide
                            </div>
                            <div class="pdf-price">2 days ago</div>
                        </li>
                        <li>
                            <div class="pdf-name">
                                <i class="fas fa-bookmark"></i> Bookmarked Current Affairs
                            </div>
                            <div class="pdf-price">1 week ago</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section" id="reviews">
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
                            <div class="review-date">Cleared SSC CGL - 2 weeks ago</div>
                        </div>
                    </div>
                    <p class="review-text">"The mock tests are incredibly similar to the actual exam. I cleared SSC CGL in my first attempt thanks to Exam MASTER! The detailed explanations helped me understand my weak areas."</p>
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
                            <div class="review-date">JKSSB Topper - 1 month ago</div>
                        </div>
                    </div>
                    <p class="review-text">"The PDFs are comprehensive and well-structured. The history notes helped me score 45/50 in the history section! The affordable pricing makes quality education accessible to everyone."</p>
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
                            <div class="review-date">Railway Exam - 3 weeks ago</div>
                        </div>
                    </div>
                    <p class="review-text">"The platform is user-friendly and the content is top-notch. The quantitative aptitude PDF is a game-changer! The instant score feature after mock tests helped me track my progress effectively."</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Exam MASTER</h3>
                    <p style="color: #b8b8b8; margin-bottom: 20px;">Your trusted partner in competitive exam preparation.</p>
                    <div style="display: flex; gap: 15px;">
                        <a href="https://t.me/ExamMaster0" style="color: #b8b8b8; font-size: 1.2rem;"><i class="fab fa-telegram"></i></a>
                        <a href="#" style="color: #b8b8b8; font-size: 1.2rem;"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="color: #b8b8b8; font-size: 1.2rem;"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#mocks">Mock Tests</a></li>
                        <li><a href="#pdfs">PDF Store</a></li>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Resources</h3>
                    <ul class="footer-links">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Exam Calendar</a></li>
                        <li><a href="#">Syllabus</a></li>
                        <li><a href="#">Previous Papers</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-envelope" style="margin-right: 10px;"></i> dar596020@gmail.com</li>
                        <li><i class="fab fa-telegram" style="margin-right: 10px;"></i> t.me/ExamMaster0</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">© 2024 Exam MASTER. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Refund Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // User authentication state
        let isLoggedIn = false;
        let currentUser = null;

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Mobile menu functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        const overlay = document.getElementById('overlay');

        hamburger.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Modal functionality
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const paymentModal = document.getElementById('paymentModal');

        // Open login modal
        document.getElementById('openLogin').addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });

        document.getElementById('openLoginMobile').addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Open signup modal
        document.getElementById('openSignup').addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.display = 'flex';
        });

        document.getElementById('openSignupMobile').addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.display = 'flex';
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modals
        document.getElementById('closeLogin').addEventListener('click', function() {
            loginModal.style.display = 'none';
        });

        document.getElementById('closeSignup').addEventListener('click', function() {
            signupModal.style.display = 'none';
        });

        document.getElementById('closePayment').addEventListener('click', function() {
            paymentModal.style.display = 'none';
        });

        // Login functionality
        document.getElementById('submitLogin').addEventListener('click', function() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (email && password) {
                isLoggedIn = true;
                currentUser = email;
                loginModal.style.display = 'none';
                alert('Login successful! Welcome back to Exam MASTER.');
                updateAuthUI();
            } else {
                alert('Please enter both email and password.');
            }
        });

        // Signup functionality
        document.getElementById('submitSignup').addEventListener('click', function() {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            
            if (name && email && password) {
                isLoggedIn = true;
                currentUser = email;
                signupModal.style.display = 'none';
                alert('Account created successfully! Welcome to Exam MASTER.');
                updateAuthUI();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Payment functionality
        document.getElementById('submitPayment').addEventListener('click', function() {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;
            
            if (cardNumber && expiryDate && cvv) {
                paymentModal.style.display = 'none';
                alert('Payment successful! Your purchase has been completed.');
            } else {
                alert('Please fill in all payment details.');
            }
        });

        // Update UI based on authentication state
        function updateAuthUI() {
            if (isLoggedIn) {
                document.querySelectorAll('.login-btn').forEach(btn => {
                    btn.textContent = 'Dashboard';
                    btn.href = '#dashboard';
                });
                document.querySelectorAll('.signup-btn').forEach(btn => {
                    btn.textContent = 'Logout';
                    btn.addEventListener('click', function(e) {
                        e.preventDefault();
                        isLoggedIn = false;
                        currentUser = null;
                        updateAuthUI();
                        alert('You have been logged out.');
                    });
                });
            } else {
                document.querySelectorAll('.login-btn').forEach(btn => {
                    btn.textContent = 'Login';
                    btn.href = '#';
                });
                document.querySelectorAll('.signup-btn').forEach(btn => {
                    btn.textContent = 'Sign Up';
                    btn.href = '#';
                });
            }
        }

        // Unlock buttons functionality
        document.querySelectorAll('.unlock-btn').forEach(button => {
            button.addEventListener('click', function() {
                if (!isLoggedIn) {
                    alert('Please login first to purchase mock tests.');
                    loginModal.style.display = 'flex';
                    return;
                }
                
                const itemName = this.getAttribute('data-item');
                const itemPrice = this.getAttribute('data-price');
                
                document.getElementById('paymentItem').textContent = 'Item: ' + itemName;
                document.getElementById('paymentPrice').textContent = 'Price: ₹' + itemPrice;
                paymentModal.style.display = 'flex';
            });
        });

        // Buy PDF buttons functionality
        document.querySelectorAll('.buy-pdf').forEach(button => {
            button.addEventListener('click', function() {
                if (!isLoggedIn) {
                    alert('Please login first to purchase PDFs.');
                    loginModal.style.display = 'flex';
                    return;
                }
                
                const itemName = this.getAttribute('data-item');
                const itemPrice = this.getAttribute('data-price');
                
                document.getElementById('paymentItem').textContent = 'Item: ' + itemName;
                document.getElementById('paymentPrice').textContent = 'Price: ₹' + itemPrice;
                paymentModal.style.display = 'flex';
            });
        });

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

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        mobileMenu.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        });
    </script>
</body>
</html>
