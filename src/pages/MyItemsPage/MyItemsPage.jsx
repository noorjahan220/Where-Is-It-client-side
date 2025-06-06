import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2'; 
import { Helmet } from 'react-helmet-async';

const MyItemsPage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/item?email=${user.email}`)
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user.email]);

  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10a11-server-side-noorjahan220.vercel.app/itemDelete/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              setPosts(posts.filter(post => post._id !== _id));
            } else {
              Swal.fire("Error!", "Item could not be deleted.", "error");
            }
          })
          .catch(() => Swal.fire("Error!", "An error occurred while deleting the item.", "error"));
      }
    });
  };

  return (
    <div className="p-10 pb-32 min-h-screen bg-white">
      <Helmet>
        <title>Manage My Items Page</title>
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-xl font-semibold text-teal-600">You have no posts yet.</h2>
          <p className="text-lg text-gray-600">Add your first item to get started.</p>
          <Link to="/addItems">
            <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-2 px-4 rounded-lg shadow hover:scale-105 transition">
              Add Item
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full">
            <thead className="bg-teal-100">
              <tr className="text-teal-600">
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Date Lost</th>
                <th>Update Info</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {posts.map((post) => (
                <tr key={post._id} className="border-b">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={post.image} alt={post.title} className="object-cover" />
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{post.title}</td>
                  <td><span className="badge badge-ghost badge-sm">{post.category}</span></td>
                  <td className="text-sm">{post.location}</td>
                  <td className="text-sm">{post.dateLost}</td>
                  <td>
                    <Link to={`/update/${post._id}`}>
                      <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-2 px-4 rounded-lg shadow hover:scale-105 transition">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(post._id)} className="bg-gradient-to-r from-red-400 to-red-600 text-white py-2 px-4 rounded-lg shadow hover:scale-105 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyItemsPage;
