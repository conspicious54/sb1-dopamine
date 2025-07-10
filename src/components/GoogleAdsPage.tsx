import React from 'react';
import { ArrowLeft, MapPin, Target, Users, TrendingUp, Smartphone, Clock, DollarSign, BarChart3, Zap, CheckCircle, ArrowRight, Search, Eye, MousePointer, ShoppingBag } from 'lucide-react';

interface GoogleAdsPageProps {
  onBack: () => void;
}

export default function GoogleAdsPage({ onBack }: GoogleAdsPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
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

      {/* Header */}
      <header className="relative z-10 bg-black/80 backdrop-blur-xl border-b border-blue-500/20 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Search className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Google Ads for Legacy Businesses</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">Turn Your</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Brick & Mortar
            </span>
            <span className="block text-white">Into Click & Order</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your customers ARE online. They're searching for what you offer right now. 
            <br />
            <span className="text-blue-300">Let's intercept them before they find your competition.</span>
          </p>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">The</span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Reality </span>
              <span className="text-white">Check</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-red-500/20 p-8 rounded-3xl">
                <h3 className="text-3xl font-bold text-red-400 mb-8">What You Think:</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                      <Users className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-300">"My customers aren't tech-savvy"</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                      <Smartphone className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-300">"They don't use the internet to find businesses"</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-300">"Word of mouth is enough for my local business"</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                      <DollarSign className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-300">"Online advertising is too expensive"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-green-500/20 p-8 rounded-3xl">
                <h3 className="text-3xl font-bold text-green-400 mb-8">The Truth:</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300"><strong>97%</strong> of people search online for local businesses</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                      <Clock className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300">They're searching <strong>right now</strong> while you're reading this</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                      <Target className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300">Your competitors are capturing <strong>your customers</strong></p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300">Google Ads can be <strong>profitable from day one</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">How Google Ads</span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Captures Your Customers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The moment someone searches for what you offer, we make sure they find YOU first
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 p-8 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Customer Has a Need</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Your potential customer realizes they need your service. Maybe their AC broke, they need a plumber, 
                    or they're looking for a restaurant for tonight.
                  </p>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <p className="text-purple-300 italic">
                      "I need a reliable plumber near me who can fix this leak today"
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-purple-500/30 p-12 rounded-3xl text-center">
                  <Users className="h-24 w-24 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-lg">Your Future Customer</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">They Search on Google</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Like 97% of people, they pull out their phone and search Google. They're looking for someone 
                    local, reliable, and available now.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-blue-400 mr-2" />
                      <p className="text-blue-300 font-mono">
                        "emergency plumber near me"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-blue-500/30 p-12 rounded-3xl text-center">
                  <Search className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-lg">Google Search</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-green-500/20 p-8 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Your Ad Appears First</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Because we've set up targeted Google Ads, YOUR business appears at the very top of their search results. 
                    Not your competitor's. Yours.
                  </p>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">Ad</div>
                      <p className="text-green-300 font-semibold">Your Business Name</p>
                    </div>
                    <p className="text-gray-400 text-sm">24/7 Emergency Plumbing • Licensed & Insured • Call Now!</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-green-500/30 p-12 rounded-3xl text-center">
                  <Eye className="h-24 w-24 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-lg">Maximum Visibility</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 p-8 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">They Click & Convert</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Your compelling ad copy and local targeting convince them to click. They call your number, 
                    fill out your form, or visit your location.
                  </p>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-orange-300">New customer acquired!</p>
                      <CheckCircle className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-orange-500/30 p-12 rounded-3xl text-center">
                  <MousePointer className="h-24 w-24 text-orange-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-lg">Customer Conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Targeting Power */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">The Power of</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Location Targeting
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't waste your money on people who can't use your services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 p-8 rounded-3xl hover:border-purple-400/40 transition-all">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Radius Targeting</h3>
                <p className="text-gray-300 mb-6">
                  Only show your ads to people within your service area. 5 miles? 50 miles? You decide.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-purple-300 text-sm">
                    Example: Restaurant only targets people within 10 miles who are likely to drive for dinner
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl hover:border-blue-400/40 transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">City/Zip Targeting</h3>
                <p className="text-gray-300 mb-6">
                  Target specific cities, zip codes, or neighborhoods where your best customers live.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    Example: HVAC company targets affluent neighborhoods with older homes
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-green-500/20 p-8 rounded-3xl hover:border-green-400/40 transition-all">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Time-Based Targeting</h3>
                <p className="text-gray-300 mb-6">
                  Show ads only when you're open, or when people are most likely to need your service.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-300 text-sm">
                    Example: Emergency services run ads 24/7, while retail stores target business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Funnel */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">The Customer</span>
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Acquisition Funnel
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we turn strangers into customers, systematically and predictably
            </p>
          </div>

          <div className="relative">
            {/* Funnel Visual */}
            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {/* Top of Funnel */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Search className="h-8 w-8 text-blue-400 mr-4" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Search Intent</h3>
                          <p className="text-gray-400">1,000 people search for your service</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-blue-400">1000</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-500 rotate-90" />
                </div>

                {/* Middle of Funnel */}
                <div className="relative mx-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye className="h-8 w-8 text-purple-400 mr-4" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Ad Impressions</h3>
                          <p className="text-gray-400">Your ad shows to qualified prospects</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-purple-400">800</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-500 rotate-90" />
                </div>

                {/* Bottom of Funnel */}
                <div className="relative mx-16">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 p-6 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MousePointer className="h-8 w-8 text-orange-400 mr-4" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Clicks</h3>
                          <p className="text-gray-400">Interested prospects click your ad</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-orange-400">80</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-500 rotate-90" />
                </div>

                {/* Conversion */}
                <div className="relative mx-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-xl border border-green-500/20 p-6 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ShoppingBag className="h-8 w-8 text-green-400 mr-4" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Conversions</h3>
                          <p className="text-gray-400">New customers acquired</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-400">8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funnel Explanation */}
            <div className="mt-16 grid lg:grid-cols-2 gap-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-6">The Math That Matters</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Cost per click:</span>
                      <span className="text-blue-400 font-bold">$5.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total ad spend:</span>
                      <span className="text-blue-400 font-bold">$400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">New customers:</span>
                      <span className="text-green-400 font-bold">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Cost per customer:</span>
                      <span className="text-green-400 font-bold">$50</span>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Average customer value:</span>
                        <span className="text-green-400 font-bold">$200</span>
                      </div>
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span className="text-white">ROI:</span>
                        <span className="text-green-400">300%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-green-500/20 p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Scale & Optimize</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Increase Budget</h4>
                        <p className="text-gray-400">More budget = more customers at the same cost</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                        <Target className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Improve Targeting</h4>
                        <p className="text-gray-400">Better targeting = higher conversion rates</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                        <Zap className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Optimize Ads</h4>
                        <p className="text-gray-400">Better ads = lower costs per click</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Real Results from</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">450%</div>
                  <div className="text-gray-300">ROI Increase</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Local HVAC Company</h3>
                <p className="text-gray-300 mb-6">
                  "We went from 2-3 service calls per day to 15-20. Google Ads completely transformed our business."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monthly Revenue:</span>
                    <span className="text-green-400">$45K → $180K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">New Customers/Month:</span>
                    <span className="text-green-400">12 → 85</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-green-500/20 p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">280%</div>
                  <div className="text-gray-300">Revenue Growth</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Family Restaurant</h3>
                <p className="text-gray-300 mb-6">
                  "We were struggling to fill tables. Now we have a waiting list most nights thanks to Google Ads."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Daily Covers:</span>
                    <span className="text-green-400">45 → 170</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Online Orders:</span>
                    <span className="text-green-400">5 → 60/day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-400 mb-2">320%</div>
                  <div className="text-gray-300">Lead Increase</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Law Firm</h3>
                <p className="text-gray-300 mb-6">
                  "Google Ads brought us high-quality leads we never could have reached through referrals alone."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monthly Leads:</span>
                    <span className="text-green-400">8 → 34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Case Value:</span>
                    <span className="text-green-400">$15K avg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to Capture</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Customers?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop letting your competitors steal your customers. Let's get your Google Ads running and start 
            capturing the people who are searching for you right now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onBack}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                Get Your Google Ads Fix
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}