import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayouts from '../Layouts/Homelayouts';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';
import Auth from '../Component/Auth/Auth';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
               Component:CategoryNews,
               loader:()=>fetch('/news.json'),
            }
         ]
         
    },
    {
        path:'/auth',
        Component:Auth,
        children:[
            {
                path:'/auth',
                Component:Login,
            },
            {
                path:'/auth/register',
                Component:Register,
            }
        ]
    }
])

export default router;