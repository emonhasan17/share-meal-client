import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { useLoaderData } from 'react-router';

const SingleFood = () => {
    const food = useLoaderData()
     
    // console.log(food)
    return (
        <div>
            <div className='grid md:grid-cols-12 md:w-full mx-auto w-9/10 gap-6 mt-10'>

                <div className='md:col-span-8'>
                    <LeftSide food={food}></LeftSide>
                </div>

                <div className='md:col-span-4'>
                    <RightSide meal={food}></RightSide>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;