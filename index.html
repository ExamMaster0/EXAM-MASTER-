<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam MASTER | Learn Smarter, Score Higher</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Supabase -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    
    <!-- Razorpay -->
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

    <style>
        :root {
            --primary: #6366f1;
            --secondary: #4f46e5;
            --accent: #8b5cf6;
            --dark: #0f172a;
            --light: #f8fafc;
            --neon: #06d6a0;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: var(--light);
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #6366f1, #8b5cf6, #06d6a0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .glass-effect {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .neon-glow {
            box-shadow: 0 0 10px rgba(6, 214, 160, 0.5);
        }
        
        .pulse-glow {
            animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
            0% { box-shadow: 0 0 0 0 rgba(6, 214, 160, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(6, 214, 160, 0); }
            100% { box-shadow: 0 0 0 0 rgba(6, 214, 160, 0); }
        }
        
        .hover-lift {
            transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
            transform: translateY(-5px);
        }
        
        .mobile-menu {
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .mobile-menu.open {
            transform: translateX(0);
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
        }
    </style>
</head>
<body class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full glass-effect z-50 border-b border-gray-800">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <i class="fas fa-brain text-white text-lg"></i>
                    </div>
                    <span class="text-xl font-bold text-white">Exam <span class="gradient-text">MASTER</span></span>
                </div>
                
                <!-- Desktop Nav -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#home" class="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                    <a href="#features" class="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
                    <a href="#tests" class="text-gray-300 hover:text-white transition-colors font-medium">Mock Tests</a>
                    <a href="#pdfs" class="text-gray-300 hover:text-white transition-colors font-medium">PDF Store</a>
                    <a href="#reviews" class="text-gray-300 hover:text-white transition-colors font-medium">Reviews</a>
                </div>
                
                <!-- Auth Buttons / User Menu -->
                <div class="hidden md:flex items-center space-x-4" id="authSection">
                    <button id="loginBtn" class="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-all font-medium">
                        Login
                    </button>
                    <button id="signupBtn" class="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all pulse-glow">
                        Sign Up Free
                    </button>
                </div>
                
                <!-- User Menu (Logged In) -->
                <div class="hidden md:flex items-center space-x-4" id="userMenu">
                    <div class="flex items-center space-x-3">
                        <div class="user-avatar" id="userAvatar">U</div>
                        <span class="text-white font-medium" id="userName">User</span>
                    </div>
                    <button id="logoutBtn" class="px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors font-medium">
                        Logout
                    </button>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobileMenuBtn" class="md:hidden text-gray-300 hover:text-white">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="mobile-menu fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-md z-50 p-6 md:hidden">
            <div class="flex justify-between items-center mb-8">
                <span class="text-xl font-bold text-white">Menu</span>
                <button id="closeMobileMenu" class="text-gray-300 hover:text-white">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="flex flex-col space-y-6">
                <a href="#home" class="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                <a href="#features" class="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
                <a href="#tests" class="text-gray-300 hover:text-white transition-colors font-medium">Mock Tests</a>
                <a href="#pdfs" class="text-gray-300 hover:text-white transition-colors font-medium">PDF Store</a>
                <a href="#reviews" class="text-gray-300 hover:text-white transition-colors font-medium">Reviews</a>
                
                <!-- Mobile Auth -->
                <div class="pt-4 border-t border-gray-700" id="mobileAuthSection">
                    <button id="mobileLoginBtn" class="w-full mb-3 px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors font-medium">
                        Login
                    </button>
                    <button id="mobileSignupBtn" class="w-full px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all">
                        Sign Up Free
                    </button>
                </div>
                
                <!-- Mobile User Menu -->
                <div class="pt-4 border-t border-gray-700 hidden" id="mobileUserMenu">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="user-avatar w-10 h-10" id="mobileUserAvatar">U</div>
                        <div>
                            <div class="text-white font-medium" id="mobileUserName">User</div>
                            <div class="text-gray-400 text-sm">View Profile</div>
                        </div>
                    </div>
                    <button id="mobileLogoutBtn" class="w-full px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors font-medium">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Modals -->
    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Welcome Back! 👋</h2>
            <input type="email" id="loginEmail" placeholder="Enter your email" class="w-full p-4 mb-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <input type="password" id="loginPassword" placeholder="Your password" class="w-full p-4 mb-6 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <div class="flex gap-3">
                <button id="closeLogin" class="flex-1 py-3 rounded-xl bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors">
                    Cancel
                </button>
                <button id="submitLogin" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all">
                    Let's Go! 🚀
                </button>
            </div>
            <div class="text-center mt-4">
                <a href="#" class="text-indigo-400 hover:text-indigo-300 text-sm">Forgot your password?</a>
            </div>
        </div>
    </div>

    <!-- Signup Modal -->
    <div class="modal" id="signupModal">
        <div class="modal-content">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Join the Squad! 🎉</h2>
            <input type="text" id="signupName" placeholder="Your full name" class="w-full p-4 mb-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <input type="email" id="signupEmail" placeholder="Enter your email" class="w-full p-4 mb-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <input type="password" id="signupPassword" placeholder="Create a password" class="w-full p-4 mb-6 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <div class="flex gap-3">
                <button id="closeSignup" class="flex-1 py-3 rounded-xl bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors">
                    Cancel
                </button>
                <button id="submitSignup" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all">
                    Create Account ✨
                </button>
            </div>
        </div>
    </div>

    <!-- Payment Modal -->
    <div class="modal" id="paymentModal">
        <div class="modal-content">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Complete Purchase 💳</h2>
            <div class="bg-gray-800 rounded-xl p-4 mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-400">Item:</span>
                    <span class="text-white font-medium" id="paymentItem">Item Name</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-400">Price:</span>
                    <span class="text-green-400 font-bold text-xl" id="paymentPrice">₹19</span>
                </div>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-400 mb-2">Card Number</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" class="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label class="block text-gray-400 mb-2">Expiry Date</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" class="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                    <label class="block text-gray-400 mb-2">CVV</label>
                    <input type="text" id="cvv" placeholder="123" class="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
            </div>
            
            <div class="flex gap-3">
                <button id="closePayment" class="flex-1 py-3 rounded-xl bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors">
                    Cancel
                </button>
                <button id="submitPayment" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all">
                    Pay Now 💫
                </button>
            </div>
            
            <div class="text-center mt-4">
                <div class="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <i class="fas fa-lock"></i>
                    <span>Secure Payment • SSL Encrypted</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Success Modal -->
    <div class="modal" id="successModal">
        <div class="modal-content">
            <div class="text-center">
                <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-check text-white text-2xl"></i>
                </div>
                <h2 class="text-2xl font-bold text-white mb-2">Payment Successful! 🎉</h2>
                <p class="text-gray-400 mb-6" id="successMessage">Your purchase has been completed successfully.</p>
                <button id="closeSuccess" class="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all">
                    Let's Go! 🚀
                </button>
            </div>
        </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 px-4">
        <div class="container mx-auto">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
                    Level Up Your <span class="gradient-text">Exam Game</span> 🚀
                </h1>
                
                <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    No boring studies. Just smart prep with mock tests that actually help you score. Your success, our algorithm.
                </p>
                
                <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
                    <button class="start-test-btn px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform pulse-glow">
                        <i class="fas fa-bolt"></i>
                        Start Mock Test @ ₹19
                    </button>
                    <button class="get-pdfs-btn px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                        <i class="fas fa-gem"></i>
                        Get Premium PDFs
                    </button>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-2">100+</div>
                        <div class="text-gray-400">Smart Tests</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-2">50+</div>
                        <div class="text-gray-400">Lit PDFs</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-2">10K+</div>
                        <div class="text-gray-400">Successful Students</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-gray-900/50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">Why We're Different 🤔</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    We get it - traditional studying is boring. Here's how we make prep actually enjoyable.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                        <i class="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">AI-Powered Analysis</h3>
                    <p class="text-gray-400">Our smart algorithm identifies your weak spots and creates personalized study plans.</p>
                </div>
                
                <!-- Feature 2 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                        <i class="fas fa-mobile-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Learn Anywhere</h3>
                    <p class="text-gray-400">Mobile-first design means you can prep during commute, breaks, or while chilling.</p>
                </div>
                
                <!-- Feature 3 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                        <i class="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Real Progress Tracking</h3>
                    <p class="text-gray-400">Watch your scores improve with beautiful charts and milestone celebrations.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mock Tests Section -->
    <section id="tests" class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">Mock Tests That Don't Suck 🎯</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Real exam feel with instant feedback. No waiting, no guessing.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Test 1 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">SSC Super Test</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">🔥 Trending</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-green-400">₹19</div>
                    </div>
                    
                    <div class="flex items-center justify-between text-gray-400 text-sm mb-6">
                        <div class="flex items-center gap-1">
                            <i class="far fa-clock"></i>
                            <span>120 min</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="far fa-question-circle"></i>
                            <span>100 MCQs</span>
                        </div>
                    </div>
                    
                    <button class="unlock-btn w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all" data-item="SSC Super Test" data-price="19">
                        Start Test Now 🚀
                    </button>
                </div>
                
                <!-- Test 2 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">Banking Pro</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">⚡ Hard</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-green-400">₹19</div>
                    </div>
                    
                    <div class="flex items-center justify-between text-gray-400 text-sm mb-6">
                        <div class="flex items-center gap-1">
                            <i class="far fa-clock"></i>
                            <span>120 min</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="far fa-question-circle"></i>
                            <span>100 MCQs</span>
                        </div>
                    </div>
                    
                    <button class="unlock-btn w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all" data-item="Banking Pro" data-price="19">
                        Boost Your Rank 💪
                    </button>
                </div>
                
                <!-- Test 3 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">Railway Express</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">🎯 Medium</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-green-400">₹19</div>
                    </div>
                    
                    <div class="flex items-center justify-between text-gray-400 text-sm mb-6">
                        <div class="flex items-center gap-1">
                            <i class="far fa-clock"></i>
                            <span>120 min</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="far fa-question-circle"></i>
                            <span>100 MCQs</span>
                        </div>
                    </div>
                    
                    <button class="unlock-btn w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all" data-item="Railway Express" data-price="19">
                        Start Test Now 🚀
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- PDF Store Section -->
    <section id="pdfs" class="py-20 bg-gray-900/50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">PDFs That Actually Help 📚</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    No fluff, just quality content that gets you results.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- PDF 1 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                            <i class="fas fa-calculator text-white text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">Math Shortcuts</h3>
                            <div class="text-gray-400 text-sm">120 pages • Updated 2024</div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Time-saving tricks and formulas that actually work in exams.</p>
                    
                    <div class="flex items-center justify-between">
                        <button class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                        <button class="buy-pdf-btn px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all" data-item="Math Shortcuts" data-price="39">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- PDF 2 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                            <i class="fas fa-puzzle-piece text-white text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">Reasoning Master</h3>
                            <div class="text-gray-400 text-sm">95 pages • 500+ Questions</div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Crack reasoning sections with pattern recognition techniques.</p>
                    
                    <div class="flex items-center justify-between">
                        <button class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                        <button class="buy-pdf-btn px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all" data-item="Reasoning Master" data-price="39">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- PDF 3 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                            <i class="fas fa-globe text-white text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">GK Power Pack</h3>
                            <div class="text-gray-400 text-sm">150 pages • 2024 Updated</div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Current affairs and static GK that actually comes in exams.</p>
                    
                    <div class="flex items-center justify-between">
                        <button class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                        <button class="buy-pdf-btn px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all" data-item="GK Power Pack" data-price="39">
                            ₹39
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">What Students Say 💬</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Real results from real students. No cap.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Review 1 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            RS
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">Rahul Sharma</h3>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-300 italic">
                        "Bro, these mock tests are literally identical to the real SSC exam. Cleared in first attempt thanks to Exam MASTER! 🎉"
                    </p>
                </div>
                
                <!-- Review 2 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white font-bold">
                            PK
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">Priya Kumar</h3>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-300 italic">
                        "The math shortcuts PDF changed everything for me. Went from struggling to scoring 45/50! So worth it. 💯"
                    </p>
                </div>
                
                <!-- Review 3 -->
                <div class="glass-effect rounded-2xl p-6 hover-lift" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
                            AS
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">Ankit Singh</h3>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-300 italic">
                        "Mobile app is fire! Can study anywhere, anytime. The progress tracking keeps me motivated. 🔥"
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">Ready to Level Up? 🚀</h2>
            <p class="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Join thousands of students who are already acing their exams with Exam MASTER.
            </p>
            <button class="px-8 py-4 rounded-2xl bg-white text-indigo-600 font-bold text-lg hover:scale-105 transition-transform pulse-glow" data-aos="fade-up" data-aos-delay="200">
                Start Your Journey Today - It's Free! 🎉
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 border-t border-gray-800">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Exam MASTER</h3>
                    <p class="text-gray-400">Making exam prep actually enjoyable and effective for Gen Z.</p>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mock Tests</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">PDF Store</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Support</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Connect</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                            <i class="fab fa-telegram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-center pt-8 border-t border-gray-800">
                <p class="text-gray-500">© 2024 Exam MASTER. Made with ❤️ for Gen Z students.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // Supabase Configuration
        const supabaseUrl = 'https://bkexliskprtpaikwlkzy.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZXhsaXNrcHJ0cGFpa3dsa3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzMjgwMjUsImV4cCI6MjA3NTkwNDAyNX0.kEDMvvbd1GPCw9vMCOPOlsZLaFenzqU7UWUMyk6zsRU';
        const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

        // Razorpay Configuration
        const razorpayKey = 'rzp_test_RTbzjQYm1Wq8Nl';

        // User State
        let currentUser = null;
        let currentPurchaseItem = null;
        let currentPurchasePrice = null;

        // DOM Elements
        const authSection = document.getElementById('authSection');
        const userMenu = document.getElementById('userMenu');
        const mobileAuthSection = document.getElementById('mobileAuthSection');
        const mobileUserMenu = document.getElementById('mobileUserMenu');
        const userName = document.getElementById('userName');
        const mobileUserName = document.getElementById('mobileUserName');
        const userAvatar = document.getElementById('userAvatar');
        const mobileUserAvatar = document.getElementById('mobileUserAvatar');

        // Modal Elements
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const paymentModal = document.getElementById('paymentModal');
        const successModal = document.getElementById('successModal');

        // Update UI based on authentication state
        function updateAuthUI() {
            if (currentUser) {
                // Show user menu, hide auth buttons
                authSection.classList.add('hidden');
                userMenu.classList.remove('hidden');
                mobileAuthSection.classList.add('hidden');
                mobileUserMenu.classList.remove('hidden');
                
                // Update user info
                const displayName = currentUser.user_metadata?.name || currentUser.email?.split('@')[0] || 'User';
                userName.textContent = displayName;
                mobileUserName.textContent = displayName;
                
                // Update avatars
                const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
                userAvatar.textContent = initials;
                mobileUserAvatar.textContent = initials;
            } else {
                // Show auth buttons, hide user menu
                authSection.classList.remove('hidden');
                userMenu.classList.add('hidden');
                mobileAuthSection.classList.remove('hidden');
                mobileUserMenu.classList.add('hidden');
            }
        }

        // Check if user is already logged in
        async function checkAuthStatus() {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                currentUser = user;
                updateAuthUI();
            }
        }

        // Modal Functions
        function openModal(modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });

        // Login Functionality
        document.getElementById('loginBtn').addEventListener('click', () => openModal(loginModal));
        document.getElementById('mobileLoginBtn').addEventListener('click', () => {
            openModal(loginModal);
            mobileMenu.classList.remove('open');
        });

        document.getElementById('closeLogin').addEventListener('click', () => closeModal(loginModal));

        document.getElementById('submitLogin').addEventListener('click', async () => {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (email && password) {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) {
                    alert('Login failed: ' + error.message);
                } else {
                    currentUser = data.user;
                    closeModal(loginModal);
                    updateAuthUI();
                    alert('Welcome back! 🎉');
                }
            } else {
                alert('Please enter both email and password.');
            }
        });

        // Signup Functionality
        document.getElementById('signupBtn').addEventListener('click', () => openModal(signupModal));
        document.getElementById('mobileSignupBtn').addEventListener('click', () => {
            openModal(signupModal);
            mobileMenu.classList.remove('open');
        });

        document.getElementById('closeSignup').addEventListener('click', () => closeModal(signupModal));

        document.getElementById('submitSignup').addEventListener('click', async () => {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (name && email && password) {
                const { data, error } = await supabase.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: {
                            name: name
                        }
                    }
                });

                if (error) {
                    alert('Signup failed: ' + error.message);
                } else {
                    currentUser = data.user;
                    closeModal(signupModal);
                    updateAuthUI();
                    alert('Account created successfully! Welcome to Exam MASTER! 🎉');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Logout Functionality
        document.getElementById('logoutBtn').addEventListener('click', async () => {
            await supabase.auth.signOut();
            currentUser = null;
            updateAuthUI();
            alert('You have been logged out. See you soon! 👋');
        });

        document.getElementById('mobileLogoutBtn').addEventListener('click', async () => {
            await supabase.auth.signOut();
            currentUser = null;
            updateAuthUI();
            mobileMenu.classList.remove('open');
            alert('You have been logged out. See you soon! 👋');
        });

        // Purchase Functionality
        document.querySelectorAll('.unlock-btn').forEach(button => {
            button.addEventListener('click', function() {
                if (!currentUser) {
                    alert('Please login first to purchase mock tests. 🔐');
                    openModal(loginModal);
                    return;
                }

                currentPurchaseItem = this.getAttribute('data-item');
                currentPurchasePrice = this.getAttribute('data-price');

                document.getElementById('paymentItem').textContent = currentPurchaseItem;
                document.getElementById('paymentPrice').textContent = '₹' + currentPurchasePrice;
                openModal(paymentModal);
            });
        });

        document.querySelectorAll('.buy-pdf-btn').forEach(button => {
            button.addEventListener('click', function() {
                if (!currentUser) {
                    alert('Please login first to purchase PDFs. 🔐');
                    openModal(loginModal);
                    return;
                }

                currentPurchaseItem = this.getAttribute('data-item');
                currentPurchasePrice = this.getAttribute('data-price');

                document.getElementById('paymentItem').textContent = currentPurchaseItem;
                document.getElementById('paymentPrice').textContent = '₹' + currentPurchasePrice;
                openModal(paymentModal);
            });
        });

        // Payment Modal
        document.getElementById('closePayment').addEventListener('click', () => closeModal(paymentModal));

        document.getElementById('submitPayment').addEventListener('click', async () => {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;

            if (cardNumber && expiryDate && cvv) {
                // Simulate payment processing with Razorpay
                const options = {
                    key: razorpayKey,
                    amount: parseInt(currentPurchasePrice) * 100, // Amount in paise
                    currency: 'INR',
                    name: 'Exam MASTER',
                    description: currentPurchaseItem,
                    handler: function(response) {
                        closeModal(paymentModal);
                        document.getElementById('successMessage').textContent = 
                            `Your purchase of "${currentPurchaseItem}" has been completed successfully! You can now access it from your dashboard.`;
                        openModal(successModal);
                        
                        // Here you would typically save the purchase to your database
                        console.log('Payment successful:', response);
                    },
                    prefill: {
                        name: currentUser.user_metadata?.name || '',
                        email: currentUser.email || ''
                    },
                    theme: {
                        color: '#6366f1'
                    }
                };

                const rzp = new Razorpay(options);
                rzp.open();
            } else {
                alert('Please fill in all payment details.');
            }
        });

        // Success Modal
        document.getElementById('closeSuccess').addEventListener('click', () => closeModal(successModal));

        // CTA Buttons
        document.querySelector('.start-test-btn').addEventListener('click', () => {
            if (!currentUser) {
                alert('Please login first to start mock tests. 🔐');
                openModal(loginModal);
                return;
            }
            document.querySelector('.unlock-btn').click();
        });

        document.querySelector('.get-pdfs-btn').addEventListener('click', () => {
            if (!currentUser) {
                alert('Please login first to access PDFs. 🔐');
                openModal(loginModal);
                return;
            }
            document.querySelector('.buy-pdf-btn').click();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    mobileMenu.classList.remove('open');
                }
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            checkAuthStatus();
        });
    </script>
</body>
</html>