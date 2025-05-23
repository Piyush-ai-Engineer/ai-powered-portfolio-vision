
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img
              src="/lovable-uploads/e82903fb-be78-464e-ad82-67de0e833ae9.png"
              alt="Piyush Kumar"
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white/50 object-cover hover-scale"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Piyush Kumar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            AI-Powered Thinker | Prompt Engineer | Business Analyst
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
            Innovative Business Development Analyst with 3+ years of experience in deploying AI tools 
            to automate workflows, enhance decision-making, and drive revenue growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg"
            >
              Explore My Work
            </button>
            <Link
              to="/contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all"
            >
              Get In Touch
            </Link>
          </div>
          
          <button
            onClick={scrollToProjects}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="featured-projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Showcasing my expertise in AI tools and business analysis</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Driven Resume Analyzer */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-scale border border-white/20">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Driven Resume Analyzer</h3>
              <p className="text-gray-600 mb-4">Built using GPT-4 and prompt engineering to automate resume viewing and scoring, reducing review time by 40%.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">GPT-4</span>
              </div>
            </div>

            {/* Smart Real Estate System */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-scale border border-white/20">
              <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">ML</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Real Estate Valuation</h3>
              <p className="text-gray-600 mb-4">Machine learning models to predict property prices with 92% accuracy, enhancing platform usability.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              </div>
            </div>

            {/* Emergency SOS App */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-scale border border-white/20">
              <div className="h-12 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">SOS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency SOS Mobile App</h3>
              <p className="text-gray-600 mb-4">GPS-based emergency alert system reducing response latency by 20% through optimized code.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Mobile</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
          <p className="text-lg text-gray-600 mb-12">Technologies and tools I excel at</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900">AI Tools</h3>
              <p className="text-sm text-gray-600">GPT-4, Claude, Cursor</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">UX</span>
              </div>
              <h3 className="font-semibold text-gray-900">Design</h3>
              <p className="text-sm text-gray-600">Figma, UI/UX</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">BA</span>
              </div>
              <h3 className="font-semibold text-gray-900">Business Analysis</h3>
              <p className="text-sm text-gray-600">Strategy & Research</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">DEV</span>
              </div>
              <h3 className="font-semibold text-gray-900">Development</h3>
              <p className="text-sm text-gray-600">Python, Java, Web</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
