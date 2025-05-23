
import React from 'react';
import { Code, User, Settings, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom AI Prompt Engineering",
      description: "Design and develop sophisticated AI prompts for GPT-4, Claude, and other LLMs to automate complex business processes and decision-making workflows.",
      features: [
        "Advanced prompt design and optimization",
        "GPT-4 and Claude integration",
        "Custom AI workflow automation",
        "Performance monitoring and refinement"
      ],
      technologies: ["GPT-4", "Claude", "Cursor", "Prompt Engineering"]
    },
    {
      icon: Settings,
      title: "Workflow Automation with AI Tools",
      description: "Streamline business operations by implementing AI-driven automation solutions that reduce manual tasks and improve efficiency.",
      features: [
        "Vendor communication automation",
        "Document processing and analysis",
        "Data extraction and reporting",
        "Integration with existing systems"
      ],
      technologies: ["Cursor", "Python", "AI APIs", "Automation Frameworks"]
    },
    {
      icon: Briefcase,
      title: "Business Process Analysis & Reporting",
      description: "Comprehensive analysis of business processes with data-driven insights and strategic recommendations for optimization.",
      features: [
        "Tender analysis and bid optimization",
        "Market research and trend forecasting",
        "Performance metrics and KPI tracking",
        "Strategic planning and execution"
      ],
      technologies: ["MS Excel", "Data Analytics", "Business Intelligence", "Python"]
    },
    {
      icon: User,
      title: "UI/UX Design using Figma",
      description: "Create intuitive and engaging user interfaces with modern design principles, focusing on user experience and business goals.",
      features: [
        "Client-facing catalogue design",
        "Marketing collateral creation",
        "User experience optimization",
        "Responsive design implementation"
      ],
      technologies: ["Figma", "Adobe Suite", "UI/UX Design", "Prototyping"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions combining AI expertise, business analysis, and technical implementation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how AI tools and strategic analysis can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
              { step: "02", title: "Strategy", description: "Developing a tailored AI and automation strategy" },
              { step: "03", title: "Implementation", description: "Building and deploying solutions with precision" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
