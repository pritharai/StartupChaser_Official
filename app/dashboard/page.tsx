'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SignInModal from '@/components/SignInModal';
import Link from 'next/link';

const dashboardData = [
  {
    id: 1,
    title: 'Your Applied Projects',
    count: 6,
  },
  {
    id: 2,
    title: 'Recommended for You',
    count: 3,
  },
  {
    id: 3,
    title: 'Saved Projects',
    count: 2,
  },
  {
    id: 4,
    title: 'Sessions Scheduled',
    count: 1,
  },
];

const recentActivity = [
  {
    id: 1,
    action: 'Applied to "AI-Powered Customer Support Dashboard"',
    time: '2 days ago',
  },
  {
    id: 2,
    action: 'Saved "Blockchain Payment Integration" for later',
    time: '4 days ago',
  },
  {
    id: 3,
    action: 'Viewed "Mobile App UI/UX Redesign" details',
    time: '1 week ago',
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {dashboardData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
              <h2 className="text-gray-600 text-sm mb-2">{item.title}</h2>
              <p className="text-3xl font-bold text-blue-600">{item.count}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="text-sm text-gray-700">
                <span className="font-medium text-blue-600">{activity.action}</span>
                <span className="block text-gray-500 text-xs">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SignInModal/>
    </div>
  );
}
