import { Mail, Phone, Heart } from 'lucide-react';

const footerLinks = {
    Company: ['About Us', 'Blog', 'Careers', 'Contact'],
    Help: ['FAQ', 'Support', 'Terms', 'Privacy'],
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                                UP
                            </div>
                            <h3 className="text-2xl font-bold text-white">UniPortal</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Making school search simple and transparent for every family.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail size={18} className="text-blue-400" />
                                <a href="mailto:support@uniportal.com" className="hover:text-white transition">
                                    support@uniportal.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={18} className="text-blue-400" />
                                <a href="tel:+911800123456" className="hover:text-white transition">
                                    +91 1800-123-456
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.Company.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Help & Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.Help.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-sm font-bold"
                                aria-label="Follow UniPortal on Facebook"
                            >
                                f
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-xs"
                                aria-label="Follow UniPortal on Twitter"
                            >
                                𝕏
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-sm"
                                aria-label="Follow UniPortal on Instagram"
                            >
                                📷
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-xs"
                                aria-label="Follow UniPortal on LinkedIn"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <p className="text-gray-400">
                            © 2024 UniPortal. All rights reserved. | Made with <Heart size={14} className="inline text-red-500 mx-1" /> for better education.
                        </p>
                        <div className="flex gap-6 sm:justify-end text-gray-400">
                            <a href="#" className="hover:text-white transition">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}