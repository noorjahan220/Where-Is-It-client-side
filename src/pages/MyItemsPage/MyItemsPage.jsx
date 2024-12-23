import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';

const MyItemsPage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/item?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [user.email]);

  return (
    <div>
      <h1>My Posts: {posts.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
             
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Update info</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{post.title}</div>
                  <div className="text-sm opacity-50">{post.location}</div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{post.category}</span>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItemsPage;
