'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { cities, curricula } from '../data/schools';

export default function Filters({ onFilterChange }) {
    const [filters, setFilters] = useState({
        city: '',
        curriculum: '',
        minRating: 0,
        maxFees: 10000000,
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange && onFilterChange(newFilters);
    };

    const resetFilters = () => {
        setFilters({
            city: '',
            curriculum: '',
            minRating: 0,
            maxFees: 10000000,
        });
    };

    return (
        <div className="w-full">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4 flex justify-between items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                    <Filter size={20} />
                    Filters
                </button>
                <span className="text-sm text-gray-600">Filter Results</span>
            </div>

            {/* Filters */}
            <div
                className={`grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-md transition-all ${isOpen ? 'block' : 'hidden md:grid'
                    }`}
            >
                {/* City Filter */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City
                    </label>
                    <select
                        value={filters.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        aria-label="Filter by city"
                    >
                        <option value="">All Cities</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Curriculum Filter */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Curriculum
                    </label>
                    <select
                        value={filters.curriculum}
                        onChange={(e) => handleChange('curriculum', e.target.value)}
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        aria-label="Filter by curriculum"
                    >
                        <option value="">All Curricula</option>
                        {curricula.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Rating Filter */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Minimum Rating
                    </label>
                    <select
                        value={filters.minRating}
                        onChange={(e) => handleChange('minRating', parseFloat(e.target.value))}
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        aria-label="Filter by minimum rating"
                    >
                        <option value={0}>All Ratings</option>
                        <option value={4.0}>4.0 & above</option>
                        <option value={4.5}>4.5 & above</option>
                        <option value={4.7}>4.7 & above</option>
                    </select>
                </div>

                {/* Reset Button */}
                <div className="flex items-end">
                    <button
                        onClick={resetFilters}
                        className="w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg transition"
                        aria-label="Reset filters"
                    >
                        <X size={18} />
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}