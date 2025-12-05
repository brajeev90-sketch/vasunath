
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { PRODUCTS, GEM_PORTFOLIO } from '../lib/constants';
import { Badge } from '../components/ui/badge';
import { CheckCircle } from 'lucide-react';

const Products = () => {
    return (
        <div className="bg-brand-light min-h-screen">
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold text-brand-navy">Product Catalog</h1>
                    <p className="text-gray-600 mt-2">Browse our premium selection of IT hardware and GeM authorised products.</p>
                </div>
            </div>

            {/* GeM Authorization Section in Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <div className="flex items-center mb-6">
                        <h2 className="text-2xl font-bold text-brand-navy mr-4">GeM Authorised Portfolio</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" /> Verified Seller
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {GEM_PORTFOLIO.map((item, index) => (
                            <Card key={index} className="border-l-4 border-l-brand-orange hover:shadow-md transition-all">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-brand-navy">{item.brand}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">{item.products}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col sm:flex-row items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-brand-navy">Ordering via GeM?</h3>
                            <p className="text-sm text-gray-600 mt-1">We are fully authorised to process government orders.</p>
                        </div>
                        <Button asChild className="mt-4 sm:mt-0 bg-brand-navy hover:bg-blue-900">
                            <a href="tel:+918830490358">Call +91 8830490358</a>
                        </Button>
                    </div>
                </div>

                {/* Regular Products Grid */}
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Featured Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden bg-gray-100">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
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
                                    <Link to="/contact">Enquire Now</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
