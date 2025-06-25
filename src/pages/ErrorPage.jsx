import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-10/12 mt-20 mx-auto'>
            
           <div className=' flex flex-col min-h-[60vh] items-center justify-center space-y-5'>
           <img className='w-[500px] rounded-xl shadow-2xl ' src='https://i.ibb.co/99Lkm2z7/4731bb5b-33b2-463e-9356-a1790ec0f985.jpg' alt="" />
           <h1 className=' font-bold text-5xl'>404-Page Not Found</h1>
           <p className='text-xl text-gray-500'>Opps! The Page You are Looking for doesn't exist.</p>
           <Link to='/'>
           <button className='bg-green-600 text-xl px-4 py-3 rounded-xl text-white'>Go back Home</button>
           </Link>
           </div>
        </div>
    );
};

export default ErrorPage;