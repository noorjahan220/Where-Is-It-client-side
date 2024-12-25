import React, { useContext } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully signed out!');
                navigate('/');
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
        <div className="sticky top-0 z-50 bg-white text-teal-600 shadow-lg">
            <div className="navbar max-w-7xl mx-auto px-4 py-4">
                <div className="navbar-start flex items-center">
                    {/* Logo */}
                    <img className="w-16 rounded-full" src={logo} alt="Lost and Found Logo" />
                    <span className="text-2xl font-bold ml-3 font-poppins text-teal-600">WhereIsIt</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Menu Links */}
                    <ul className="menu menu-horizontal space-x-6 text-teal-600 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center space-x-4">
                    {user ? (
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
                                <li><Link to="/addItems">Add Lost & Found Item</Link></li>
                                <li><Link to="/allRecovered">All Recovered Items</Link></li>
                                <li><Link to="/myItems">Manage My Items</Link></li>
                                <li><button onClick={handleSignOut} className="hover:text-teal-400 transition">Sign Out</button></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <NavLink
                                to="/register"
                                className="btn btn-outline text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition">
                                Sign Up
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="btn btn-outline text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition">
                                Sign In
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
