import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext } from 'react';
import AuthContext from './../../context/Authcontext/AuthContext';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const [recoveredLocation, setRecoveredLocation] = useState('');
  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [isRecovered, setIsRecovered] = useState(item.itemType === 'Recovered');
  const axiosSecure = UseAxiosSecure();

  const handleSubmit = async () => {
    const recoveryData = {
      itemId: item._id,
      recoveredLocation,
      recoveredDate,
      image: item.image,
      title: item.title,
      description: item.description,
      recoveredBy: {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
      },
    };

    const response = await axiosSecure.post('/recoveredItems',recoveryData, {
    
      headers: { 'Content-Type': 'application/json' },
      
    });

    if (response.status === 200) {
      await axiosSecure.patch(`/item/${item._id}`, { itemType: 'Recovered' },{
       
        headers: { 'Content-Type': 'application/json' },
       
      });
      toast.success('Item marked as recovered!');
      setIsRecovered(true);
      setShowModal(false);
    } else {
      toast.error('Error recovering item. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-8 py-8 mb-10 mt-10 bg-white rounded-lg shadow-lg space-y-8">
      <Helmet>
        <title>Post Details Page</title>
      </Helmet>
      <h2 className="text-3xl font-extrabold text-teal-600 mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {item.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1">
          <p className="text-[0.9rem] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <strong className="font-semibold text-teal-600">Description:</strong> {item.description}
          </p>
          <p className="text-[0.9rem] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <strong className="font-semibold text-teal-600">Category:</strong> {item.category}
          </p>
          <p className="text-[0.9rem] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <strong className="font-semibold text-teal-600">Location:</strong> {item.location}
          </p>
          <p className="text-[0.9rem] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <strong className="font-semibold text-teal-600">Date Lost:</strong> {item.dateLost}
          </p>
          <p className="text-[0.9rem] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <strong className="font-semibold text-teal-600">Owner:</strong> {item.name}
          </p>
          <p className="text-[0.9rem] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <strong className="font-semibold text-teal-600">Contact:</strong> {item.email}
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        {item.itemType === 'lost' && !isRecovered && (
          <button
            className="px-6 py-2 text-white bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg shadow hover:shadow-md hover:scale-105 transition disabled:opacity-50"
            onClick={() => setShowModal(true)}
          >
            Found This!
          </button>
        )}
        {item.itemType === 'Found' && !isRecovered && (
          <button
            className="px-6 py-2 text-white bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg shadow hover:shadow-md hover:scale-105 transition disabled:opacity-50"
            onClick={() => setShowModal(true)}
          >
            This is Mine!
          </button>
        )}
        {isRecovered && (
          <button
            className="px-6 py-2 text-white bg-gray-500 rounded-lg shadow cursor-not-allowed"
            disabled
          >
            Recovered
          </button>
        )}
      </div>


      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-semibold text-teal-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Recovery Details</h3>
            <div className="mb-4">
              <label className="block font-medium mb-2 text-teal-600">Recovered Location</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={recoveredLocation}
                onChange={(e) => setRecoveredLocation(e.target.value)}
                placeholder="Enter location"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2 text-teal-600">Recovered Date</label>
              <DatePicker
                selected={recoveredDate}
                onChange={(date) => setRecoveredDate(date)}
                className="w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2 text-teal-600">Recovered By</label>
              <div className="flex items-center gap-4">
                <img src={user.photoURL} alt={user.displayName} className="w-12 h-12 rounded-full" />
                <div>
                  <p>{user.displayName}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                className="px-6 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow hover:scale-105 transition"
                onClick={handleSubmit}
                disabled={isRecovered}
              >
                Submit
              </button>
              <button
                className="ml-4 px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-lg shadow hover:scale-105 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
