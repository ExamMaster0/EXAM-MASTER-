<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam MASTER - Premium Exam Preparation Platform</title>
    <meta name="description" content="Exam MASTER offers affordable mock tests and PDFs for SSC, JKSSB, Banking and more. Start your smart preparation today.">
    <meta property="og:image" content="/assets/exam-master-preview.webp">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #3B82F6;
            --secondary: #2563EB;
            --accent: #A855F7;
            --dark: #0F172A;
            --light: #F8FAFC;
            --gray: #CBD5E1;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--dark);
            color: var(--light);
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, var(--dark) 0%, #1E293B 100%);
        }
        
        .gradient-text {
            background: linear-gradient(90deg, #3B82F6, #2563EB);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .gradient-button {
            background: linear-gradient(90deg, #3B82F6, #2563EB);
        }
        
        .gradient-button:hover {
            background: linear-gradient(90deg, #2563EB, #1D4ED8);
        }
        
        .accent-button {
            background: linear-gradient(90deg, #A855F7, #9333EA);
        }
        
        .accent-button:hover {
            background: linear-gradient(90deg, #9333EA, #7C3AED);
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
        
        .pulse-glow {
            animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
            0% {
                box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }
        }
        
        .mobile-menu {
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .mobile-menu.open {
            transform: translateX(0);
        }
        
        .scroll-to-top {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
        }
    </style>
</head>
<body class="gradient-bg">
    <!-- Header & Navigation -->
    <header class="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="#" class="flex items-center space-x-2">
                    <div class="w-10 h-10 rounded-lg gradient-button flex items-center justify-center">
                        <i class="fas fa-graduation-cap text-white text-lg"></i>
                    </div>
                    <span class="text-xl font-bold text-white">Exam <span class="gradient-text">MASTER</span></span>
                </a>
                
                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="#home" class="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                    <a href="#mocks" class="text-gray-300 hover:text-white transition-colors font-medium">Mock Tests</a>
                    <a href="#pdfs" class="text-gray-300 hover:text-white transition-colors font-medium">PDF Store</a>
                    <a href="#reviews" class="text-gray-300 hover:text-white transition-colors font-medium">Reviews</a>
                    <a href="#about" class="text-gray-300 hover:text-white transition-colors font-medium">About</a>
                    <a href="#contact" class="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
                </nav>
                
                <!-- Auth Buttons -->
                <div class="hidden md:flex items-center space-x-4">
                    <button class="px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors font-medium">Login</button>
                    <button class="px-4 py-2 rounded-full gradient-button text-white font-medium hover:shadow-lg transition-all">Sign Up</button>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-white">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 h-full w-64 bg-dark/95 backdrop-blur-md z-50 p-6 md:hidden">
            <div class="flex justify-between items-center mb-8">
                <span class="text-xl font-bold text-white">Menu</span>
                <button id="close-mobile-menu" class="text-gray-300 hover:text-white">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <nav class="flex flex-col space-y-6">
                <a href="#home" class="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                <a href="#mocks" class="text-gray-300 hover:text-white transition-colors font-medium">Mock Tests</a>
                <a href="#pdfs" class="text-gray-300 hover:text-white transition-colors font-medium">PDF Store</a>
                <a href="#reviews" class="text-gray-300 hover:text-white transition-colors font-medium">Reviews</a>
                <a href="#about" class="text-gray-300 hover:text-white transition-colors font-medium">About</a>
                <a href="#contact" class="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
                
                <div class="pt-4 border-t border-gray-700">
                    <button class="w-full mb-3 px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors font-medium">Login</button>
                    <button class="w-full px-4 py-2 rounded-full gradient-button text-white font-medium hover:shadow-lg transition-all">Sign Up</button>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative py-20 md:py-28 overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                 alt="Students studying" 
                 class="w-full h-full object-cover brightness-75 blur-sm">
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
                    Empower your preparation. <br>
                    <span class="gradient-text">Learn smart. Score high.</span>
                </h1>
                
                <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Access high-quality PDFs and real exam-style mock tests designed to help you master competitive exams at an affordable cost.
                </p>
                
                <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
                    <a href="#mocks" class="px-8 py-4 rounded-full gradient-button text-white font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform pulse-glow">
                        Start Mock Test ₹19 <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="#pdfs" class="px-8 py-4 rounded-full accent-button text-white font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                        Buy PDF ₹39 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                
                <!-- Limited Time Offer -->
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-bolt text-yellow-300"></i>
                            <span class="font-semibold">Get any PDF for ₹39 — 24-Hour Offer!</span>
                        </div>
                        <div id="countdown" class="font-mono font-bold">23:59:59</div>
                    </div>
                    <div class="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div class="bg-yellow-400 h-2 rounded-full w-3/4"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Metrics Section -->
    <section class="py-16 bg-gray-900/50">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center" data-aos="fade-up">
                    <div class="text-5xl font-bold gradient-text mb-2">100+</div>
                    <div class="text-xl text-gray-300">Mock Tests</div>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="text-5xl font-bold gradient-text mb-2">50+</div>
                    <div class="text-xl text-gray-300">Study PDFs</div>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="text-5xl font-bold gradient-text mb-2">100k+</div>
                    <div class="text-xl text-gray-300">Students</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mock Tests Section -->
    <section id="mocks" class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Attempt Real Exam-Style Mocks</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Each mock has 100 MCQs | 120 Minutes | Instant Score
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- JKSSB Mock -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">JKSSB Mock</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Medium</span>
                                <span class="text-gray-400 text-sm"><i class="fas fa-book mr-1"></i> 5 Subjects</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-blue-400">₹19</div>
                    </div>
                    
                    <p class="text-gray-400 mb-4">Subjects: General Knowledge, Mathematics, Reasoning, English, Computer</p>
                    
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
                    
                    <button class="w-full py-3 rounded-lg gradient-button text-white font-semibold hover:shadow-lg transition-all">
                        Start Test Now <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <!-- SSC Mock -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">SSC Mock</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Hard</span>
                                <span class="text-gray-400 text-sm"><i class="fas fa-book mr-1"></i> 4 Subjects</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-blue-400">₹19</div>
                    </div>
                    
                    <p class="text-gray-400 mb-4">Subjects: Quantitative Aptitude, English, Reasoning, General Awareness</p>
                    
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
                    
                    <button class="w-full py-3 rounded-lg gradient-button text-white font-semibold hover:shadow-lg transition-all">
                        Boost Your Rank <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <!-- Railway Mock -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">Railway Mock</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Medium</span>
                                <span class="text-gray-400 text-sm"><i class="fas fa-book mr-1"></i> 6 Subjects</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-blue-400">₹19</div>
                    </div>
                    
                    <p class="text-gray-400 mb-4">Subjects: Mathematics, General Intelligence, General Science, Current Affairs</p>
                    
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
                    
                    <button class="w-full py-3 rounded-lg gradient-button text-white font-semibold hover:shadow-lg transition-all">
                        Start Test Now <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <!-- Banking Mock -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">Banking Mock</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Hard</span>
                                <span class="text-gray-400 text-sm"><i class="fas fa-book mr-1"></i> 5 Subjects</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-blue-400">₹19</div>
                    </div>
                    
                    <p class="text-gray-400 mb-4">Subjects: Reasoning, Quantitative Aptitude, English, General Awareness, Computer</p>
                    
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
                    
                    <button class="w-full py-3 rounded-lg gradient-button text-white font-semibold hover:shadow-lg transition-all">
                        Boost Your Rank <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <!-- UPSC Mock -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">UPSC Prelims Mock</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Very Hard</span>
                                <span class="text-gray-400 text-sm"><i class="fas fa-book mr-1"></i> 7 Subjects</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-blue-400">₹19</div>
                    </div>
                    
                    <p class="text-gray-400 mb-4">Subjects: History, Geography, Polity, Economy, Science, Environment, Current Affairs</p>
                    
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
                    
                    <button class="w-full py-3 rounded-lg gradient-button text-white font-semibold hover:shadow-lg transition-all">
                        Start Test Now <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <!-- Science & Tech Mock -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">Science & Tech Mock</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Medium</span>
                                <span class="text-gray-400 text-sm"><i class="fas fa-book mr-1"></i> 4 Subjects</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-blue-400">₹19</div>
                    </div>
                    
                    <p class="text-gray-400 mb-4">Subjects: Physics, Chemistry, Biology, Computer Science</p>
                    
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
                    
                    <button class="w-full py-3 rounded-lg gradient-button text-white font-semibold hover:shadow-lg transition-all">
                        Boost Your Rank <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- PDF Store Section -->
    <section id="pdfs" class="py-20 bg-gray-900/30">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">PDF Store</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Comprehensive study materials for all competitive exams
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Quantitative Aptitude -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <i class="fas fa-calculator text-blue-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Quantitative Aptitude Guide</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-400 text-sm"><i class="far fa-file-pdf mr-1"></i> 120 pages</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Complete guide with formulas, shortcuts, and practice questions for all competitive exams.</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> View Sample PDF
                        </a>
                        <button class="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- Reasoning Practice -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <i class="fas fa-puzzle-piece text-green-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Reasoning Practice Sets</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-400 text-sm"><i class="far fa-file-pdf mr-1"></i> 95 pages</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">500+ practice questions covering verbal and non-verbal reasoning with detailed solutions.</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> View Sample PDF
                        </a>
                        <button class="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- General Knowledge -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                            <i class="fas fa-globe text-yellow-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">General Knowledge 2024</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-400 text-sm"><i class="far fa-file-pdf mr-1"></i> 150 pages</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Updated current affairs, history, geography, polity, and science for 2024 competitive exams.</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> View Sample PDF
                        </a>
                        <button class="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- English Language -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <i class="fas fa-language text-red-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">English Language Mastery</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-400 text-sm"><i class="far fa-file-pdf mr-1"></i> 110 pages</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Grammar rules, vocabulary, comprehension techniques, and practice exercises for English sections.</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> View Sample PDF
                        </a>
                        <button class="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- History Guide -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                            <i class="fas fa-landmark text-indigo-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">History Guide</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-400 text-sm"><i class="far fa-file-pdf mr-1"></i> 130 pages</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Ancient, medieval, and modern Indian history with important dates, events, and personalities.</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> View Sample PDF
                        </a>
                        <button class="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                            ₹39
                        </button>
                    </div>
                </div>
                
                <!-- Computer Fundamentals -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
                            <i class="fas fa-laptop-code text-teal-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Computer Fundamentals</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-400 text-sm"><i class="far fa-file-pdf mr-1"></i> 85 pages</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-400 mb-6">Hardware, software, networking, internet, and computer terminology for competitive exams.</p>
                    
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                            <i class="fas fa-eye"></i> View Sample PDF
                        </a>
                        <button class="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                            ₹39
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="reviews" class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">What Our Students Say</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Join thousands of successful students who aced their exams with Exam MASTER
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Featured Testimonial -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border-2 border-yellow-500/50" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                            RS
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Rahul Sharma</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <div class="flex text-yellow-400">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">Top Scorer</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-1">Cleared SSC CGL - 2 weeks ago</p>
                        </div>
                    </div>
                    
                    <p class="text-gray-300 italic">
                        "The mock tests are incredibly similar to the actual exam. I cleared SSC CGL in my first attempt thanks to Exam MASTER! The detailed explanations helped me understand my weak areas."
                    </p>
                </div>
                
                <!-- Regular Testimonials -->
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white font-bold">
                            PK
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Priya Kumar</h3>
                            <div class="flex text-yellow-400 mt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="text-gray-400 text-sm mt-1">JKSSB Topper - 1 month ago</p>
                        </div>
                    </div>
                    
                    <p class="text-gray-300 italic">
                        "The PDFs are comprehensive and well-structured. The history notes helped me score 45/50 in the history section! The affordable pricing makes quality education accessible to everyone."
                    </p>
                </div>
                
                <div class="bg-gray-800/50 rounded-xl p-6 card-hover border border-gray-700" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
                            AS
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Ankit Singh</h3>
                            <div class="flex text-yellow-400 mt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <p class="text-gray-400 text-sm mt-1">Railway Exam - 3 weeks ago</p>
                        </div>
                    </div>
                    
                    <p class="text-gray-300 italic">
                        "The platform is user-friendly and the content is top-notch. The quantitative aptitude PDF is a game-changer! The instant score feature after mock tests helped me track my progress effectively."
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="py-16 bg-gray-900/70 border-t border-gray-800">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <!-- Quick Links -->
                <div>
                    <h3 class="text-xl font-bold text-white mb-6">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#mocks" class="text-gray-400 hover:text-white transition-colors">Mock Tests</a></li>
                        <li><a href="#pdfs" class="text-gray-400 hover:text-white transition-colors">PDF Store</a></li>
                        <li><a href="#reviews" class="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                    </ul>
                </div>
                
                <!-- Popular Exams -->
                <div>
                    <h3 class="text-xl font-bold text-white mb-6">Popular Exams</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">SSC CGL</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">JKSSB</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Banking Exams</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Railway Exams</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">UPSC Prelims</a></li>
                    </ul>
                </div>
                
                <!-- Support -->
                <div>
                    <h3 class="text-xl font-bold text-white mb-6">Support</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
                
                <!-- Socials & Contact -->
                <div>
                    <h3 class="text-xl font-bold text-white mb-6">Connect With Us</h3>
                    <div class="flex space-x-4 mb-6">
                        <a href="https://t.me/ExamMaster0" class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                            <i class="fab fa-telegram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 text-gray-400">
                            <i class="fas fa-envelope"></i>
                            <span>dar596020@gmail.com</span>
                        </div>
                        <div class="flex items-center gap-2 text-gray-400">
                            <i class="fab fa-telegram"></i>
                            <span>t.me/ExamMaster0</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Trust Badges -->
            <div class="flex flex-wrap justify-center gap-6 mb-8">
                <div class="flex items-center gap-2 text-gray-400">
                    <i class="fas fa-shield-alt text-green-400"></i>
                    <span>Secure Payments</span>
                </div>
                <div class="flex items-center gap-2 text-gray-400">
                    <i class="fas fa-lock text-green-400"></i>
                    <span>Verified PDFs</span>
                </div>
                <div class="flex items-center gap-2 text-gray-400">
                    <i class="fas fa-comments text-green-400"></i>
                    <span>24/7 Support</span>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="text-center pt-8 border-t border-gray-800">
                <p class="text-gray-500">© 2025 Exam MASTER. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button id="scroll-to-top" class="scroll-to-top fixed bottom-8 right-8 w-12 h-12 rounded-full gradient-button text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <i class="fas fa-chevron-up"></i>
    </button>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
        
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenu = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
        
        // Countdown Timer
        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            let time = 23 * 60 * 60 + 59 * 60 + 59; // 23:59:59 in seconds
            
            const timer = setInterval(() => {
                const hours = Math.floor(time / 3600);
                const minutes = Math.floor((time % 3600) / 60);
                const seconds = time % 60;
                
                countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (time <= 0) {
                    clearInterval(timer);
                } else {
                    time--;
                }
            }, 1000);
        }
        
        updateCountdown();
        
        // Scroll to Top Button
        const scrollToTopButton = document.getElementById('scroll-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        });
        
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
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
                }
            });
        });
    </script>
</body>
</html>
