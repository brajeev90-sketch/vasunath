
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MARKET_AREAS, PRODUCTS, GEM_PORTFOLIO } from '../lib/constants';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, MapPin } from 'lucide-react';

const MarketArea = () => {
    const { areaId } = useParams();
    
    // Find current area based on URL param
    // Handle both cases: explicit /market/delhi and catch-all if needed
    const currentArea = MARKET_AREAS.find(area => area.path.endsWith(`/${areaId}`)) || MARKET_AREAS[0];
    
    const areaName = currentArea.name;

    return (
        <div className="min-h-screen bg-brand-light">
            {/* Dynamic Hero Section for Area */}
            <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={currentArea.image} 
                        alt={`${areaName} IT Hardware Supplier`} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
                    <div className="flex items-center mb-4">
                        <MapPin className="h-6 w-6 text-brand-orange mr-2" />
                        <span className="text-brand-orange font-semibold uppercase tracking-wider">{areaName} Region</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Premier IT Hardware Supplier <br/> in {areaName}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mb-8">
                        Vasu Nath Enterprises provides authorized sales and service for major IT brands across {areaName} and surrounding areas.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
                            <Link to="/contact">Get a Quote in {areaName}</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-brand-navy border-white bg-white hover:bg-gray-100">
                            <a href="tel:+918830490358">Call Now</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* GeM Authorization Badge */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                                <CheckCircle className="h-6 w-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-navy">Government Authorised Seller (GeM)</h3>
                                <p className="text-sm text-gray-600">Available for government and corporate orders in {areaName}</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-brand-navy text-brand-navy">
                            Check GeM Portfolio
                        </Button>
                    </div>
                </div>
            </div>

            {/* Products Grid for Specific Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-brand-navy mb-2">Available Products in {areaName}</h2>
                <p className="text-gray-600 mb-10">Fast delivery and installation available throughout {areaName} region.</p>
                
                {/* GeM Portfolio Section for this area */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-brand-navy mb-6 border-l-4 border-brand-orange pl-3">Authorized Brands</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {GEM_PORTFOLIO.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-all flex items-center justify-center h-24">
                                <img 
                                    src={item.logo} 
                                    alt={item.brand} 
                                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/80x30?text=" + item.brand;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Product Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden bg-gray-100 relative">
                                <img 
                                    src={product.image} 
                                    alt={`${product.name} in ${areaName}`} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <Badge className="absolute top-3 right-3 bg-brand-orange hover:bg-brand-orange">
                                    Available in {areaName}
                                </Badge>
                            </div>
                            <CardHeader>
                                <div className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-1">
                                    {product.category}
                                </div>
                                <CardTitle className="text-xl text-brand-navy">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-sm">{product.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button asChild className="w-full bg-brand-navy hover:bg-blue-900">
                                    <Link to="/contact">Enquire for {areaName}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Local CTA */}
            <div className="bg-brand-navy py-16 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need IT Solutions in {areaName}?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        We provide dedicated support and rapid delivery services for all sectors including corporate offices, schools, and government institutions in {areaName}.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600">
                            <Link to="/contact">Contact Our {areaName} Team</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-brand-navy bg-white hover:bg-gray-100 border-transparent">
                             <a href="https://wa.me/919958200988">Chat on WhatsApp</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketArea;
