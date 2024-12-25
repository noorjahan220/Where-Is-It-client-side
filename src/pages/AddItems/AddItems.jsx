import React, { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Helmet } from 'react-helmet-async';

const AddItems = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddItems = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        initialData.email = user?.email;
        initialData.name = user?.displayName;

        axios.post('https://b10a11-server-side-noorjahan220.vercel.app/items', initialData, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                if (response.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Post has been added successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Error adding post:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again.',
                });
            });
    };

    return (
        <div className="lg:p-10 mx-10 my-5 ">
             <Helmet>
                            <title>Add Lost & Found Item Page</title>
                        </Helmet>
            <form className="mx-auto p-10 m-14 bg-white rounded-xl shadow-lg space-y-6 hover:shadow-2xl transition-shadow duration-300" onSubmit={handleAddItems}>
                <h2 className="text-3xl font-bold text-teal-600 mb-6">Add New Item</h2>

                {/* Post Type */}
                <div className="mb-4">
                    <label htmlFor="postType" className="block text-sm font-medium text-teal-600">
                        Post Type
                    </label>
                    <select
                        id="postType"
                        name="itemType"
                        className="select select-bordered w-full mt-2 focus:ring-teal-500"
                    >
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                        <option value="Recovered">Recovered</option>
                    </select>
                </div>

                {/* Image Upload */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Upload Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Upload Image URL"
                        className="input input-bordered w-full focus:ring-teal-500"
                        required
                    />
                </div>

                {/* Title */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="input input-bordered w-full focus:ring-teal-500"
                        required
                    />
                </div>

                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full focus:ring-teal-500"
                        placeholder="Description"
                        name="description"
                        required
                    ></textarea>
                </div>

                {/* Category */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        defaultValue="Pick a Category"
                        name="category"
                        className="select select-bordered w-full mt-2 focus:ring-teal-500"
                    >
                        <option>Pick a Category</option>
                        <option>Pets</option>
                        <option>Documents</option>
                        <option>Gadgets</option>
                    </select>
                </div>

                {/* Location */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Where was the item lost?"
                        className="input input-bordered w-full focus:ring-teal-500"
                        required
                    />
                </div>

                {/* Date Lost */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Date Lost</span>
                    </label>
                    <input
                        type="date"
                        name="dateLost"
                        className="input input-bordered w-full focus:ring-teal-500"
                        required
                    />
                </div>

                {/* Contact Information - Email */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        value={user?.email || ''}
                        readOnly
                        className="input input-bordered w-full focus:ring-teal-500"
                    />
                </div>

                {/* Contact Information - Name */}
                <div className="form-control mb-4">
                    <label className="label text-teal-600">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        value={user?.displayName || ''}
                        readOnly
                        className="input input-bordered w-full focus:ring-teal-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg w-full hover:scale-105 transform transition-all duration-300"
                    >
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;
