import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';

const AllRecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [recoverItem, setRecoverItem] = useState([]);
  const [isGridLayout, setIsGridLayout] = useState(true); // State for layout toggle
console.log(recoverItem)
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
    <div>
      <h2>Recovered Items: {recoverItem.length}</h2>

      {/* Button to toggle between grid and table view */}
      <button
        onClick={toggleLayout}
        className="mb-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {isGridLayout ? 'Switch to Table View' : 'Switch to Grid View'}
      </button>

      {/* Conditional Rendering for Grid or Table Layout */}
      {isGridLayout ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recoverItem.length > 0 ? (
            recoverItem.map((item) => (
              <div key={recoverItem._id} className="border p-4 rounded-md">
                <h3 className="font-semibold">{recoverItem.title}</h3>
                <p>{item.description}</p>
                <p className="text-gray-500">{new Date(item.recoveredDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No recovered items found.</p>
          )}
        </div>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recoverItem.length > 0 ? (
              recoverItem.map((item) => (
                <tr key={recoverItem._id}>
                  <td className="border px-4 py-2">{recoverItem.title}</td>
                  <td className="border px-4 py-2">{item.recoveredLocation
                  }</td>
                  <td className="border px-4 py-2">{new Date(item.recoveredDate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-500">
                  No recovered items available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllRecoveredItems;
