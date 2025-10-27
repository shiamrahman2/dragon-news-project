import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
           <header className='w-11/12 py-5 px-4'>
               <Navbar></Navbar>
           </header>
           <main  className='w-11/12 py-5 px-4 '>
               <Outlet></Outlet>
           </main>
        </div>
    );
};

export default Auth;