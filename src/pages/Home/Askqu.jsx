import React from 'react';
import { motion } from 'framer-motion';

const Askqu = () => {
    const faqVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="container mx-auto my-8 p-6 max-w-3xl">
            <motion.h1 
                className="text-3xl font-bold text-center mb-6 text-teal-600 dark:text-teal-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                Frequently Asked Questions
            </motion.h1>
            
            <motion.div 
                className="join join-vertical w-full"
                variants={faqVariants}
                initial="hidden"
                animate="show"
            >
                {/* Question 1 */}
                <motion.div 
                    className="collapse collapse-arrow join-item border border-gray-200 dark:border-gray-700 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={itemVariants}
                >
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800">
                        How do I report a lost item?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 pt-4">
                        <p>
                            To report a lost item, go to the "Report Lost Item" page and fill out the form with details such as item description, last known location, and your contact information.
                        </p>
                    </div>
                </motion.div>
                
                {/* Question 2 */}
                <motion.div 
                    className="collapse collapse-arrow join-item border border-gray-200 dark:border-gray-700 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={itemVariants}
                >
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800">
                        What should I do if I find an item?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 pt-4">
                        <p>
                            If you find an item, visit the "Found Items" page and submit the details, including a description, where it was found, and a photo if possible. This helps connect you with the rightful owner.
                        </p>
                    </div>
                </motion.div>
                
                {/* Question 3 */}
                <motion.div 
                    className="collapse collapse-arrow join-item border border-gray-200 dark:border-gray-700 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={itemVariants}
                >
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800">
                        How does the platform ensure privacy?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 pt-4">
                        <p>
                            We prioritize your privacy by only sharing necessary contact details between the finder and the owner. All other information remains confidential.
                        </p>
                    </div>
                </motion.div>
                
                {/* Question 4 */}
                <motion.div 
                    className="collapse collapse-arrow join-item border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={itemVariants}
                >
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800">
                        Is there a fee to use the platform?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 pt-4">
                        <p>
                            No, our platform is free to use for both reporting lost items and submitting found items. We aim to connect people and reunite them with their belongings.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Askqu;