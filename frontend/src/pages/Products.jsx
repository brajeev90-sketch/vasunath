
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { PRODUCTS } from '../lib/constants';

const Products = () => {
    return (
        <div className="bg-brand-light min-h-screen">
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold text-brand-navy">Product Catalog</h1>
                    <p className="text-gray-600 mt-2">Browse our premium selection of IT hardware.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters (Visual only for now) */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <Button variant="secondary" className="bg-brand-navy text-white hover:bg-brand-navy/90">All</Button>
                    <Button variant="outline" className="hover:text-brand-orange hover:border-brand-orange">Printers</Button>
                    <Button variant="outline" className="hover:text-brand-orange hover:border-brand-orange">Computers</Button>
                    <Button variant="outline" className="hover:text-brand-orange hover:border-brand-orange">Storage</Button>
                    <Button variant="outline" className="hover:text-brand-orange hover:border-brand-orange">Supplies</Button>
                </div>

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
