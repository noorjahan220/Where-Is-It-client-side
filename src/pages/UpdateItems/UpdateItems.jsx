import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/Authcontext/AuthContext';
import toast from 'react-hot-toast';

const UpdateItems = () => {
    const item = useLoaderData();
    const { _id, itemType, title, description, category, location, dateLost,image } = item;
    const { user } = useContext(AuthContext);
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const itemType = form.itemType.value;
        const title = form.title.value;
      
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const dateLost = form.dateLost.value;

        const newItem = {
            itemType,
            
            title,
            description,
            category,
            location,
            dateLost,
            email: user.email,
            name: user.displayName,
        }
        fetch(`https://b10a11-server-side-noorjahan220.vercel.app/itemUpdate/${_id}`,{
            method : 'PUT',
            headers :{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success("Campaign updated successfully!");
            }else {
                toast.error("Campaign didn't update.");
              }
        })
    }
    return (
        <div>
            <form className="p-16" onSubmit={handleUpdate}>
                {/* Post Type */}
                <div className="mb-4">
                    <label htmlFor="postType" className="block text-sm font-medium text-gray-700">
                        Post Type
                    </label>
                    <select
                        id="postType"
                        name="itemType"
                        defaultValue={itemType}
                        className="select select-bordered w-full mt-2"
                    >
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                        <option value="Recovered">Recovered</option>
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
                        defaultValue={image}
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
                        defaultValue={title}
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
                        defaultValue={description}
                        required
                    ></textarea>
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        defaultValue={category}
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
                        defaultValue={location}
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
                        defaultValue={dateLost}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="text"
                        
                        defaultValue={user.email}
                        readOnly
                        className="input input-bordered w-full mt-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"

                        defaultValue={user.displayName}
                        readOnly
                        className="input input-bordered w-full mt-2"
                    />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItems;