
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { COMPANY_INFO } from '../lib/constants';

const Contact = () => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "We'll get back to you shortly.",
        });
    };

    return (
        <div className="min-h-screen bg-brand-light">
             <div className="bg-brand-navy py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300">We're here to help with all your hardware needs.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-brand-navy mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <Input required placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone</label>
                                    <Input required placeholder="+91 98765 43210" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <Input required type="email" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Requirement Type</label>
                                <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>General Inquiry</option>
                                    <option>Bulk Order</option>
                                    <option>Support</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <Textarea placeholder="Tell us about your requirements..." className="h-32" />
                            </div>

                            <Button type="submit" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-brand-light p-3 rounded-full mr-4">
                                        <MapPin className="h-6 w-6 text-brand-navy" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Our Office</p>
                                        <p className="text-gray-600 mt-1">{COMPANY_INFO.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-brand-light p-3 rounded-full mr-4">
                                        <Phone className="h-6 w-6 text-brand-navy" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Phone Numbers</p>
                                        <div className="text-gray-600 mt-1">
                                            {COMPANY_INFO.phones.map(phone => (
                                                <p key={phone}>{phone}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-brand-light p-3 rounded-full mr-4">
                                        <Clock className="h-6 w-6 text-brand-navy" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Opening Hours</p>
                                        <div className="text-gray-600 mt-1 text-sm">
                                            <p><span className="font-medium">Mon-Fri:</span> {COMPANY_INFO.hours.weekdays}</p>
                                            <p><span className="font-medium">Sat:</span> {COMPANY_INFO.hours.saturday}</p>
                                            <p><span className="font-medium">Sun:</span> {COMPANY_INFO.hours.sunday}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center shadow-inner">
                            <p className="text-gray-500 font-medium flex items-center">
                                <MapPin className="mr-2" /> Google Map Integration Placeholder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
