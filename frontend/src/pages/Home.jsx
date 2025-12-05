
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Server, Printer, Laptop, Database, Loader2, ShoppingBag, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import { HERO_IMAGES, GEM_PORTFOLIO } from '../lib/constants';
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

    // Enhanced Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleOnHover = {
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Hero Slider Section */}
            <section className="relative h-[700px] sm:h-[800px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <img 
                            src={HERO_IMAGES[currentImageIndex]} 
                            alt="Vasu Nath Enterprises" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40"></div>
                        {/* Subtle Texture Overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="max-w-3xl text-white"
                    >
                         <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-block px-4 py-2 mb-6 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-semibold tracking-wide text-sm"
                        >
                            TRUSTED IT PARTNER SINCE INCEPTION
                        </motion.div>
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-8 drop-shadow-2xl leading-tight">
                            Powering <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Modern Enterprises</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl">
                            Complete Office & IT Hardware Solutions. 
                            Authorized partners for global technology leaders.
                        </p>
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-500 text-white font-bold px-8 py-7 text-lg shadow-[0_0_30px_rgba(255,122,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] transition-all duration-300 border-none rounded-full">
                                <Link to="/contact">
                                    Get a Consultation <ArrowRight className="ml-2 h-6 w-6" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md font-semibold px-8 py-7 text-lg rounded-full transition-all hover:scale-105">
                                <Link to="/products">View Portfolio</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
                
                {/* Slider Indicators */}
                <div className="absolute bottom-10 right-10 sm:right-20 flex space-x-3 z-20">
                    {HERO_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                index === currentImageIndex ? 'bg-brand-orange w-12' : 'bg-white/30 hover:bg-white/80 w-4'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* GeM Authorization Section - Redesigned */}
            <section className="relative py-24 bg-white overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mb-6 shadow-lg"
                        >
                             <ShoppingBag className="h-8 w-8 text-brand-orange" />
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold text-brand-navy mb-4"
                        >
                            Authorised Seller in <span className="text-brand-orange">GeM</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg"
                        >
                            Government e-Marketplace authorized partner. Delivering certified technology solutions to government and public sector enterprises.
                        </motion.p>
                        
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                         >
                            <a href="tel:+918830490358" className="group inline-flex items-center px-8 py-4 border-2 border-brand-navy text-lg font-medium rounded-full text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Phone className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                                Call +91 8830490358 for GeM Orders
                            </a>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {GEM_PORTFOLIO.map((item, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="h-full group hover:-translate-y-2 transition-all duration-300 border-none shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-white overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                    <CardContent className="p-8 flex flex-col items-center text-center relative">
                                        <div className="h-20 w-full mb-6 flex items-center justify-center p-4 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
                                            <img 
                                                src={item.logo} 
                                                alt={`${item.brand} Logo`} 
                                                className="max-h-full max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://placehold.co/120x50?text=" + item.brand;
                                                    e.target.classList.remove("grayscale");
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">{item.brand}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.products}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Solutions Section - Dark Mode Style */}
            <section className="py-24 bg-brand-navy relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Comprehensive Services</span>
                        <h2 className="text-4xl font-bold text-white mb-6">Our Solutions</h2>
                        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
                            Explore our comprehensive range of hardware solutions tailored for your business needs.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        <CategoryCard 
                            icon={<Printer className="h-10 w-10" />} 
                            title="Heavy Duty Printers" 
                            desc="High-volume printing for busy offices."
                            image="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80"
                        />
                        <CategoryCard 
                            icon={<Laptop className="h-10 w-10" />} 
                            title="Desktops & PCs" 
                            desc="Powerful workstations for productivity."
                            image="https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=600&q=80"
                        />
                        <CategoryCard 
                            icon={<Database className="h-10 w-10" />} 
                            title="Storage Solutions" 
                            desc="Secure hard disks and server storage."
                            image="https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=600&q=80"
                        />
                        <CategoryCard 
                            icon={<Server className="h-10 w-10" />} 
                            title="IT Consumables" 
                            desc="Genuine ink, toner, and accessories."
                            image="https://images.unsplash.com/photo-1706895040634-62055892cbbb?auto=format&fit=crop&w=600&q=80"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Trust/About Preview - Glassmorphism */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:gap-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 mb-12 lg:mb-0 relative"
                        >
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                                alt="Office Team" 
                                className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
                            />
                             {/* Stats Floating Card */}
                             <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-gray-100"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <ShieldCheck className="h-8 w-8 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">Reliability Score</p>
                                        <p className="text-2xl font-bold text-brand-navy">99.9%</p>
                                    </div>
                                </div>
                             </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl font-bold text-brand-navy mb-6 leading-tight">Trusted IT Partner <br/><span className="text-brand-orange">Since Day One</span></h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We are a trusted supplier of network printers, digital copiers, high-speed scanners, 
                                and IT hardware. We don't just sell products; we build lasting infrastructure that powers your success.
                            </p>
                            
                            <ul className="space-y-4 mb-8">
                                {['Certified Authentic Products', 'Pan-India Logistics Network', 'Dedicated Corporate Support'].map((item, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 * i }}
                                        className="flex items-center text-brand-navy font-medium"
                                    >
                                        <CheckCircle className="h-5 w-5 text-brand-orange mr-3" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <Button asChild size="lg" className="bg-brand-navy hover:bg-blue-900 text-white px-8 rounded-full shadow-lg">
                                <Link to="/about">Discover Our Story</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Parallax Effect */}
            <section className="py-24 bg-fixed bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}>
                <div className="absolute inset-0 bg-brand-navy/90"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center"
                    >
                        <motion.div 
                            variants={fadeInUp} 
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center p-10 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl"
                        >
                            <div className="bg-brand-orange/20 p-4 rounded-full mb-6">
                                <Truck className="h-12 w-12 text-brand-orange" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Pan India Delivery</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Reliable logistics network ensuring your hardware reaches you anywhere in India safely and on time.
                            </p>
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp} 
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center p-10 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl"
                        >
                            <div className="bg-brand-orange/20 p-4 rounded-full mb-6">
                                <Clock className="h-12 w-12 text-brand-orange" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">24/7 Expert Support</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Dedicated technical support team available round the clock to ensure your business never stops.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter - Clean & Minimal */}
            <section className="py-24 bg-white">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4 text-center"
                >
                    <h2 className="text-4xl font-bold text-brand-navy mb-6">Stay Ahead of the Curve</h2>
                    <p className="text-gray-600 mb-10 text-lg">Subscribe to our newsletter for exclusive IT insights, product launches, and special corporate offers.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative" onSubmit={handleSubscribe}>
                        <Input 
                            type="text" 
                            placeholder="Your Name" 
                            className="bg-gray-50 border-gray-200 h-14 px-6 rounded-full focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            type="email" 
                            placeholder="Your Email" 
                            className="bg-gray-50 border-gray-200 h-14 px-6 rounded-full focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button type="submit" disabled={loading} className="h-14 px-8 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-bold shadow-lg hover:shadow-brand-orange/50 transition-all">
                            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Subscribe'}
                        </Button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
};

const CategoryCard = ({ icon, title, desc, image }) => (
    <motion.div variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    }}>
        <Card className="border-none bg-white overflow-hidden group h-full flex flex-col relative shadow-lg hover:shadow-2xl transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <div className="h-64 overflow-hidden relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-brand-orange shadow-lg z-20 transform group-hover:rotate-12 transition-all duration-300">
                    {icon}
                </div>
            </div>
            <CardContent className="p-6 flex flex-col items-start text-left flex-grow relative z-20 bg-white group-hover:bg-transparent transition-colors duration-300">
                <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-white transition-colors">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{desc}</p>
                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white font-semibold text-sm flex items-center">
                        Explore Category <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

export default Home;
