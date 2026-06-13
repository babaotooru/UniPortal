'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import SchoolCard from '../components/SchoolCard';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { schools } from '../data/schools';

export default function Home() {
  const [filters, setFilters] = useState({
    city: '',
    curriculum: '',
    minRating: 0,
    maxFees: 10000000,
  });

  const filteredSchools = schools.filter((school) => {
    if (filters.city && school.city !== filters.city) return false;
    if (filters.curriculum && school.curriculum !== filters.curriculum) return false;
    if (school.rating < filters.minRating) return false;
    return true;
  });

  return (
    <main className="bg-white">
      <Header />
      <Hero />

      {/* Schools Section */}
      <section id="schools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Filters */}
        <Filters onFilterChange={setFilters} />

        {/* Results Info */}
        <div className="mt-8 mb-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing <span className="font-bold text-gray-900">{filteredSchools.length}</span> out of{' '}
            <span className="font-bold text-gray-900">{schools.length}</span> schools
          </p>
        </div>

        {/* School Cards Grid */}
        {filteredSchools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-2">No schools found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}