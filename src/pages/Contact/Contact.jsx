import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import animationData from '../../assets/contact.json'; // Ensure this path is correct

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
   // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation (basic)
    if (!formData.name || !formData.email || !formData.message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'All fields are required!',
            position: 'top', // Center position
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true, // Optional: add a progress bar to the toast
        });
        return;
    }

    // Show success message
    Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'We will reach you soon.',
        toast: true,
        position: 'top', // Center position
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true, // Optional: add a progress bar to the toast
    });

    // Clear the form
    setFormData({
        name: '',
        email: '',
        message: '',
    });
};

    // Lottie animation options
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="min-h-screen flex items-center justify-center  ">
            <div className="container px-6 py-12">
                {/* Contact Section */}
                <div className="flex items-center justify-center  ">
                    {/* Lottie animation beside heading */}
                    <div className="mr-6">
                        <Lottie options={lottieOptions} height={150} width={150} />
                    </div>
                    
                    {/* Contact Us heading */}
                    <div>
                        <h2 className="text-3xl font-bold text-teal-600 mb-4">Contact Us</h2>
                        <p className="text-xs font-semibold text-gray-600">We'd love to hear from you! Please fill out the form below.</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-lg bg-white p-8 rounded-lg shadow-xl border border-gray-200 mb-12 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Your Message"
                                rows="4"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className=" bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
