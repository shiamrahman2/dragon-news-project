import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise=fetch('/categories.json').then(res=>res.json());
const Categories = () => {
    const categoriesData=use(categoriesPromise);
    return (
        <div>
            <h2 className='font-bold text-xl'>Categories ({categoriesData.length})</h2>
            <div className='grid grid-cols-1 mt-3 '>
                {
                    categoriesData.map((category)=>( <NavLink
                      key={category.id}
                      className={'btn bg-base-100 border-none text-accent hover:bg-base-200 hover:font-semibold'}
                     to={`/category/${category.id}`}
                     >
                        {category.name}
                    </NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;