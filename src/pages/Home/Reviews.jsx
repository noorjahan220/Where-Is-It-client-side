import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews] = useState([
        {
            "_id": "1",
            "name": "John Doe",
            "rating": 5,
            "comment": "This platform helped me recover my lost bag in no time! Excellent service and a very user-friendly interface. Highly recommended!"
        },
        {
            "_id": "2",
            "name": "Jane Smith",
            "rating": 4,
            "comment": "The service is good, but I think it would be even better if there were more categories for different items. Overall, I'm satisfied."
        },
        {
            "_id": "3",
            "name": "Fahim Khan",
            "rating": 5,
            "comment": "Amazing! I found my missing phone using this platform, and it was a super easy process. Thank you !"
        },
        {
            "_id": "4",
            "name": "Ayesha Siddiqui",
            "rating": 3,
            "comment": "It works well for lost items, but I had difficulty reaching out to support. Some improvement in customer service would make this perfect."
        },
        {
            "_id": "5",
            "name": "Ali Rahman",
            "rating": 4,
            "comment": "Very reliable website. I was able to post my lost item and get quick responses from people who found similar items."
        },
        {
            "_id": "6",
            "name": "Sara Ali",
            "rating": 5,
            "comment": "A fantastic experience! Found my lost wallet in less than 24 hours. The interface is clean, and the process is so simple."
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(1); // Default to 1 for small screens

    const totalReviews = reviews.length;

    useEffect(() => {
        // Adjust the number of cards per slide based on screen width
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerSlide(3); // Show 3 cards on large screens
            } else {
                setCardsPerSlide(1); // Show 1 card on small screens
            }
        };

        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize); // Add resize event listener

        return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
    }, []);

    // Next Slide Function with Circular Logic
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsPerSlide) % totalReviews); // Loop back to the first card
    };

    // Previous Slide Function with Circular Logic
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - cardsPerSlide + totalReviews) % totalReviews); // Loop to the last card
    };

    return (
        <div className="container mx-auto px-6 py-8  mb-12">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-teal-600 mb-2">Customer Reviews</h2>
                <p className="text-gray-600 font-semibold">Read what our users have to say!</p>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
                >
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4`}
                        >
                            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
                                <h3 className="text-2xl font-semibold text-teal-600 mb-3">{review.name}</h3>
                                <p className="text-gray-500 text-base mb-4">{review.comment}</p>
                                <div className="flex items-center mt-4">
                                    <span className="text-yellow-400">{"⭐".repeat(review.rating)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full"
                    onClick={goToPreviousSlide}
                >
                    &#60;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full"
                    onClick={goToNextSlide}
                >
                    &#62;
                </button>
            </div>

            {/* Footer Section */}
            <div className="text-center mt-8">
                <Link to="/addReview">
                    <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none">
                        Add Your Review
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Reviews;
