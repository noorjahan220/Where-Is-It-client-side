import React, { useContext, useState } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully signed out!');
            })
            .catch(() => {
                toast.error('Cannot sign out, please try again.');
            });
    };

    const links = (
        <>
            <li><NavLink to="/" className="hover:text-teal-400 transition">Home</NavLink></li>
            <li><NavLink to="/allItems" className="hover:text-teal-400 transition">Lost & Found Items</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-white text-teal-600 shadow-lg px-3 lg:px-8">
            <div className="navbar  mx-auto ">
                {/* Navbar Start */}
                <div className="navbar-start flex items-center">
                    {/* Logo */}
                    <img className="w-16 rounded-full" src={logo} alt="Lost and Found Logo" />
                    <span className="text-2xl font-bold ml-3 font-poppins text-teal-600">WhereIsIt</span>
                </div>

                {/* Navbar Center for Large Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-6 text-teal-600 font-medium">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center space-x-4">
                    {user ? (
                        // User is logged in - Show Profile Dropdown
                        <div className="dropdown dropdown-end">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar hover:bg-teal-200 transition">
                                <div className="w-10 rounded-full">
                                    <img alt={user.email} title={user.displayName} src={user.photoURL} />
                                </div>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white text-teal-600 rounded-box mt-3 w-52 shadow-lg">
                                  <li><NavLink to="/" className="hover:text-teal-400 transition">Home</NavLink></li>
                                  <li><NavLink to="/allItems" className="hover:text-teal-400 transition">Lost & Found Items</NavLink></li>  
                                <li><Link to="/addItems">Add Lost & Found Item</Link></li>
                                <li><Link to="/allRecovered">All Recovered Items</Link></li>
                                <li><Link to="/myItems">Manage My Items</Link></li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-l transition">
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // User is not logged in - Show Hamburger Menu on Small Screens
                        <div className="lg:hidden">
                            <button
                                className="btn btn-ghost btn-circle"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isMenuOpen && (
                                <div className="absolute top-14 right-4 bg-white rounded-lg shadow-lg z-50 w-48">
                                    <ul className="menu menu-compact space-y-2 p-4 text-teal-600">
                                        {links}
                                        <li>
                                            <NavLink
                                                to="/register"
                                                className="block bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-l transition"
                                            >
                                                Sign Up
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/signin"
                                                className="block bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-l transition"
                                            >
                                                Sign In
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Sign Up/Sign In for Large Screens */}
                    {!user && (
                        <div className="hidden lg:flex space-x-4">
                            <NavLink
                                to="/register"
                                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-5 rounded-md hover:bg-gradient-to-l transition text-[0.8rem]"
                            >
                                Sign Up
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-5 rounded-md hover:bg-gradient-to-l transition text-[0.8rem]"
                            >
                                Sign In
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
