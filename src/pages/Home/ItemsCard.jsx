import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsCard = ({ item }) => {
  const { itemType, title, description, image } = item;
  const navigate = useNavigate();

  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden border flex flex-col p-2 mb-2">
      {/* Image Section with Tag */}
      <figure className="rounded-t-lg overflow-hidden relative h-40">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image || 'https://via.placeholder.com/300'} // Fallback image
          alt={title}
          onError={(e) => { 
            e.target.src = 'https://via.placeholder.com/300'; // Fallback on error
          }}
        />
        {/* Item Type Tag */}
        <div className="absolute top-1 right-1 bg-teal-500/90 text-white px-3 py-1 text-xs font-medium shadow-md">
          {itemType}
        </div>
      </figure>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-1">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-1 mb-2">{description.slice(0, 60)}...</p>

        {/* Action Button */}
        <button
          onClick={() => navigate(`/items/${item._id}`)}
          className="mt-auto w-28 mx-auto bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-2 rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition duration-300 text-xs"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ItemsCard;