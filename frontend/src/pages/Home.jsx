
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, ShieldCheck, Server, Printer, Laptop, Database } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { PRODUCTS } from '../lib/constants';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-brand-navy py-20 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1920&q=80" 
                        alt="IT Infrastructure" 
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                            Welcome to <br/>
                            <span className="text-brand-orange">Vasu Nath Enterprises</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                            Complete Office & IT Hardware Solutions for Modern Workspaces. 
                            We empower your business with reliable technology infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600 text-white font-semibold">
                                <Link to="/contact">
                                    Get a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-navy">
                                <Link to="/products">View Products</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories Preview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy">Our Solutions</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive range of hardware solutions tailored for your business needs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CategoryCard 
                            icon={<Printer className="h-10 w-10 text-brand-orange" />} 
                            title="Heavy Duty Printers" 
                            desc="High-volume printing for busy offices."
                        />
                        <CategoryCard 
                            icon={<Laptop className="h-10 w-10 text-brand-orange" />} 
                            title="Desktops & PCs" 
                            desc="Powerful workstations for productivity."
                        />
                        <CategoryCard 
                            icon={<Database className="h-10 w-10 text-brand-orange" />} 
                            title="Storage Solutions" 
                            desc="Secure hard disks and server storage."
                        />
                        <CategoryCard 
                            icon={<Server className="h-10 w-10 text-brand-orange" />} 
                            title="IT Consumables" 
                            desc="Genuine ink, toner, and accessories."
                        />
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-16 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:gap-12">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <img 
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                                alt="Office Team" 
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-brand-navy mb-6">Trusted Since Day One</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                We are a trusted supplier of network printers, digital copiers, high-speed scanners, 
                                and IT hardware, serving clients across India with timely delivery and unmatched quality.
                            </p>
                            <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                                <Link to="/about">Learn More About Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                        <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                            <Truck className="h-16 w-16 text-brand-orange mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Pan India Delivery</h3>
                            <p className="text-gray-300">Reliable logistics network ensuring your hardware reaches you anywhere in India.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                            <Clock className="h-16 w-16 text-brand-orange mb-4" />
                            <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                            <p className="text-gray-300">Dedicated technical support team available round the clock for your peace of mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">Stay Updated</h2>
                    <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest IT trends and product offers.</p>
                    <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <Input type="text" placeholder="Your Name" className="bg-gray-50" />
                        <Input type="email" placeholder="Your Email" className="bg-gray-50" />
                        <Button type="submit" className="bg-brand-orange hover:bg-orange-600 text-white">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
};

const CategoryCard = ({ icon, title, desc }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-none bg-gray-50">
        <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
        </CardContent>
    </Card>
);

export default Home;
