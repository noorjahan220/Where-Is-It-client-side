import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 p-12 mb-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-teal-600">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Never Miss an Update
                    </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                    Subscribe to our newsletter to get the latest updates on found items, platform improvements, and helpful tips!
                </p>
                <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input
                        type="email"
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-600"
                        placeholder="Enter your email"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-700 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
