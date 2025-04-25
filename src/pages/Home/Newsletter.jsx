import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can handle the actual subscription logic
        // For now, we'll show a success message
        Swal.fire({
            icon: 'success',
            title: 'Thank You for Your Subscription!',
            text: 'You will receive updates soon.',
            position: 'top',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true, // Optional: Add progress bar
        });

        // Scroll to top after submission
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Reset the email input field
        setEmail('');
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeInOut' }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-900 p-12 m-12">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6 text-teal-600"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Never Miss an Update
                    </span>
                </motion.h2>
                <motion.p
                    className="text-gray-600 font-semibold mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    Subscribe to our newsletter to get the latest updates on found items, platform improvements, and helpful tips!
                </motion.p>
                <form
                    className="flex flex-col md:flex-row justify-center items-center gap-4"
                    onSubmit={handleSubmit}
                >
                    <motion.input
                        type="email"
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-600"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        required
                        variants={inputVariants}
                        initial="hidden"
                        animate="show"
                    />
                    <motion.button
                        type="submit"
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-4 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-700 transition duration-300"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="show"
                    >
                        Subscribe
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
