import React, { useContext, useState } from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const isValidPassword =
      password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

    if (!isValidPassword) {
      toast.error('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
      return;
    }

    try {
      // Call createUser from AuthContext, passing name and photo
      await createUser(email, password, name, photo);

      const newUser = { email, displayName: name, photoURL: photo };
      await fetch('https://b10a11-server-side-noorjahan220.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      toast.success('Successfully registered!');
      navigate('/');
    } catch (error) {
      toast.error("Cannot sign up, please try again.");
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Successfully signed up with Google!');
        navigate('/');
      })
      .catch((error) => {
        toast.error("Cannot sign up, please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 transition duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-600">
          <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            Sign Up
          </span>
        </h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="form-group">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text text-black">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />
          </div>
          <div className="form-group relative">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Your password"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-black"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-group mt-6">
            <button className="btn w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:bg-teal-600 transition duration-300">
              Sign Up
            </button>
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full mt-4 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition duration-300"
          >
            Sign up with Google
          </button>
          <div className="text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-teal-500 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
