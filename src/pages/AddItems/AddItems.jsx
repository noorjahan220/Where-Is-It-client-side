import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Helmet } from 'react-helmet-async';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const AddItems = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectImg, setSelectImg] = useState(null)
    const axiosSecure = UseAxiosSecure();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectImg(reader.result); // Set the base64 string
            };
            reader.readAsDataURL(file); // Read the file as a base64 string
        }
    };
    
    const handleAddItems = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        initialData.email = user?.email;
        initialData.name = user?.displayName;
    
        // Add the base64 image string to the initialData
        if (selectImg) {
            initialData.image = selectImg;
        } else {
            initialData.image = ''; // Handle the case where no image is selected
        }
    
        axiosSecure.post('/items', initialData, {
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
                    navigate('/allItems');
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
        <div className="lg:px-10 lg:py-10 w-[70%] mx-auto mb-5 ">
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
                    <label className="form-control w-full max-w-xs text-sm font-medium ">
                    Upload Image
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="image" onChange={handleImageChange}
                            placeholder="Upload Image URL" required />



                    </label>

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
                        className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold mx-auto px-4 py-2  rounded-lg shadow-lg w-40 hover:scale-105 transform transition-all duration-300"
                    >
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;
