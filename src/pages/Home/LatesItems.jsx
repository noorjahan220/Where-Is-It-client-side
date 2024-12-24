import React, { useEffect, useState } from 'react';
import ItemsCard from './itemsCard';
import { Link } from 'react-router-dom';

const LatesItems = () => {
    const [items, setItems] =useState([]);

    useEffect(()=>{
        fetch('https://b10a11-server-side-noorjahan220.vercel.app/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                items.map(item => <ItemsCard key={item._id} item={item} />)
            }
        </div>
        <Link to="/allItems"><button>See More</button></Link>
        </div>
    );
};

export default LatesItems;