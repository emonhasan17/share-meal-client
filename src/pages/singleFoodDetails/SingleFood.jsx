import React, { useEffect, useState } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import privateLoading from '../../assets/lotties/private.json'
import Lottie from 'lottie-react';
const SingleFood = () => {
    const{user}= useAuth()
    const axiosSecure = useAxiosSecure()
    const params = useParams()
    console.log(params.id)
    const [food,setFood] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axiosSecure.get(`/foods/${params?.id}?email=${user.email}`)
        .then(res => {
            setFood(res.data)
            setLoading(false)
        })
    },[axiosSecure,params.id,user.email])
    // console.log(food)
    if (loading) return <div className='flex items-center justify-center h-[90vh]'>
        <Lottie style={{ width: '200px' }} animationData={privateLoading} loop={true}></Lottie>
    </div>
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