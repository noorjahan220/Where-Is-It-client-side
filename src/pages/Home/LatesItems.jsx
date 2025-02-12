import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemsCard from './ItemsCard';

const LatestItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://b10a11-server-side-noorjahan220.vercel.app/items')
            .then((res) => res.json())
            .then((data) => {
                const sortedItems = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                const latestItems = sortedItems.slice(0, 6);
                setItems(latestItems);
            })
            .catch((error) => console.error('Error fetching items:', error));
    }, []);

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-teal-600 mb-2">Latest Items</h2>
                <p className="text-gray-600">Check out the most recently added items!</p>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {items.length > 0 ? (
                    items.map((item) => <ItemsCard key={item._id} item={item} />)
                ) : (
                    <p className="text-center text-gray-500 col-span-full text-lg font-medium">
                        No items available.
                    </p>
                )}
            </div>

            {/* Footer Section */}
            <div className="text-center">
                <Link to="/allItems">
                    <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none">
                        See More Items
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LatestItems;
