'use client';

import { Star, MapPin, BookOpen, Award } from 'lucide-react';

export default function SchoolCard({ school }) {
    const handleImageError = (e) => {
        e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop';
    };

    return (
        <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full flex flex-col">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-200">
                {school.featured && (
                    <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Award size={14} />
                        Featured
                    </div>
                )}
                <img
                    src={school.image}
                    alt={school.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex-grow flex flex-col">
                {/* School Name */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {school.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-600 mb-3 text-sm">
                    <MapPin size={16} className="text-blue-600" />
                    <span>
                        {school.city}, {school.state}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < Math.floor(school.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                            />
                        ))}
                    </div>
                    <span className="font-semibold text-gray-900">{school.rating}</span>
                    <span className="text-xs text-gray-500">({school.reviews} reviews)</span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 py-3 border-t border-b border-gray-100 text-sm">
                    <div>
                        <p className="text-gray-600 text-xs font-medium">Fees/Year</p>
                        <p className="text-gray-900 font-bold">{school.fees}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-xs font-medium">Curriculum</p>
                        <p className="text-gray-900 font-bold text-xs">{school.curriculum}</p>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                    <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>Est. {school.established}</span>
                    </div>
                    <span>{school.affiliation}</span>
                </div>
            </div>

            {/* Action Button */}
            <div className="px-4 sm:px-5 pb-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Details
                </button>
            </div>
        </article>
    );
}