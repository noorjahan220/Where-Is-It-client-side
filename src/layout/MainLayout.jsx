import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/common/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
             <Toaster />
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;