
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Driven Resume Analyzer",
      category: "ai",
      role: "Lead Developer",
      year: "2024",
      tools: ["Python", "GPT-4", "Prompt Engineering"],
      description: "Built a tool using GPT-4 and prompt engineering to automate Resume viewing and generating a score helped industry, reducing review time by 40%.",
      impact: "40% reduction in review time",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Smart Real Estate Valuation System",
      category: "ml",
      role: "Data Scientist",
      year: "2021-2022",
      tools: ["Java", "Python", "Machine Learning"],
      description: "Integrated machine learning models to predict property prices with 92% accuracy, enhancing platform usability.",
      impact: "92% accuracy in price prediction",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Emergency SOS Mobile App",
      category: "mobile",
      role: "Mobile Developer",
      year: "2021-2022",
      tools: ["Java", "GPS", "Mobile Development"],
      description: "Developed a GPS-based emergency alert system, reducing response latency by 20% through optimized code.",
      impact: "20% reduction in response latency",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Tender Analysis Automation",
      category: "business",
      role: "Business Analyst",
      year: "2022-Present",
      tools: ["GPT-4", "Claude", "Data Analytics"],
      description: "Leveraged GPT-4 and Claude to automate tender analysis, improving bid success rates by 20%.",
      impact: "20% improvement in bid success",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "AI-Driven Workflow Automation",
      category: "ai",
      role: "Automation Specialist",
      year: "2022-Present",
      tools: ["Cursor", "Workflow Automation", "AI"],
      description: "Streamlined vendor communication using Cursor for AI-driven workflow automation, reducing manual tasks by 35%.",
      impact: "35% reduction in manual tasks",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Client Engagement Platform",
      category: "business",
      role: "UX Designer",
      year: "2022-Present",
      tools: ["Figma", "UI/UX", "Client Research"],
      description: "Designed client-facing catalogues and marketing collateral using Figma, boosting engagement by 25%.",
      impact: "25% boost in engagement",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'business', name: 'Business' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ml', name: 'Machine Learning' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions in AI, business analysis, and software development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/60 text-gray-700 hover:bg-white/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover-scale border border-white/20 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{project.role}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-green-600">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
