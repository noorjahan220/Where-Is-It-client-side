import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemsCard from '../Home/itemsCard';

const AllItems = () => {
    const items = useLoaderData();
    return (
        <div>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                items.map(item => <ItemsCard key={item._id} item={item} />)
            }
        </div>
        </div>
    );
};

export default AllItems;