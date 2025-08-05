'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SignInModal from '@/components/SignInModal';
import Link from 'next/link';

const allProjects = [
  {
    id: 1,
    title: "AI-Powered Customer Support Dashboard",
    company: "TechFlow AI",
    logo: "https://readdy.ai/api/search-image?query=Modern%20tech%20startup%20logo%20design%2C%20AI%20company%20branding%2C%20blue%20and%20purple%20gradient%2C%20clean%20minimalist%20logo%2C%20technology%20symbol&width=80&height=80&seq=logo-1&orientation=squarish",
    tags: ["AI/ML", "Frontend", "React"],
    duration: "3 months",
    stipend: "₹15,000",
    description: "Build an intelligent customer support dashboard using machine learning to categorize and prioritize tickets. Work with cutting-edge AI technologies and gain hands-on experience in machine learning applications.",
    remote: true,
    category: "Technology",
    skills: ["React", "Python", "TensorFlow", "API Integration"],
    postedDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Mobile App UI/UX Redesign",
    company: "FoodieHub",
    logo: "https://readdy.ai/api/search-image?query=Food%20delivery%20app%20logo%20design%2C%20modern%20restaurant%20branding%2C%20orange%20and%20red%20colors%2C%20food%20industry%20logo%2C%20clean%20design&width=80&height=80&seq=logo-2&orientation=squarish",
    tags: ["UI/UX", "Figma", "Mobile"],
    duration: "2 months",
    stipend: "₹12,000",
    description: "Redesign the user interface for a food delivery mobile application to improve user engagement and conversion rates. Focus on user research, wireframing, and creating intuitive designs.",
    remote: true,
    category: "Design",
    skills: ["Figma", "User Research", "Prototyping", "Mobile Design"],
    postedDate: "2024-01-12"
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    company: "GreenTech Solutions",
    logo: "https://readdy.ai/api/search-image?query=Environmental%20technology%20company%20logo%2C%20green%20energy%20startup%20branding%2C%20eco-friendly%20design%2C%20leaf%20and%20tech%20combination%2C%20sustainable%20business%20logo&width=80&height=80&seq=logo-3&orientation=squarish",
    tags: ["Marketing", "Social Media", "Analytics"],
    duration: "2 months",
    stipend: "₹10,000",
    description: "Create and execute digital marketing strategies for sustainable technology products. Learn about content marketing, social media management, and performance analytics.",
    remote: false,
    category: "Marketing",
    skills: ["Social Media", "Content Creation", "Google Analytics", "SEO"],
    postedDate: "2024-01-10"
  },
  {
    id: 4,
    title: "Blockchain Payment Integration",
    company: "CryptoCommerce",
    logo: "https://readdy.ai/api/search-image?query=Cryptocurrency%20fintech%20startup%20logo%2C%20blockchain%20technology%20branding%2C%20gold%20and%20black%20colors%2C%20modern%20financial%20logo%20design&width=80&height=80&seq=logo-4&orientation=squarish",
    tags: ["Blockchain", "Backend", "Web3"],
    duration: "4 months",
    stipend: "₹20,000",
    description: "Integrate blockchain-based payment systems into existing e-commerce platform. Gain experience with Web3 technologies, smart contracts, and cryptocurrency payments.",
    remote: true,
    category: "Technology",
    skills: ["Solidity", "Web3.js", "Node.js", "Smart Contracts"],
    postedDate: "2024-01-08"
  },
  {
    id: 5,
    title: "Data Analytics Dashboard",
    company: "DataInsights Pro",
    logo: "https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%2C%20business%20intelligence%20branding%2C%20charts%20and%20graphs%20symbol%2C%20professional%20corporate%20logo%2C%20blue%20and%20gray%20colors&width=80&height=80&seq=logo-5&orientation=squarish",
    tags: ["Data Science", "Python", "Visualization"],
    duration: "3 months",
    stipend: "₹18,000",
    description: "Build comprehensive analytics dashboard for business intelligence reporting. Work with large datasets, create visualizations, and develop insights for business decisions.",
    remote: true,
    category: "Data Science",
    skills: ["Python", "Pandas", "Tableau", "SQL"],
    postedDate: "2024-01-05"
  },
  {
    id: 6,
    title: "Content Management System",
    company: "MediaFlow",
    logo: "https://readdy.ai/api/search-image?query=Media%20content%20management%20startup%20logo%2C%20publishing%20industry%20branding%2C%20creative%20design%20elements%2C%20modern%20media%20company%20logo&width=80&height=80&seq=logo-6&orientation=squarish",
    tags: ["Full Stack", "CMS", "Node.js"],
    duration: "4 months",
    stipend: "₹22,000",
    description: "Develop a custom content management system for digital media publishing. Learn full-stack development, database design, and content workflow management.",
    remote: false,
    category: "Technology",
    skills: ["Node.js", "MongoDB", "React", "REST APIs"],
    postedDate: "2024-01-03"
  },
  {
    id: 7,
    title: "E-commerce Platform Development",
    company: "ShopSmart",
    logo: "https://readdy.ai/api/search-image?query=E-commerce%20startup%20logo%20design%2C%20online%20shopping%20platform%20branding%2C%20modern%20retail%20logo%2C%20shopping%20cart%20symbol&width=80&height=80&seq=logo-7&orientation=squarish",
    tags: ["Full Stack", "E-commerce", "Payment"],
    duration: "5 months",
    stipend: "₹25,000",
    description: "Build a complete e-commerce platform from scratch including product catalog, shopping cart, payment integration, and admin panel.",
    remote: true,
    category: "Technology",
    skills: ["React", "Node.js", "Stripe", "MongoDB"],
    postedDate: "2024-01-01"
  },
  {
    id: 8,
    title: "Brand Identity Design",
    company: "StartupLab",
    logo: "https://readdy.ai/api/search-image?query=Creative%20agency%20startup%20logo%2C%20brand%20design%20company%20logo%2C%20colorful%20artistic%20branding%2C%20design%20studio%20identity&width=80&height=80&seq=logo-8&orientation=squarish",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    duration: "2 months",
    stipend: "₹14,000",
    description: "Create comprehensive brand identity for new startup including logo design, color palette, typography, and brand guidelines.",
    remote: true,
    category: "Design",
    skills: ["Adobe Illustrator", "Brand Strategy", "Typography", "Color Theory"],
    postedDate: "2023-12-28"
  }
];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [remoteFilter, setRemoteFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['Technology', 'Design', 'Marketing', 'Data Science'];
  const allSkills = Array.from(new Set(allProjects.flatMap(project => project.skills))).sort();

  const applyFilters = () => {
    let filtered = allProjects;

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (selectedSkill) {
      filtered = filtered.filter(project => project.skills.includes(selectedSkill));
    }

    if (remoteFilter) {
      filtered = filtered.filter(project => 
        remoteFilter === 'remote' ? project.remote : !project.remote
      );
    }

    if (durationFilter) {
      filtered = filtered.filter(project => {
        const months = parseInt(project.duration);
        if (durationFilter === 'short') return months <= 2;
        if (durationFilter === 'medium') return months >= 3 && months <= 4;
        if (durationFilter === 'long') return months >= 5;
        return true;
      });
    }

    setFilteredProjects(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSkill('');
    setRemoteFilter('');
    setDurationFilter('');
    setFilteredProjects(allProjects);
  };

  const handleApplyClick = (projectId: number) => {
    document.getElementById('signin-modal')?.classList.remove('hidden');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover exciting opportunities to work with innovative startups and build real-world experience
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button 
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Projects
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, company..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skills Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <select 
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                >
                  <option value="">All Skills</option>
                  {allSkills.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>

              {/* Remote Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="remote"
                      value="remote"
                      checked={remoteFilter === 'remote'}
                      onChange={(e) => setRemoteFilter(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Remote</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="remote"
                      value="onsite"
                      checked={remoteFilter === 'onsite'}
                      onChange={(e) => setRemoteFilter(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">On-site</span>
                  </label>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      value="short"
                      checked={durationFilter === 'short'}
                      onChange={(e) => setDurationFilter(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">1-2 months</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      value="medium"
                      checked={durationFilter === 'medium'}
                      onChange={(e) => setDurationFilter(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">3-4 months</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      value="long"
                      checked={durationFilter === 'long'}
                      onChange={(e) => setDurationFilter(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">5+ months</span>
                  </label>
                </div>
              </div>

              <button 
                onClick={applyFilters}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredProjects.length} projects found
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''} cursor-pointer`}
                  >
                    <i className="ri-grid-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''} cursor-pointer`}
                  >
                    <i className="ri-list-check w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <img 
                        src={project.logo} 
                        alt={`${project.company} logo`}
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">{project.title}</h3>
                        <p className="text-gray-600">{project.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {project.duration}
                      </span>
                      <span className="flex items-center">
                        <i className={`ri-${project.remote ? 'home' : 'building'}-line w-4 h-4 flex items-center justify-center mr-1`}></i>
                        {project.remote ? 'Remote' : 'On-site'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">{project.stipend}</span>
                      <button 
                        onClick={() => handleApplyClick(project.id)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center flex-1">
                        <img 
                          src={project.logo} 
                          alt={`${project.company} logo`}
                          className="w-16 h-16 rounded-lg object-cover mr-6"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 text-xl">{project.title}</h3>
                            <span className="text-xl font-bold text-green-600">{project.stipend}</span>
                          </div>
                          <p className="text-gray-600 mb-3">{project.company}</p>
                          <p className="text-gray-700 mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-1"></i>
                                {project.duration}
                              </span>
                              <span className="flex items-center">
                                <i className={`ri-${project.remote ? 'home' : 'building'}-line w-4 h-4 flex items-center justify-center mr-1`}></i>
                                {project.remote ? 'Remote' : 'On-site'}
                              </span>
                            </div>
                            <button 
                              onClick={() => handleApplyClick(project.id)}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <SignInModal />
    </div>
  );
}