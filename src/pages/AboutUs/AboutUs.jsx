import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaBullseye, FaHandshake, FaHeart, FaEnvelope, FaSearch, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
      {/* Hero Section */}
      <section className="text-center mb-20 ">
        <h1 className="text-3xl md:text-xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          About WhereIsIt
        </h1>
        <p className="text-[15px] font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing the way we reconnect people with their lost belongings through 
          <span className="font-semibold text-teal-700"> community power</span> and 
          <span className="font-semibold text-teal-700"> advanced technology</span>.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-20 fade-in">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-50">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-xl text-teal-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-600 text-xs  leading-7">
            To create a world where lost items always find their way home. We're building a global network
            that combines community vigilance with smart verification systems to deliver 
            <span className="text-teal-600 font-medium"> 92% faster</span> reunions compared to traditional methods.
          </p>
        </div>

        <div className="bg-teal-900 rounded-2xl p-8 shadow-lg text-white">
          <div className="flex items-center mb-4">
            <FaHandshake className="text-xl text-teal-300 mr-3" />
            <h2 className="text-xl font-semibold">Our Promise</h2>
          </div>
          <p className="leading-7 text-xs opacity-90">
            Every search is handled with care. We employ military-grade encryption and 
            <span className="font-medium text-teal-200"> 3-step verification</span> to ensure safe returns,
            maintaining the highest standards of privacy and security for all users.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white rounded-2xl shadow-xl p-10 mb-20 fade-in">
        <h2 className="text-xl font-bold mb-12 text-center text-gray-800">
          <FaSearch className="inline-block mr-3 text-teal-600" />
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {icon: FaSearch, title: "Report", text: "Quickly post details with photos and last known location"},
            {icon: FaShieldAlt, title: "Verify", text: "Our AI cross-checks details with community reports"},
            {icon: FaHeart, title: "Reunite", text: "Secure connection and verified return process"}
          ].map((item, index) => (
            <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-all">
              <item.icon className="text-lg text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 font-semibold text-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20 fade-in">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-10 text-white shadow-xl">
          <h2 className="text-xl font-bold mb-8">Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {title: "Integrity First", text: "All interactions are verified and transparent"},
              {title: "Community Power", text: "Leveraging collective vigilance for greater good"},
              {title: "Tech for Good", text: "Ethical AI that respects privacy and security"}
            ].map((value, index) => (
              <div key={index} className="p-4 bg-white bg-opacity-10 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="opacity-90 text-xs font-semibold">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-2xl shadow-xl p-10 fade-in">
        <div className="text-center">
          <FaEnvelope className="text-xl text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Need Help?</h2>
          <p className="text-xs font-semibold text-gray-600 mb-6">Our support team is here 24/7</p>
          <Link to="/contact" className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors  shadow-lg hover:shadow-teal-200">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;