import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header/Header';
import LatestNews from '../Component/LatestNews/LatestNews';
import Navbar from '../Component/Navbar/Navbar';
import Leftaside from '../Component/homelayout/leftaside';
import Rightaside from '../Component/homelayout/rightaside';

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
           <main className='w-11/12 mx-auto gap-5 mt-4 grid grid-cols-12'>
            <aside className='col-span-3'>
                 <section className='left-aside'>
                    <Leftaside></Leftaside>
                 </section>
            </aside>
               <section className="main col-span-6">
                <Outlet></Outlet>
               </section>
             <aside className='col-span-3'>
                <Rightaside></Rightaside>
             </aside>
           </main>
            <section className="right_nav">

            </section>
        </div>
    );
};

export default Homelayouts;