import React, { use } from 'react';

const categoriesPromise=fetch('/public/categories.json').then(res=>res.json());
const Categories = () => {
    const categoriesData=use(categoriesPromise);
    return (
        <div>
            <h2 className='font-bold text-xl'>Categories ({categoriesData.length})</h2>
        </div>
    );
};

export default Categories;