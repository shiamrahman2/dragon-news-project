import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='mt-3'>
            <h2 className='font-bold text-xl mb-3'>Find Us On</h2>
           <div className="">
               <div className="join join-vertical w-full ">
                <button className="btn join-item justify-start bg-base-100 text-lg"><FaFacebook></FaFacebook>  Facebook</button>
                <button className="btn join-item justify-start bg-base-100 text-lg "> <FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start bg-base-100 text-lg"><FaInstagram></FaInstagram> Instagram</button>
            </div>
           </div>
        </div>
    );
};

export default FindUs;