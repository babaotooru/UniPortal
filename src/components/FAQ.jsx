'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'How do I search for schools on UniPortal?',
        answer:
            'Use our search bar and filters to find schools by name, city, curriculum, and rating. You can also browse our featured schools to get started.',
    },
    {
        question: 'Are the school reviews authentic?',
        answer:
            'Yes! All reviews on UniPortal are verified and come from real parents and students. We maintain strict quality standards to ensure authenticity.',
    },
    {
        question: 'Can I compare multiple schools?',
        answer:
            'Absolutely! You can add multiple schools to your comparison list and view their features, fees, and ratings side by side.',
    },
    {
        question: 'How often is school information updated?',
        answer:
            'We update school information regularly. Schools can also update their own information, and we verify all changes to maintain accuracy.',
    },
    {
        question: 'Is there a fee for using UniPortal?',
        answer:
            'UniPortal is completely free for parents and students. We generate revenue through partnerships with schools, not by charging users.',
    },
    {
        question: 'How can I contact a school directly?',
        answer:
            'Each school listing includes contact information. You can call, email, or visit the school directly using the details provided.',
    },
];

function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-400">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-white hover:bg-gray-50 transition text-left"
                aria-expanded={isOpen}
                aria-label={`Toggle question: ${faq.question}`}
            >
                <h3 className="font-bold text-gray-900 text-sm sm:text-base flex-1">{faq.question}</h3>
                <ChevronDown
                    size={20}
                    className={`text-blue-600 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            {isOpen && (
                <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-16 sm:py-24 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Find answers to common questions about UniPortal and school search.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}