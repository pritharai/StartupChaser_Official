'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Support Dashboard",
    company: "TechFlow AI",
    logo: "https://readdy.ai/api/search-image?query=Modern%20tech%20startup%20logo%20design%2C%20AI%20company%20branding%2C%20blue%20and%20purple%20gradient%2C%20clean%20minimalist%20logo%2C%20technology%20symbol&width=80&height=80&seq=logo-1&orientation=squarish",
    tags: ["AI/ML", "Frontend", "React"],
    duration: "3 months",
    stipend: "₹15,000",
    description: "Build an intelligent customer support dashboard using machine learning to categorize and prioritize tickets.",
    remote: true
  },
  {
    id: 2,
    title: "Mobile App UI/UX Redesign",
    company: "FoodieHub",
    logo: "https://readdy.ai/api/search-image?query=Food%20delivery%20app%20logo%20design%2C%20modern%20restaurant%20branding%2C%20orange%20and%20red%20colors%2C%20food%20industry%20logo%2C%20clean%20design&width=80&height=80&seq=logo-2&orientation=squarish",
    tags: ["UI/UX", "Figma", "Mobile"],
    duration: "2 months",
    stipend: "₹12,000",
    description: "Redesign the user interface for a food delivery mobile application to improve user engagement.",
    remote: true
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    company: "GreenTech Solutions",
    logo: "https://readdy.ai/api/search-image?query=Environmental%20technology%20company%20logo%2C%20green%20energy%20startup%20branding%2C%20eco-friendly%20design%2C%20leaf%20and%20tech%20combination%2C%20sustainable%20business%20logo&width=80&height=80&seq=logo-3&orientation=squarish",
    tags: ["Marketing", "Social Media", "Analytics"],
    duration: "2 months",
    stipend: "₹10,000",
    description: "Create and execute digital marketing strategies for sustainable technology products.",
    remote: false
  },
  {
    id: 4,
    title: "Blockchain Payment Integration",
    company: "CryptoCommerce",
    logo: "https://readdy.ai/api/search-image?query=Cryptocurrency%20fintech%20startup%20logo%2C%20blockchain%20technology%20branding%2C%20gold%20and%20black%20colors%2C%20modern%20financial%20logo%20design&width=80&height=80&seq=logo-4&orientation=squarish",
    tags: ["Blockchain", "Backend", "Web3"],
    duration: "4 months",
    stipend: "₹20,000",
    description: "Integrate blockchain-based payment systems into existing e-commerce platform.",
    remote: true
  },
  {
    id: 5,
    title: "Data Analytics Dashboard",
    company: "DataInsights Pro",
    logo: "https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%2C%20business%20intelligence%20branding%2C%20charts%20and%20graphs%20symbol%2C%20professional%20corporate%20logo%2C%20blue%20and%20gray%20colors&width=80&height=80&seq=logo-5&orientation=squarish",
    tags: ["Data Science", "Python", "Visualization"],
    duration: "3 months",
    stipend: "₹18,000",
    description: "Build comprehensive analytics dashboard for business intelligence reporting.",
    remote: true
  },
  {
    id: 6,
    title: "Content Management System",
    company: "MediaFlow",
    logo: "https://readdy.ai/api/search-image?query=Media%20content%20management%20startup%20logo%2C%20publishing%20industry%20branding%2C%20creative%20design%20elements%2C%20modern%20media%20company%20logo&width=80&height=80&seq=logo-6&orientation=squarish",
    tags: ["Full Stack", "CMS", "Node.js"],
    duration: "4 months",
    stipend: "₹22,000",
    description: "Develop a custom content management system for digital media publishing.",
    remote: false
  }
];

export default function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide;
    return projects.slice(start, start + projectsPerSlide);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting opportunities to work with innovative startups and build real-world experience
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentProjects().map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={project.logo} 
                    alt={`${project.company} logo`}
                    className="w-12 h-12 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{project.title}</h3>
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
                  <Link href="/browse" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
              disabled={currentSlide === 0}
            >
              <i className="ri-arrow-left-line text-gray-600"></i>
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
              disabled={currentSlide === totalSlides - 1}
            >
              <i className="ri-arrow-right-line text-gray-600"></i>
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/browse" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}