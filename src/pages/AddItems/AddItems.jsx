import React, { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/Authcontext/AuthContext';

const AddItems = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddItems = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        initialData.email = user?.email;
        initialData.name = user?.displayName
            ;


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
        <form className="p-16" onSubmit={handleAddItems}>
            {/* Post Type */}
            <div className="mb-4">
                <label htmlFor="postType" className="block text-sm font-medium text-gray-700">
                    Post Type
                </label>
                <select
                    id="postType"
                    name="itemType"
                    className="select select-bordered w-full mt-2"
                >
                    <option value="Lost">Lost</option>
                    <option value="Found">Found</option>
                    <option value="Found">Recovered</option>
                </select>
            </div>

            {/* Image Upload */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Upload Image URL</span>
                </label>
                <input
                    type="text"
                    name="image"
                    placeholder="Upload Image URL"
                    className="input input-bordered"
                    required
                />
            </div>

            {/* Title */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="input input-bordered"
                    required
                />
            </div>

            {/* Description */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea
                    className="textarea textarea-bordered"
                    placeholder="Description"
                    name="description"
                    required
                ></textarea>
            </div>

            {/* Category */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select
                    defaultValue="Pick a Category"
                    name="category"
                    className="select select-ghost w-full max-w-xs"
                >
                    <option >Category</option>
                    <option>Pets</option>
                    <option>Documents</option>
                    <option>Gadgets</option>
                </select>
            </div>

            {/* Location */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <input
                    type="text"
                    name="location"
                    placeholder="Where was the item lost?"
                    className="input input-bordered"
                    required
                />
            </div>

            {/* Date Lost */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Date Lost</span>
                </label>
                <input
                    type="date"
                    name="dateLost"
                    className="input input-bordered"
                    required
                />
            </div>

            {/* Contact Information - Email */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="text"
                    value={user?.email || ''}
                    readOnly
                    className="input input-bordered w-full mt-2"
                />
            </div>
            {/* Contact Information - name */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={user?.displayName
                        || ''}
                    readOnly
                    className="input input-bordered w-full mt-2"
                />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
                <button className="btn btn-primary">Add Post</button>
            </div>
        </form>
    );
};

export default AddItems;
