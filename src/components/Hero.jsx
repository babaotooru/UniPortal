'use client';

import { Search, Star } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-16 sm:py-24 px-4 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full">
                        <p className="text-sm font-semibold">🎓 Finding Your Perfect School</p>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Discover Your Ideal School
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 mb-2">
                        Compare schools, fees, ratings, and curricula in one place
                    </p>
                    <p className="text-md text-blue-100 flex items-center justify-center gap-2">
                        <Star size={18} className="text-yellow-300" />
                        Trusted by 50,000+ parents
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                        <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search school by name or city..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                            aria-label="Search schools"
                        />
                    </div>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-6 sm:px-8 py-3 rounded-lg transition transform hover:scale-105 whitespace-nowrap">
                        Search
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-center">
                    <div>
                        <p className="text-3xl font-bold">2000+</p>
                        <p className="text-blue-100 text-sm">Schools</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">50K+</p>
                        <p className="text-blue-100 text-sm">Users</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">100%</p>
                        <p className="text-blue-100 text-sm">Verified</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">24/7</p>
                        <p className="text-blue-100 text-sm">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}