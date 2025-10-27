import React from 'react';
import classImg from '../../assets/class.png';
import playground from '../../assets/playground.png';
import swimimg from '../../assets/swimming.png';
import adImg from '../../assets/bg.png';
const Qneen = () => {
    return (
      <div>
            <div className='bg-base-200'>
            <h2 className='font-bold text-xl mb-3'>Q-Zone</h2>
            <div className='flex flex-col gap-2 mx-auto'>
            <img  src={swimimg} alt="" />
            <img src={classImg}></img>
            <img src={playground}></img>
            </div>
            
        </div>
        <img className='mx-auto mt-4 mb-2' src={adImg} alt="" />
      </div>
    );
};

export default Qneen;