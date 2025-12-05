
import React from 'react';
import { CheckCircle, Shield, Star, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Banner */}
            <div className="bg-brand-navy py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">About Vasu Nath Enterprises</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Building lasting relationships through quality, integrity, and reliable service since inception.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-navy mb-6">Who We Are</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Vasu Nath Enterprises is a premier provider of office automation and IT infrastructure solutions. 
                            We specialize in equipping modern businesses, educational institutions, and government organizations 
                            with top-tier hardware including network printers, digital copiers, high-speed scanners, desktops, 
                            and laptops.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our commitment extends beyond just sales; we believe in empowering our clients with technology 
                            that drives efficiency and growth. With a robust supply chain and dedicated support, we ensure 
                            your operations never stop.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-center">
                                <CheckCircle className="h-6 w-6 text-brand-orange mr-3" />
                                <span className="font-medium text-brand-navy">Pan India Delivery</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-6 w-6 text-brand-orange mr-3" />
                                <span className="font-medium text-brand-navy">24x7 Support</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-6 w-6 text-brand-orange mr-3" />
                                <span className="font-medium text-brand-navy">Premium Brands</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-6 w-6 text-brand-orange mr-3" />
                                <span className="font-medium text-brand-navy">Expert Consultation</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                            alt="Team Meeting" 
                            className="rounded-lg shadow-2xl z-10 relative"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-brand-orange p-8 rounded-lg hidden md:block">
                            <p className="text-white font-bold text-4xl">100%</p>
                            <p className="text-white/90">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="bg-brand-light py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy">Our Core Values</h2>
                        <p className="mt-4 text-gray-600">The pillars that define our business ethics.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard 
                            icon={<Shield className="h-10 w-10 text-brand-navy" />}
                            title="Integrity"
                            desc="We conduct our business with the highest standards of honesty and transparency."
                        />
                        <ValueCard 
                            icon={<Star className="h-10 w-10 text-brand-navy" />}
                            title="Quality"
                            desc="We never compromise on the quality of products we deliver to our clients."
                        />
                        <ValueCard 
                            icon={<Users className="h-10 w-10 text-brand-navy" />}
                            title="Reliability"
                            desc="You can count on us for timely deliveries and consistent support."
                        />
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-navy py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Ready to upgrade your infrastructure?</h2>
                    <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
                        <Link to="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const ValueCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-brand-navy mb-3">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

export default About;
