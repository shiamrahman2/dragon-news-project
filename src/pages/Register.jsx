import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
          <div className='flex justify-center min-h-screen items-center'>
           
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
             <h2 className='font-bold text-2xl text-center'>Register Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
             <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
            {/* Photo URL */}
             <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
            {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
      <p className='font-semibold text-center'>Already Have An Account ?<Link to='/auth'  className='text-blue-400 hover:text-blue-600'>Login</Link></p>
    </div>

        </div>
    );
};

export default Register;