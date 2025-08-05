'use client'

import Header from '@/components/Header';

export default function signin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-md mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign In</h1>
        <form className="bg-white p-8 rounded-xl">
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Password</span>
              <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </label>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Sign In
            </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
        </div>
  )
}
  
