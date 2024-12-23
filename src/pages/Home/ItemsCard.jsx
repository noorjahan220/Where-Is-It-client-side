import React from 'react';
import { useNavigate } from 'react-router-dom';


const ItemsCard = ({ item }) => {
  const { _id, title, image} = item;
  
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100  ">
      <figure>
        <img className='h-32 w-52 object-cover'
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}

        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <button
          onClick={() => navigate(`/items/${_id}`)}
          className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
         Details
        </button>
      </div>
    </div>
  );
};

export default ItemsCard;