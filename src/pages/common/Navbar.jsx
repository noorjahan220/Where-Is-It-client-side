import React, { useContext } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg'
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user , signOutUser } = useContext(AuthContext);


    const handleSignOut =()=>{
        signOutUser()
        .then(()=>{
            toast.success('Successfully Sign out!');
        navigate('/');
        })
        .catch(() => {
            toast.error("Cannot sign Out, please try again.");
        });  
    }
  
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allItems">Lost & Found Items Page</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="lost and found logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={user.email} title={user.
                                        displayName
                                        }
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/addItems">Add Lost & Found Item Page</Link></li>
                            <li><Link to="/allRecovered">All Recovered Items Page</Link></li>
                            <li><Link to="/myItems">Manage My Items Page</Link></li>
                            <li><button onClick={handleSignOut}>SignOut</button></li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <NavLink to="/register" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-xs font-medium">
                            SignUp
                        </NavLink>
                        <NavLink to="/signin" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-xs font-medium">
                            SignIn
                        </NavLink>
                    </div>
                )}
            </div>
        </div>

    );
};


export default Navbar;