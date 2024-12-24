import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/Authcontext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';



const Signin = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then(result=>{
            console.log('sign in ', result.user)
            // const user = {email: email}
            // axios.post('https://b10a11-server-side-noorjahan220-jq55gb3g7.vercel.app/jwt',user,{withCredentials: true})
            .then(res =>{
                console.log(res.data)
            })
        })
        .catch(error =>{
            console.log(error)
        })        
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Successfully signed in with Google!');
                navigate('/');
            })
            .catch(() => {
                toast.error("Cannot sign in, please try again.");
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition duration-300 hover:shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Login
                    </span>
                </h1>
                <form onSubmit={handleSignin} className="space-y-4">
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-black dark:text-black">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
                            required
                        />
                    </div>
                    <div className="form-group relative">
                        <label className="label">
                            <span className="label-text text-black dark:text-black">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Your password"
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-gray-600 dark:text-gray-400">Forgot password?</a>
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[3.30rem] text-black dark:text-black"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="form-group mt-6">
                        <button className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                            Login
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline w-full mt-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Sign in with Google
                    </button>
                    <div className="text-center mt-4 text-gray-600 dark:text-gray-300">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;