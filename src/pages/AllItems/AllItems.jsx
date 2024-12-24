import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemsCard from '../Home/itemsCard';


const AllItems = () => {
    const items = useLoaderData(); 
    const [searchValue, setSearchValue] = useState('');


   
    const filteredItems = items.filter(
        (item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.location.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div>
            
            <div className="form-control my-5">
                <input
                    type="text"
                    placeholder="Search by title or location"
                    className="input input-bordered w-full max-w-lg mx-auto"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <ItemsCard key={item._id} item={item} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No items match your search!
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllItems;
