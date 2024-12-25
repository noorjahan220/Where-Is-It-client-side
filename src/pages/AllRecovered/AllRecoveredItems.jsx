import React, { useContext, useEffect, useState } from 'react';
import { FiGrid, FiTable, FiMapPin, FiCalendar, FiUser } from 'react-icons/fi'; // Importing icons
import AuthContext from '../../context/Authcontext/AuthContext';

const AllRecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [recoverItem, setRecoverItem] = useState([]);
  const [isGridLayout, setIsGridLayout] = useState(true);

  useEffect(() => {
    if (user && user.email) {
      fetch(`https://b10a11-server-side-noorjahan220.vercel.app/recoveredItem?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRecoverItem(data))
        .catch((error) => console.error("Error fetching recovered items:", error));
    }
  }, [user]);

  // Toggle between grid and table layout
  const toggleLayout = () => {
    setIsGridLayout((prevLayout) => !prevLayout);
  };

  return (
    <div className="p-10 space-y-8 bg-white">
      {/* Button to toggle between grid and table view */}
      <button
        onClick={toggleLayout}
        className="mb-6 p-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 flex items-center gap-2"
      >
        {isGridLayout ? (
          <FiTable />
        ) : (
          <FiGrid />
        )}
      </button>

      {/* Conditional Rendering for Grid or Table Layout */}
      {recoverItem.length > 0 ? (
        isGridLayout ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recoverItem.map((item) => (
              <div key={item._id} className="border p-4 rounded-md bg-gray-50 shadow-sm hover:bg-gray-100">
                {/* Image */}
                <div className="mb-4">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
                  ) : (
                    <div className="w-full h-40 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                      No image available
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600">{item.description || 'No description available.'}</p>
                
                {/* Icons */}
                <div className="mt-4 text-sm text-gray-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <FiUser />
                    <span>{item.recoveredBy.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    <span>{new Date(item.recoveredDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    <span>{item.recoveredLocation || 'No location available'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-teal-100">
                <tr className="text-teal-600">
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Recovered By</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Location</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {recoverItem.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="border px-4 py-2">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                      ) : (
                        <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                          No image
                        </div>
                      )}
                    </td>
                    <td className="border px-4 py-2">{item.title}</td>
                    <td className="border px-4 py-2">{item.description || 'No description available.'}</td>
                    <td className="border px-4 py-2">{item.recoveredBy.name}</td>
                    <td className="border px-4 py-2">{new Date(item.recoveredDate).toLocaleDateString()}</td>
                    <td className="border px-4 py-2">{item.recoveredLocation || 'No location available'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="text-center text-gray-600">
          <p className="text-xl font-semibold">No recovered items found.</p>
          <p>It seems like there are no items to display at the moment. Please check back later!</p>
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItems;
