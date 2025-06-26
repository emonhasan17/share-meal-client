import React, { Suspense, useEffect, useState } from 'react';
import FoodReqCard from './FoodReqCard';
import useAuth from '../../Hooks/useAuth';
import FoodReqData from './FoodReqData';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyFoodRequest = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [foodReq,setFoodReq] = useState([])
    useEffect(()=>{
        axiosSecure.get(`/request?email=${user?.email}`).then(res => setFoodReq(res.data))
    },[axiosSecure,user?.email])

    // console.log(user.accessToken)


    return (
        <div>
            

            <div>
                    <FoodReqData foodReq={foodReq}></FoodReqData>
                
            </div>
        </div>
    );
};

export default MyFoodRequest;