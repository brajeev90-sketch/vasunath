
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Server, Printer, Laptop, Database, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import { HERO_IMAGES } from '../lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        
        setLoading(true);
        try {
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
            await axios.post(`${BACKEND_URL}/api/newsletter`, { name, email });
            
            toast({
                title: "Subscribed!",
                description: "Thank you for subscribing to our newsletter.",
            });
            setEmail('');
            setName('');
        } catch (error) {
            console.error("Newsletter error:", error);
            toast({
                title: "Error",
                description: "Failed to subscribe. Please try again.",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Slider Section */}
            <section className="relative h-[600px] sm:h-[700px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <img 
                            src={HERO_IMAGES[currentImageIndex]} 
                            alt="Vasu Nath Enterprises" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/30"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 drop-shadow-lg">
                            Welcome to <br/>
                            <span className="text-brand-orange">Vasu Nath Enterprises</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
                            Complete Office & IT Hardware Solutions for Modern Workspaces. 
                            We empower your business with reliable technology infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                                <Link to="/contact">
                                    Get a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-brand-navy border-white bg-white hover:bg-gray-100 font-semibold shadow-lg">
                                <Link to="/products">View Products</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Slider Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {HERO_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentImageIndex ? 'bg-brand-orange w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Product Categories Preview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-brand-navy">Our Solutions</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive range of hardware solutions tailored for your business needs.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        <CategoryCard 
                            icon={<Printer className="h-10 w-10 text-brand-orange" />} 
                            title="Heavy Duty Printers" 
                            desc="High-volume printing for busy offices."
                            image="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80"
                        />
                        <CategoryCard 
                            icon={<Laptop className="h-10 w-10 text-brand-orange" />} 
                            title="Desktops & PCs" 
                            desc="Powerful workstations for productivity."
                            image="https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=600&q=80"
                        />
                        <CategoryCard 
                            icon={<Database className="h-10 w-10 text-brand-orange" />} 
                            title="Storage Solutions" 
                            desc="Secure hard disks and server storage."
                            image="https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=600&q=80"
                        />
                        <CategoryCard 
                            icon={<Server className="h-10 w-10 text-brand-orange" />} 
                            title="IT Consumables" 
                            desc="Genuine ink, toner, and accessories."
                            image="https://images.unsplash.com/photo-1706895040634-62055892cbbb?auto=format&fit=crop&w=600&q=80"
                        />
                    </motion.div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-16 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 mb-8 lg:mb-0"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                                alt="Office Team" 
                                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-brand-navy mb-6">Trusted Since Day One</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                We are a trusted supplier of network printers, digital copiers, high-speed scanners, 
                                and IT hardware, serving clients across India with timely delivery and unmatched quality.
                            </p>
                            <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                                <Link to="/about">Learn More About Us</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center"
                    >
                        <motion.div variants={fadeInUp} className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <Truck className="h-16 w-16 text-brand-orange mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Pan India Delivery</h3>
                            <p className="text-gray-300">Reliable logistics network ensuring your hardware reaches you anywhere in India.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <Clock className="h-16 w-16 text-brand-orange mb-4" />
                            <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                            <p className="text-gray-300">Dedicated technical support team available round the clock for your peace of mind.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-white">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto px-4 text-center"
                >
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">Stay Updated</h2>
                    <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest IT trends and product offers.</p>
                    <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
                        <Input 
                            type="text" 
                            placeholder="Your Name" 
                            className="bg-gray-50" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            type="email" 
                            placeholder="Your Email" 
                            className="bg-gray-50" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button type="submit" disabled={loading} className="bg-brand-orange hover:bg-orange-600 text-white">
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
                        </Button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
};

const CategoryCard = ({ icon, title, desc, image }) => (
    <motion.div variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }}>
        <Card className="hover:shadow-xl transition-all duration-300 border-none bg-gray-50 overflow-hidden group h-full flex flex-col">
            <div className="h-40 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="mb-4 p-3 bg-white rounded-full shadow-md -mt-12 z-10 relative">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
            </CardContent>
        </Card>
    </motion.div>
);

export default Home;
