'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20startup%20office%20environment%20with%20young%20professionals%20working%20on%20laptops%2C%20collaborative%20workspace%20with%20glass%20walls%2C%20natural%20lighting%2C%20minimalist%20design%2C%20tech%20company%20atmosphere%2C%20diverse%20team%20of%20students%20and%20mentors%20collaborating%20on%20projects%2C%20clean%20white%20and%20blue%20color%20scheme&width=1200&height=600&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Real Projects with <span className="text-yellow-300">Startups</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Get experience. Get noticed. Get ahead.
            </p>
            <p className="text-lg mb-10 text-blue-100">
              Connect with innovative startups, work on real projects, and gain valuable experience while building your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/browse" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors text-center whitespace-nowrap cursor-pointer">
                Browse Projects
              </Link>
              <button 
                onClick={() => document.getElementById('signin-modal')?.classList.remove('hidden')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20diverse%20students%20working%20together%20on%20laptops%20and%20tablets%20in%20modern%20co-working%20space%2C%20startup%20internship%20environment%2C%20mentorship%20and%20learning%2C%20professional%20development%2C%20clean%20modern%20workspace%20with%20natural%20lighting&width=500&height=400&seq=hero-side&orientation=landscape"
                alt="Students working on projects"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}