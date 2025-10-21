import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayouts from '../Layouts/Homelayouts';

const router=createBrowserRouter([
    {
         path:'/',
         Component:Homelayouts,
         
    }
])

export default router;