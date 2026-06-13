'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        UP
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        UniPortal
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#schools" className="text-gray-700 hover:text-blue-600 transition">
                        Schools
                    </a>
                    <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
                        Why UniPortal
                    </a>
                    <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">
                        FAQ
                    </a>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
                        <div className="flex flex-col p-4 space-y-4">
                            <a href="#schools" className="text-gray-700 hover:text-blue-600">
                                Schools
                            </a>
                            <a href="#features" className="text-gray-700 hover:text-blue-600">
                                Why UniPortal
                            </a>
                            <a href="#faq" className="text-gray-700 hover:text-blue-600">
                                FAQ
                            </a>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg w-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
