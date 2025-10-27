import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qneen from './Qneen';

const Rightaside = () => {
    return (
        <div className='space-y-8'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <Qneen></Qneen>
        </div>
    );
};

export default Rightaside;