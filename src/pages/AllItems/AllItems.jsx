import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import ItemsCard from '../Home/ItemsCard';
import { Helmet } from 'react-helmet-async';

const AllItems = () => {
    const items = useLoaderData();
    const [searchValue, setSearchValue] = useState('');
    const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    // Get all unique categories
    const categories = [...new Set(items.map(item => item.category))];

    // Debounce search input to improve performance
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 500); // Delay search by 500ms

        return () => clearTimeout(timer);
    }, [searchValue]);

    // Filter items based on category and search value
    const filteredItems = items.filter(
        (item) =>
            (selectedCategory ? item.category === selectedCategory : true) && // Filter by category
            (
                item.title?.toLowerCase().includes(debouncedSearchValue.toLowerCase()) || 
                item.location?.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
                item.category?.toLowerCase().includes(debouncedSearchValue.toLowerCase()) // Include category in search
            )
    );

    return (
        <div className="container mx-auto px-6 py-8">
            <Helmet>
                <title>Lost & Found Page</title>
            </Helmet>
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-teal-600 mb-2">Discover Items</h1>
                <p className="text-gray-600 text-lg">Find what you're looking for or list lost and found items easily!</p>
            </div>

            <div className="flex">
                {/* Sidebar Section */}
                <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-teal-600 mb-4">Categories</h3>
                    <ul className="space-y-2">
                        <li>
                            <button 
                                className={`w-full text-left px-4 py-2 rounded-lg focus:outline-none ${!selectedCategory ? 'bg-teal-500 text-white' : 'text-gray-600'}`}
                                onClick={() => setSelectedCategory('')}
                            >
                                All Categories
                            </button>
                        </li>
                        {categories.map((category) => (
                            <li key={category}>
                                <button 
                                    className={`w-full text-left px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === category ? 'bg-teal-500 text-white' : 'text-gray-600'}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content Section */}
                <div className="w-3/4 ml-8">
                    {/* Search Bar */}
                    <div className="form-control mb-10 flex items-center justify-center">
                        <div className="relative w-full max-w-xl">
                            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                placeholder="Search by title, location, or category"
                                className="input input-bordered w-full rounded-full pl-12 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <ItemsCard key={item._id} item={item} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 col-span-full text-lg font-medium">
                                No items match your search or category!
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-center mt-12">
                <Link to="/addItems">
                    <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none">
                        Post Your Item
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllItems;
