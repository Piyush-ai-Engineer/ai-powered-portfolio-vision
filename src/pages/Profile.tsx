
import React from 'react';
import { Download, Calendar, MapPin, Phone, Mail, Code } from 'lucide-react';

const Profile = () => {
  const skills = [
    { name: "AI Tools & Frameworks", level: 95, color: "from-blue-500 to-purple-500" },
    { name: "Prompt Engineering", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "Business Analysis", level: 88, color: "from-green-500 to-blue-500" },
    { name: "Python Programming", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "Java Development", level: 80, color: "from-red-500 to-pink-500" },
    { name: "UI/UX Design (Figma)", level: 82, color: "from-indigo-500 to-purple-500" },
    { name: "Data Analytics", level: 78, color: "from-green-500 to-teal-500" },
    { name: "Communication", level: 92, color: "from-blue-500 to-cyan-500" }
  ];

  const timeline = [
    {
      type: "work",
      title: "Senior Business Development Analyst",
      organization: "NIKE ENERGY PVT LTD.",
      period: "June 2022 - Present",
      location: "Varanasi, India",
      achievements: [
        "Leveraged GPT-4 and Claude to automate tender analysis, improving bid success rates by 20%",
        "Streamlined vendor communication using Cursor for AI-driven workflow automation, reducing manual tasks by 35%",
        "Designed client-facing catalogues and marketing collateral using Figma, boosting engagement by 25%",
        "Spearheaded AI-powered data analytics in MS Excel to optimize production strategies, cutting costs by 15%",
        "Collaborated with global clients to deploy AI solutions for real-time market trend forecasting"
      ]
    },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      organization: "Malla Reddy College of Engineering",
      period: "2018 - 2022",
      location: "Hyderabad, India",
      achievements: [
        "CGPA: 6.8",
        "Specialized in software development and data structures",
        "Completed multiple projects in AI and machine learning"
      ]
    },
    {
      type: "education",
      title: "Intermediate (CBSE)",
      organization: "Shanti Ratna Vidya Mandir",
      period: "2016 - 2018",
      location: "Varanasi, India",
      achievements: [
        "Percentage: 78%",
        "Science stream with focus on Mathematics and Physics"
      ]
    }
  ];

  const awards = [
    {
      title: "1st Prize - National Hackathon",
      description: "AI-powered smart speaker prototype using Raspberry Pi",
      year: "2023"
    },
    {
      title: "2nd Prize - Blind Coding Competition",
      description: "Advanced programming challenge",
      year: "2022"
    },
    {
      title: "Best Speaker Award - Model UN",
      description: "Advocated AI integration in future frameworks",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src="/lovable-uploads/e82903fb-be78-464e-ad82-67de0e833ae9.png"
              alt="Piyush Kumar"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white/50 object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Piyush Kumar
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">AI Tools Expert & Business Development Strategist</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Varanasi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 98344 93835</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>pan.puru.piyush@gmail.com</span>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Professional Bio */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Innovative Business Development Analyst with <strong>3+ years of experience</strong> in deploying 
            AI tools (GPT-4, Claude, Cursor) and prompt engineering to automate workflows, enhance 
            decision-making, and drive revenue growth. Skilled in integrating AI solutions for tender analysis, 
            client engagement, and operational efficiency. Strong technical foundation in Python, Java, and 
            full-stack development, paired with a strategic mindset for business development.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience & Education</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    {item.type === 'work' ? <Briefcase className="h-6 w-6 text-white" /> : <Code className="h-6 w-6 text-white" />}
                  </div>
                  <div className="ml-6 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg flex-1 border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{item.period}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-2">{item.organization}</p>
                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awards & Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-scale border border-white/20">
                <div className="h-12 w-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{award.description}</p>
                <span className="text-blue-600 font-medium text-sm">{award.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold mb-3">AI Tools & Frameworks</h3>
              <p className="text-sm opacity-90">GPT-4, Claude, Cursor, Replit, Lovable, Prompt Engineering</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Programming</h3>
              <p className="text-sm opacity-90">Python, Java, JavaScript, HTML/CSS, SQL</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Business Strategy</h3>
              <p className="text-sm opacity-90">Market Research, Tender Analysis, Cross-functional Collaboration</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Tools</h3>
              <p className="text-sm opacity-90">Figma, MS Excel, Adobe Suite, WordPress, MS Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
