'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="font-['Pacifico'] text-2xl text-blue-600">StartupChaser</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-gray-700 hover:text-blue-600 font-medium">
              Browse Projects
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
              How It Works
            </Link>
            <Link href="/for-startups" className="text-gray-700 hover:text-blue-600 font-medium">
              For Startups
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => document.getElementById('signin-modal')?.classList.remove('hidden')}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer"
            >
              Sign In
            </button>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer">
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/browse" className="text-gray-700 hover:text-blue-600 font-medium">
                Browse Projects
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
                How It Works
              </Link>
              <Link href="/for-startups" className="text-gray-700 hover:text-blue-600 font-medium">
                For Startups
              </Link>
              <button 
                onClick={() => document.getElementById('signin-modal')?.classList.remove('hidden')}
                // href="/sign-in"
                className="text-gray-700 hover:text-blue-600 font-medium text-left cursor-pointer"
              >
                Sign In
              </button>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium text-center cursor-pointer">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}