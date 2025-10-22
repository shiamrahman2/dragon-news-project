import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header/Header';
import LatestNews from '../Component/LatestNews/LatestNews';
import Navbar from '../Component/Navbar/Navbar';

const Homelayouts = () => {
    return (
        <div>
            <section className='left_nav'>
                <Header></Header>
                <section>
                     <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto gap-5 mt-4'>
                    <Navbar></Navbar>
                </nav>
            </section>
            <section className="main">
                <Outlet></Outlet>
            </section>
            <section className="right_nav">

            </section>
        </div>
    );
};

export default Homelayouts;