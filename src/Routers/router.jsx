import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayouts from '../Layouts/Homelayouts';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';

const router=createBrowserRouter([
    {
         path:'/',
         Component:Homelayouts,
         children:[
            {
                path:'/',
                Component:Home,
            },
            {
               path:'/category/:id',
               Component:CategoryNews
            }
         ]
         
    }
])

export default router;