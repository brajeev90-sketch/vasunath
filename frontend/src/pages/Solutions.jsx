
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { SOLUTIONS } from '../lib/constants';

const Solutions = () => {
    return (
        <div className="min-h-screen bg-brand-light">
            {/* Header */}
            <div className="bg-brand-navy py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Our Solutions</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Tailored IT frameworks designed to optimize your operational efficiency.
                    </p>
                </div>
            </div>

            {/* Solutions List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                {SOLUTIONS.map((solution, index) => (
                    <div key={solution.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-orange rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
                                <img 
                                    src={solution.image} 
                                    alt={solution.title} 
                                    className="relative rounded-lg shadow-xl w-full h-64 lg:h-96 object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-brand-navy mb-4">{solution.title}</h2>
                            <p className="text-gray-600 text-lg mb-6">{solution.description}</p>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                                <h3 className="font-semibold text-brand-navy mb-4">Key Features:</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-600">
                                            <span className="h-2 w-2 bg-brand-orange rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button asChild className="bg-brand-navy hover:bg-blue-900 text-white">
                                <Link to="/contact">Inquire About This</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
