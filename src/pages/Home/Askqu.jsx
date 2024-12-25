import React from 'react';

const Askqu = () => {
    return (
        <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <h1 className="text-3xl font-bold text-center mb-6 text-teal-600">
                Frequently Asked Questions
            </h1>
            <div className="join join-vertical w-full">
                {/* Question 1 */}
                <div className="collapse collapse-arrow join-item border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200">
                        How do I report a lost item?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300">
                        <p>
                            To report a lost item, go to the "Report Lost Item" page and fill out the form with details such as item description, last known location, and your contact information.
                        </p>
                    </div>
                </div>
                {/* Question 2 */}
                <div className="collapse collapse-arrow join-item border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200">
                        What should I do if I find an item?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300">
                        <p>
                            If you find an item, visit the "Found Items" page and submit the details, including a description, where it was found, and a photo if possible. This helps connect you with the rightful owner.
                        </p>
                    </div>
                </div>
                {/* Question 3 */}
                <div className="collapse collapse-arrow join-item border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200">
                        How does the platform ensure privacy?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300">
                        <p>
                            We prioritize your privacy by only sharing necessary contact details between the finder and the owner. All other information remains confidential.
                        </p>
                    </div>
                </div>
                {/* Question 4 */}
                <div className="collapse collapse-arrow join-item border border-gray-300 dark:border-gray-700 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Is there a fee to use the platform?
                    </div>
                    <div className="collapse-content text-gray-700 dark:text-gray-300">
                        <p>
                            No, our platform is free to use for both reporting lost items and submitting found items. We aim to connect people and reunite them with their belongings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Askqu;
