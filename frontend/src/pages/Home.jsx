
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Server, Printer, Laptop, Database, Loader2, ShoppingBag, Phone, CheckCircle, ShieldCheck, Globe, MapPin, ChevronRight, Users, Building2, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import { HERO_IMAGES, GEM_PORTFOLIO, MARKET_AREAS, PRODUCTS, SOLUTIONS } from '../lib/constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Home = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
            await axios.post(`${BACKEND_URL}/api/newsletter`, { name, email });
            toast({ title: "Subscribed!", description: "Thank you for subscribing." });
            setEmail(''); setName('');
        } catch (error) {
            console.error(error);
            toast({ title: "Error", description: "Failed to subscribe.", variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    // Variants
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
    const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-white">
            
            {/* 1. HERO SECTION - Corporate Style */}
            <section className="relative h-[600px] lg:h-[750px] w-full overflow-hidden bg-gray-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <img src={HERO_IMAGES[currentImageIndex]} alt="Enterprise IT Solutions" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-bold tracking-widest uppercase mb-6">
                            Leading IT Distributor
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Accelerating <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">Digital Transformation</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
                            Empowering enterprises with next-gen infrastructure, authorized hardware solutions, and seamless supply chain capabilities across India.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-14 px-8 bg-brand-orange hover:bg-orange-600 text-white text-lg font-semibold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300">
                                <Link to="/contact"><span className="skew-x-[10deg] inline-block">Connect with Us</span></Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-navy text-lg font-semibold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-all duration-300">
                                <Link to="/products"><span className="skew-x-[10deg] inline-block">Explore Portfolio</span></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Slider Dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
                    {HERO_IMAGES.map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => setCurrentImageIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-12 bg-brand-orange' : 'w-6 bg-white/30 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </section>

            {/* 2. PARTNER ECOSYSTEM (Infinite Ticker) - Fixed Layout */}
            <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 mb-8">
                    <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Our Strategic Technology Partners</p>
                </div>
                {/* Use side-by-side flex containers for smooth infinite scroll without overlap */}
                <div className="flex overflow-hidden group">
                    <div className="flex space-x-16 animate-marquee min-w-full shrink-0 items-center justify-around py-4">
                        {GEM_PORTFOLIO.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center w-40 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                                <img 
                                    src={item.logo} 
                                    alt={item.brand} 
                                    className="max-h-14 max-w-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/120x50?text=${item.brand}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-16 animate-marquee min-w-full shrink-0 items-center justify-around py-4">
                        {GEM_PORTFOLIO.map((item, idx) => (
                            <div key={`dup-${idx}`} className="flex items-center justify-center w-40 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                                <img 
                                    src={item.logo} 
                                    alt={item.brand} 
                                    className="max-h-14 max-w-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/120x50?text=${item.brand}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BUSINESS VERTICALS (Cards) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-brand-navy mb-4">Business Solutions</h2>
                        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Delivering end-to-end technology infrastructure for diverse enterprise needs.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {SOLUTIONS.map((sol, i) => (
                            <motion.div key={i} variants={fadeInUp} className="group">
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 relative">
                                    <div className="h-64 overflow-hidden relative">
                                        <img src={sol.image} alt={sol.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-navy rounded-none">View Details</Button>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow">
                                        <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">{sol.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{sol.description}</p>
                                        <ul className="space-y-2 mb-6">
                                            {sol.features.slice(0, 2).map((f, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-gray-500">
                                                    <ChevronRight className="h-4 w-4 text-brand-orange mr-2" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="h-1 w-full bg-gray-100 group-hover:bg-brand-orange transition-colors duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. GeM / GOV SECTION - Corporate Highlight */}
            <section className="py-24 relative overflow-hidden bg-brand-navy text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-orange font-bold mb-6">
                                <ShoppingBag className="h-4 w-4 mr-2" /> Government e-Marketplace
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Trusted Partner for <br/>Public Sector Procurement</h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                We are a verified GeM OEM/Reseller, facilitating seamless procurement of IT hardware for government departments, PSUs, and educational institutions.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { title: "Authorized OEM", desc: "Direct sourcing from manufacturers" },
                                    { title: "Compliant Billing", desc: "GST & GeM compliant invoicing" },
                                    { title: "Pan-India Logistics", desc: "Delivery to remote locations" },
                                    { title: "Dedicated Support", desc: "Priority service for gov projects" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="bg-brand-orange/20 p-2 rounded mt-1 mr-4">
                                            <CheckCircle className="h-5 w-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white h-14 px-8 text-lg rounded-none">
                                <a href="tel:+918830490358">GeM Helpdesk: +91 8830490358</a>
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white p-2 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                                <div className="bg-gray-100 rounded-xl p-8 border border-gray-200">
                                    <div className="grid grid-cols-3 gap-4">
                                        {GEM_PORTFOLIO.slice(0, 9).map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                                                <img src={item.logo} alt={item.brand} className="max-h-12 max-w-full object-contain" 
                                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x40?text=${item.brand}`; }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 text-center">
                                        <p className="text-brand-navy font-semibold">...and many more authorized brands</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. NUMBERS / STATS - Redington Style Parallax */}
            <div ref={targetRef} className="py-20 bg-fixed bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}>
                <div className="absolute inset-0 bg-brand-navy/90"></div>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div style={{ opacity, scale }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { icon: Building2, count: "15+", label: "Years Experience" },
                            { icon: Users, count: "500+", label: "Corporate Clients" },
                            { icon: Globe, count: "12", label: "Cities Covered" },
                            { icon: BarChart3, count: "10K+", label: "Products Delivered" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors">
                                <stat.icon className="h-10 w-10 text-brand-orange mx-auto mb-4" />
                                <h3 className="text-4xl lg:text-5xl font-bold mb-2">{stat.count}</h3>
                                <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 6. PAN INDIA PRESENCE (Map/Locations) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-brand-navy mb-4">Pan India Presence</h2>
                        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">Serving key economic hubs across the nation.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6">Select Region</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {MARKET_AREAS.slice(0, 10).map((area, i) => (
                                        <Link key={i} to={area.path} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-brand-orange transition-all border border-transparent hover:border-brand-orange/30 group">
                                            <MapPin className="h-4 w-4 mr-2 text-gray-400 group-hover:text-brand-orange" />
                                            <span className="font-medium text-sm">{area.name}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex items-center text-brand-navy font-semibold">
                                        <Truck className="h-5 w-5 text-brand-orange mr-3" />
                                        <span>Nationwide logistics network</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative">
                            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80" alt="India Map Context" className="rounded-2xl shadow-2xl opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. NEWSLETTER / CTA */}
            <section className="py-20 bg-gray-900 text-white border-t border-gray-800">
                <div className="max-w-[1000px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
                    <p className="text-gray-400 mb-8">Get the latest updates on enterprise hardware launches and procurement policies.</p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <Input 
                            type="text" placeholder="Name" 
                            className="bg-white/5 border-white/10 text-white h-12 focus:border-brand-orange"
                            value={name} onChange={e => setName(e.target.value)}
                        />
                        <Input 
                            type="email" placeholder="Email Address" 
                            className="bg-white/5 border-white/10 text-white h-12 focus:border-brand-orange"
                            value={email} onChange={e => setEmail(e.target.value)} required
                        />
                        <Button type="submit" disabled={loading} className="h-12 px-8 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-none uppercase tracking-wide">
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
                        </Button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Home;
