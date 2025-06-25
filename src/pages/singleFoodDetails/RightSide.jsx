import React from 'react';

const RightSide = ({meal}) => {
    const {date,food,location,note,quantity,status} = meal
    return (
        <div>
            <div className='space-y-4 md:px-6'>
                    <h1 className='md:text-6xl text-4xl font-medium '>{food}</h1>

                    {/* <p className='md:text-4xl text-2xl '>{liked} people interested in this recipe</p> */}
                    <p className='md:text-3xl text-2xl'>Expired Date:</p>
                    <p className='bg-green-600 md:text-3xl text-2xl py-4  rounded-2xl text-white text-center'>{date}</p>
                    {/* <div className='pb-8 border-b-1 border-gray-400'>
                        <p className='md:text-3xl  text-2xl'>
                            <span className=' '>Categories</span>
                            {
                                categories.map(cat => <li className='border-1 border-amber-400  mb-4 mt-4 text-center py-4 rounded-2xl '>{cat}</li>)
                            }
                        </p>
                    </div> */}
                    
                    <p className='md:text-3xl text-2xl font-medium bg-green-600  text-center mb-4 mt-4  py-4  rounded-2xl text-white'> <span className=''>Status:</span> {status}</p>
                    <p className='md:text-3xl text-2xl font-medium bg-green-600  text-center mb-4 mt-4  py-4  rounded-2xl text-white'> <span className=''>Quantity:</span> {quantity}</p>
                    
                    <p className='md:text-3xl text-2xl'>About Food:</p>
                    <p className=' md:text-3xl text-xl  py-4 px-4 text-center text-white rounded-2xl border-1 bg-green-600  '>{note}</p>
                    <p className='md:text-3xl text-2xl'>Pick Up From </p>
                    <p className='md:text-3xl text-xl py-4 px-4 text-center text-white rounded-2xl border-1 bg-green-600   '>{location}</p>
                </div>
        </div>
    );
};

export default RightSide;