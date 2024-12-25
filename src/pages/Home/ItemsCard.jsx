import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsCard = ({ item }) => {
  const { itemType, title, description, category, location, dateLost, name, email, image } = item;
  
  const navigate = useNavigate();

  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden border flex flex-col h-full p-2 mb-2">
      {/* Image Section */}
      <figure className="rounded-t-lg overflow-hidden">
        <img
          className="w-full object-cover rounded-t-lg"
          style={{ height: "200px", objectFit: "cover" }} // Ensuring the image maintains aspect ratio
          src={image}
          alt={title}
        />
      </figure>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Item Type */}
        <p className="text-sm font-medium text-teal-500 uppercase">{itemType}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-1">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {/* Category */}
        <p className="text-xs text-gray-500 mt-2">Category: {category}</p>

        {/* Location */}
        <p className="text-sm text-gray-500 flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.75c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9s9 4.03 9 9c0 4.97-4.03 9-9 9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15.75c1.518 0 2.75-1.232 2.75-2.75S13.518 10.25 12 10.25 9.25 11.482 9.25 13 10.482 15.75 12 15.75z"
            />
          </svg>
          {location}
        </p>

        {/* Date Lost */}
        <p className="text-xs text-gray-400 mt-1">Lost on: {new Date(dateLost).toLocaleDateString()}</p>

        {/* Posted By */}
        <p className="text-xs text-gray-400 mt-1">Posted by: {name}</p>

        {/* Contact */}
        <p className="text-xs text-gray-400 mt-1">Email: {email}</p>

        {/* Action Button */}
        <button
          onClick={() => navigate(`/items/${item._id}`)}
          className="mt-auto w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ItemsCard;
