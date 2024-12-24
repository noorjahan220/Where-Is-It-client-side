import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext } from 'react';
import AuthContext from './../../context/Authcontext/AuthContext';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  console.log(item._id)
  const [showModal, setShowModal] = useState(false);
  const [recoveredLocation, setRecoveredLocation] = useState('');
  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [isRecovered, setIsRecovered] = useState(false);
  const [itemType, setItemType] = useState(item.itemType);
  const axiosSecure = UseAxiosSecure();

 
  useEffect(() => {
    if (item.itemType === 'Recovered') {
      setIsRecovered(true); // Mark as recovered
      setItemType('Recovered'); // Change the item type to "Recovered"
    }
  }, [item.itemType]);

  const handleSubmit = async () => {
    const recoveryData = {
      itemId: item._id,
      recoveredLocation,
      recoveredDate,
      recoveredBy: {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
      },
    };

    const response = await axiosSecure.post('recoveredItems',recoveryData, {
      
      headers: { 'Content-Type': 'application/json' },
      
    });

    if (response.ok) {
      
      await fetch(`https://b10a11-server-side-noorjahan220.vercel.app/item/${item._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemType: 'Recovered' }), // Update itemType here
      });
      alert('Item marked as recovered!');
      setIsRecovered(true); // Disable further recovery submissions
      setItemType('Recovered'); // Update the item type
      setShowModal(false);
    } else {
      alert('Error recovering item. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
      <img src={item.image} alt={item.title} className="w-64 h-64 object-cover mb-4 rounded-lg" />
      <p className="mb-2"><strong>Description:</strong> {item.description}</p>
      <p className="mb-2"><strong>Category:</strong> {item.category}</p>
      <p className="mb-2"><strong>Location:</strong> {item.location}</p>
      <p className="mb-4"><strong>Date Lost:</strong> {item.dateLost}</p>

      {/* Button to trigger modal, disabled if the item is already recovered */}
      {itemType === 'Lost' || itemType === 'Found' ? (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setShowModal(true)}
          disabled={isRecovered} // Disable if already recovered
        >
          {isRecovered ? 'Recovered' : itemType === 'Lost' ? 'Found This!' : 'This is Mine!'}
        </button>
      ) : (
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed"
          disabled
        >
          Recovered
        </button>
      )}

      {/* Modal for recovery details */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Recovery Details</h3>
            <div className="mb-4">
              <label className="block font-medium mb-2">Recovered Location</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                value={recoveredLocation}
                onChange={(e) => setRecoveredLocation(e.target.value)}
                placeholder="Enter location"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Recovered Date</label>
              <DatePicker
                selected={recoveredDate}
                onChange={(date) => setRecoveredDate(date)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Recovered By</label>
              <div className="flex items-center gap-4">
                <img src={user.photoURL} alt={user.displayName} className="w-12 h-12 rounded-full" />
                <div>
                  <p>{user.displayName}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={handleSubmit}
              disabled={isRecovered} // Disable the button if already recovered
            >
              Submit
            </button>
            <button
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
