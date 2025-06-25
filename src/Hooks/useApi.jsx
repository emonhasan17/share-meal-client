
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useApi = () => {

    const axiosSecure = useAxiosSecure()

// console.log(axiosSecure)

    const manageMyFoodPromise = async (email) => {
        return axiosSecure.get(`/foods/email?email=${email}`).then(res => res.data)
        
        // await fetch(`https://food-sharing-server-kappa.vercel.app/foods/email?email=${email}`,{
        //     headers: {
        //         authorization: `Bearer ${accessToken}`
        //     }
        // }).then(res => res.json())
    }
    const myFoodReqPromise = async (email) => {

        return axiosSecure.get(`/request?email=${email}`).then(res => res.data)



        // return await fetch(`https://food-sharing-server-kappa.vercel.app/request?email=${email}`,{
        //     credentials: 'include',
        //     headers: {
        //         authorization : `Bearer ${accessToken}`
        //     }
        // }).then(res => res.json())
    }


    return {
        manageMyFoodPromise,
        myFoodReqPromise
    }

        ;
};

export default useApi;