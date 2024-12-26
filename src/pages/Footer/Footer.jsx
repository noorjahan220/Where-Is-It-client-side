import React from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-r from-teal-500 to-teal-700 text-white p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo and Info Section */}
          <aside className="flex flex-col items-center md:items-start space-y-4">
            <img
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              src={logo}
              alt="WhereIsIt Logo"
            />
            <p className="text-lg font-medium text-center md:text-left">
              WhereIsIt. <br />
              Providing reliable services since 1992
            </p>
          </aside>

          {/* Services Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Services</h6>
            <div className="space-y-3">
              <a href="#" className="link link-hover hover:text-teal-200 transition">Branding</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Design</a>
              <br />

              <a href="#" className="link link-hover hover:text-teal-200 transition">Marketing</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Advertisement</a>
            </div>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Company</h6>
            <div className="space-y-3">
              <a href="#" className="link link-hover hover:text-teal-200 transition">About us</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Contact</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Jobs</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Press kit</a>
            </div>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Legal</h6>
            <div className="space-y-3">
              <a href="#" className="link link-hover hover:text-teal-200 transition">Terms of use</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Privacy policy</a>
              <br />
              <a href="#" className="link link-hover hover:text-teal-200 transition">Cookie policy</a>
            </div>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} WhereIsIt. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
