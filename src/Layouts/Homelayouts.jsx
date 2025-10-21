import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header/Header';

const Homelayouts = () => {
    return (
        <div>
            <section className='left_nav'>
                <Header></Header>
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