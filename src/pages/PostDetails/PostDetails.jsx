import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const item = useLoaderData();
    console.log(item)
    return (
        <div>
            <h2>{item.title}</h2>
            {item.itemType === "Lost" && (
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Found This!
                </button>
            )}
            {item.itemType === "Found" && (
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    This is Mine!
                </button>
            )}
        </div>
    );
};

export default PostDetails;