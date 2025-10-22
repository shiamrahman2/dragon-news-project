import React from 'react';
import Categories from '../Categories/Categories';
import { Suspense } from 'react';
const Leftaside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
             <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default Leftaside;