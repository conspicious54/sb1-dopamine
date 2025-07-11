import React, { useState, useEffect } from 'react';
import { Zap, Brain, Target, TrendingUp, ShoppingCart, Search, ArrowRight, Phone, Mail, MapPin, Sparkles, BarChart3, Users, Star } from 'lucide-react';
import GoogleAdsPage from './components/GoogleAdsPage';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'google-ads'>('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus on the form after scrolling
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }, 800);
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    // Create email body
    const emailBody = `Hi Dopamine Solutions,

I'm interested in your services and would like to get started.

Name: ${name}
Email: ${email}
Service Interest: ${service}
Message: ${message}

Looking forward to hearing from you!

Best regards,
${name}`;

    // Open email client
    const mailtoLink = `mailto:connor@dopamine.solutions?subject=New Lead - ${service}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const showGoogleAdsPage = () => {
    setCurrentPage('google-ads');
  };

  const showHomePage = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'google-ads') {
    return <GoogleAdsPage onBack={showHomePage} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-purple-500/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovered ? 'scale(2)' : 'scale(1)'
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dopamine
                </span>
                <div className="text-sm text-gray-400 -mt-1">Solutions</div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors relative group">
                Services
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#process" className="text-gray-300 hover:text-purple-400 transition-colors relative group">
                Process
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors relative group">
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </nav>
            
            <button 
              className="relative group"
              onClick={scrollToContact}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all">
                Get Your Hit
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-purple-300 text-sm">Triggering Growth Since 2020</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="block text-white">We Trigger</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Business Dopamine
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              That rush when your ads convert. The high of climbing Amazon rankings. 
              <br />
              <span className="text-purple-300">We're your dealers in digital growth.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="group relative"
                onClick={scrollToContact}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all flex items-center justify-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your Addiction
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                className="border border-purple-500/30 text-purple-300 px-8 py-4 rounded-xl hover:bg-purple-500/10 hover:border-purple-400 transition-all"
                onClick={scrollToServices}
              >
                See The Rush
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Choose Your</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dopamine Hit
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two powerful pathways to that sweet, sweet business growth high
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Google Ads Service */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl hover:border-blue-400/40 transition-all">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl">
                      <Search className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Google Ads</h3>
                    <p className="text-blue-300">For Legacy Businesses</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Transform traditional businesses into digital dopamine machines. 
                  Watch legacy companies get their first taste of online conversion highs.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start group/item">
                    <div className="bg-blue-500/20 p-2 rounded-lg mr-4 group-hover/item:bg-blue-500/30 transition-colors">
                      <Target className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Digital Transformation</h4>
                      <p className="text-gray-400">Turn brick-and-mortar into click-and-order addiction</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item">
                    <div className="bg-blue-500/20 p-2 rounded-lg mr-4 group-hover/item:bg-blue-500/30 transition-colors">
                      <BarChart3 className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">ROI Rush</h4>
                      <p className="text-gray-400">Every click optimized for maximum conversion euphoria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item">
                    <div className="bg-blue-500/20 p-2 rounded-lg mr-4 group-hover/item:bg-blue-500/30 transition-colors">
                      <Users className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Local Domination</h4>
                      <p className="text-gray-400">Own your market like the neighborhood dealer</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="w-full group/btn relative"
                  onClick={showGoogleAdsPage}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-75 group-hover/btn:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 py-4 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all">
                    Learn More About Google Ads
                  </div>
                </button>
              </div>
            </div>

            {/* Amazon Management Service */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 p-8 rounded-3xl hover:border-orange-400/40 transition-all">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-75"></div>
                    <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 p-4 rounded-2xl">
                      <ShoppingCart className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Amazon Management</h3>
                    <p className="text-orange-300">For Existing Brands</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Amplify existing Amazon brands into marketplace monsters. 
                  Scale your dopamine hits with every sale notification ping.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start group/item">
                    <div className="bg-orange-500/20 p-2 rounded-lg mr-4 group-hover/item:bg-orange-500/30 transition-colors">
                      <Star className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Brand Amplification</h4>
                      <p className="text-gray-400">Turn good products into marketplace obsessions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item">
                    <div className="bg-orange-500/20 p-2 rounded-lg mr-4 group-hover/item:bg-orange-500/30 transition-colors">
                      <TrendingUp className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Ranking Rush</h4>
                      <p className="text-gray-400">Climb those search results like your life depends on it</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item">
                    <div className="bg-orange-500/20 p-2 rounded-lg mr-4 group-hover/item:bg-orange-500/30 transition-colors">
                      <Zap className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Sales Velocity</h4>
                      <p className="text-gray-400">Accelerate growth until it becomes an addiction</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="w-full group/btn relative"
                  onClick={scrollToContact}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl blur opacity-75 group-hover/btn:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 py-4 rounded-xl hover:from-orange-500 hover:to-pink-500 transition-all">
                    Get Your Amazon High
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-gray-300">Pure, uncut performance metrics</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  250+
                </div>
                <div className="text-gray-400">Addicted Clients</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  $2M+
                </div>
                <div className="text-gray-400">Ad Spend Managed</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  95%
                </div>
                <div className="text-gray-400">Retention Rate</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  3.2x
                </div>
                <div className="text-gray-400">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">The</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Dopamine </span>
              <span className="text-white">Process</span>
            </h2>
            <p className="text-xl text-gray-300">How we get you hooked on growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Diagnosis</h3>
              <p className="text-gray-300">We analyze your current state and identify growth opportunities that'll give you the biggest rush</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Prescription</h3>
              <p className="text-gray-300">Custom strategy designed to trigger consistent dopamine hits through optimized campaigns</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Addiction</h3>
              <p className="text-gray-300">Watch as your business becomes addicted to growth, with results that keep you coming back for more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready for Your</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                First Hit?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's get you hooked on the kind of growth that keeps you up at night (in a good way)
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center group">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4 group-hover:bg-purple-500/30 transition-colors">
                      <Phone className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">706 372-5624</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4 group-hover:bg-purple-500/30 transition-colors">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">connor@dopamine.solutions</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4 group-hover:bg-purple-500/30 transition-colors">
                      <MapPin className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Serving Businesses Nationwide</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  We work with businesses across the country, delivering that sweet dopamine hit of consistent growth and results.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Choose Your Poison
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    >
                      <option value="">Select your addiction</option>
                      <option value="Google Ads (Legacy Business)">Google Ads (Legacy Business)</option>
                      <option value="Amazon Management (Existing Brand)">Amazon Management (Existing Brand)</option>
                      <option value="Both (Double the Rush)">Both (Double the Rush)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell Us About Your Business
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="What kind of growth high are you looking for?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all">
                      Get Your First Hit
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-xl border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dopamine
                  </span>
                  <div className="text-sm text-gray-400 -mt-1">Solutions</div>
                </div>
              </div>
              <p className="text-gray-400">
                Your dealers in digital growth. We supply the hits that keep your business coming back for more.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Google Ads for Legacy Business</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Amazon Management</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Growth Optimization</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#process" className="hover:text-purple-400 transition-colors">Process</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Get Your Fix</h4>
              <ul className="space-y-2 text-gray-400">
                <li>706 372-5624</li>
                <li>connor@dopamine.solutions</li>
                <li>Available Nationwide</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dopamine Solutions. All rights reserved. Side effects may include: explosive growth, increased profits, and addiction to success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;