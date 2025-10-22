import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayouts from '../Layouts/Homelayouts';
import Home from '../pages/Home';
import Category from '../pages/Category';

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
               Component:Category
            }
         ]
         
    }
])

export default router;