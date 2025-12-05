
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, MARKET_AREAS } from '../../lib/constants';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img 
                                src="https://customer-assets.emergentagent.com/job_print-tech-supply/artifacts/y0t4ps30_logo-11-300x159.webp" 
                                alt="Vasu Nath Enterprises" 
                                className="h-14 w-auto"
                            />
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`${
                                    location.pathname === link.path
                                        ? 'text-brand-orange font-semibold'
                                        : 'text-gray-600 hover:text-brand-navy'
                                } px-3 py-2 text-sm font-medium transition-colors`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        {/* Market Area Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors focus:outline-none">
                                Market Area <ChevronDown className="ml-1 h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto bg-white shadow-lg border-gray-100">
                                {MARKET_AREAS.map((area) => (
                                    <DropdownMenuItem 
                                        key={area.name} 
                                        onClick={() => navigate(area.path)}
                                        className="cursor-pointer hover:bg-gray-50 hover:text-brand-orange"
                                    >
                                        {area.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button asChild className="bg-brand-navy hover:bg-blue-900 text-white">
                            <Link to="/contact">Get a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-brand-navy focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`${
                                    location.pathname === link.path
                                        ? 'bg-brand-light text-brand-orange'
                                        : 'text-gray-600 hover:bg-gray-50'
                                } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="pt-2 pb-2 border-t border-gray-100 mt-2">
                            <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Select Market Area</p>
                            <div className="max-h-60 overflow-y-auto">
                                {MARKET_AREAS.map((area) => (
                                    <Link
                                        key={area.name}
                                        to={area.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-orange"
                                    >
                                        {area.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button asChild className="w-full bg-brand-navy hover:bg-blue-900 text-white">
                                <Link to="/contact">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-white">VASU NATH ENTERPRISES</h3>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            Your trusted partner for high-quality office and IT hardware solutions. 
                            Providing integrity, quality, and reliability across India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Market Areas Footer Link */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-orange">Serving Locations</h3>
                        <ul className="space-y-2 max-h-40 overflow-y-auto pr-2 text-sm custom-scrollbar">
                            {MARKET_AREAS.map((area) => (
                                <li key={area.name}>
                                    <Link to={area.path} className="text-gray-300 hover:text-white transition-colors">
                                        {area.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-brand-orange mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                                <div className="flex flex-col">
                                    {COMPANY_INFO.phones.map(phone => (
                                        <a key={phone} href={`tel:${phone}`} className="text-gray-300 hover:text-white text-sm">
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Clock className="h-5 w-5 text-brand-orange mt-0.5 mr-3 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    <p>Mon-Fri: {COMPANY_INFO.hours.weekdays}</p>
                                    <p>Sat: {COMPANY_INFO.hours.saturday}</p>
                                    <p>Sun: {COMPANY_INFO.hours.sunday}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Vasu Nath Enterprises. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-brand-light font-sans">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            
            {/* Floating Buttons Container */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                {/* Call Button */}
                <a 
                    href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label="Call Us"
                >
                    <Phone className="h-6 w-6" />
                </a>

                {/* Floating WhatsApp Button */}
                <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label="Contact on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                </a>
            </div>
        </div>
    );
};

export default Layout;
