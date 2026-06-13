import { Search, CheckCircle, TrendingUp, Award } from 'lucide-react';

const features = [
    {
        icon: Search,
        title: 'Comprehensive Search',
        description: 'Filter schools by location, curriculum, fees, and ratings to find the perfect match.',
    },
    {
        icon: CheckCircle,
        title: 'Verified Information',
        description: 'All school data is verified and updated regularly for accuracy and reliability.',
    },
    {
        icon: TrendingUp,
        title: 'Real Reviews',
        description: 'Read genuine reviews from parents and students to make informed decisions.',
    },
    {
        icon: Award,
        title: 'Expert Guidance',
        description: 'Get personalized recommendations from education experts available 24/7.',
    },
];

export default function WhyChooseUs() {
    return (
        <section id="features" className="py-16 sm:py-24 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UniPortal?</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We make finding the right school easy, transparent, and stress-free.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}