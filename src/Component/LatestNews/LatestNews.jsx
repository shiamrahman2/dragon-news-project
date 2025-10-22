import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center p-4 bg-base-200 w-11/12 mx-auto gap-5 mt-2'>
            <p className='bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex ' pauseOnHover={true} speed={60}>
                <p className='font-semibold ml-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold ml-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold ml-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;