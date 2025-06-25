import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import donorLottie from '../../assets/lotties/donor.json'
import volunterLottie from '../../assets/lotties/volunter.json'
import foodLottie from '../../assets/lotties/browse.json'
import browseLottie from '../../assets/lotties/Animation - 1750619740722.json'
import Lottie from 'lottie-react';
import axios from 'axios';


const Community = () => {

    const [food,setFood] = useState([])
    useEffect(()=>{
        axios.get('https://food-sharing-server-kappa.vercel.app/foods').then(res=> setFood(res.data))
    },[])
    // console.log(food)



    return (
        <div className='mb-28'>


            <div className='flex flex-col md:flex-row gap-8 justify-between  mt-8'>


                <div className='bg-gray-200 basis-1/4 rounded-2xl flex flex-col items-center'>
                    <Lottie className='w-[150px] md:w-[200px]'  animationData={donorLottie} loop={true}></Lottie>
                    <p className='font-bold text-3xl md:text-5xl' >
                        <CountUp end={15}
                            duration={18}></CountUp>+
                    </p>
                    <p className=' text-xl mb-12' >Total Donor</p>

                </div>


                <div className='bg-gray-200 basis-1/4 rounded-2xl flex flex-col items-center'>
                    <Lottie className='w-[150px] md:w-[200px]' animationData={volunterLottie} loop={true}></Lottie>
                    <p className='font-bold text-3xl md:text-5xl' >
                        <CountUp end={5}
                            duration={18}></CountUp>+
                    </p>
                    <p className=' text-xl mb-12' >Total Volunter</p>

                </div>


                <div className='bg-gray-200 basis-1/4 rounded-2xl flex flex-col items-center justify-center'>
                <Lottie className='w-[150px] md:w-[200px]' animationData={foodLottie} loop={true}></Lottie>
                    <p className='font-bold text-3xl md:text-5xl' >
                        <CountUp end={food.length}
                            duration={18}></CountUp>+
                    </p>
                    <p className='text-xl mb-12' >Food Available</p>


                </div>


                <div className='bg-gray-200 basis-1/4 rounded-2xl flex flex-col items-center justify-center'>
                <Lottie className='w-[150px] md:w-[200px]' animationData={browseLottie} loop={true}></Lottie>
                    <p className='font-bold text-3xl md:text-5xl' >
                        <CountUp end={300}
                            duration={12}></CountUp>+
                    </p>
                    <p className=' text-xl mb-12' >People Browse</p>

                </div>


            </div>
        </div>
    );
};

export default Community;