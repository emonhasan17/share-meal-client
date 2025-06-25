import React from 'react';
import useAuth from '../Hooks/useAuth';
import Slider from '../components/homeComponents/slider/slider';
import AvailableFoodCard from '../components/AvailableFoodCard';
import { useLoaderData } from 'react-router';
import Community from '../components/homeComponents/Community';
import Volunter from '../components/homeComponents/Volunter';

const Home = () => {

    const { user } = useAuth()
    const meals = useLoaderData()
    // console.log(user, meals)
    const layout = false



    return (
        <div>


            <div className='text-center space-y-3 mt-3 mb-10 '>
                <h1 className='text-5xl md:text-6xl font-semibold text-gray-700'>Share Food. Spread Hope</h1>
                <p className='text-xl text-gray-600 px-2'>Connecting people with extra food to those who need it — because no one should go hungry.</p>
            </div>


            <div className=' h-[40vh] lg:h-[70vh] mx-auto rounded-4xl md:w-full max-w-11/12 mb-10 '>
                <Slider></Slider>
            </div>


            <div>


                <div className='text-center space-y-3 mt-24 mb-10 '>
                    <h1 className='md:text-6xl text-5xl font-semibold text-gray-700'>Featured Meals Available Now</h1>
                    <p className='text-xl  px-2 text-gray-600'>Freshly prepared food shared by our community — ready for pickup before it’s gone.</p>
                </div>


                <div className='grid grid-cols-2 md:grid-cols-3 w-11/12 mx-auto md:w-10/12 gap-6 md:gap-8 mt-10'>
                    {
                        meals.map(meal => <AvailableFoodCard key={meal._id} meal={meal} layout={layout}></AvailableFoodCard>)
                    }
                </div>

            </div>

            <div>
                <div className='text-center space-y-3 mt-24 mb-10 '>
                    <h1 className='text-5xl md:text-6xl font-semibold text-gray-700'>Join Our Food Sharing Community</h1>
                    <p className='text-xl px-2 text-gray-600'>Be a part of a growing movement that rescues food, feeds the hungry, and spreads kindness.<br></br> Together, we can make sure no meal goes to waste and no person goes unfed.</p>
                </div>
                <div className='w-9/12 mx-auto md:w-10/12 gap-4 md:gap-8 mt-10'>
                    <Community></Community>
                </div>
            </div>


            <div>
                <div className='text-center space-y-3 mt-24 mb-10 '>
                    <h1 className='text-4xl md:text-6xl font-semibold text-gray-700'>Fuel the Mission. Lead with Action.</h1>
                    <p className='text-xl px-[6px] text-gray-600'>Join hands with fellow changemakers. Find your volunteer tasks, schedules, and resources <br /> to help deliver food and hope where it’s needed most.</p>
                </div>
                <div className='w-11/12 mx-auto md:w-10/12 gap-4 md:gap-8 mt-10'>
                    <Volunter></Volunter>
                </div>
            </div>


        </div>
    );
};

export default Home;