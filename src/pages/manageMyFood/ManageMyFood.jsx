import React, { Suspense, useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import FoodList from './FoodList';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageMyFood = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        axiosSecure.get(`/foods/email?email=${user?.email}`).then(res => setFoodData(res.data))
    }, [user?.email, axiosSecure])


    return (
        <div>
            <div className='text-center space-y-4 mt-6 mb-10'>
                <h1 className='md:text-6xl  font-semibold text-gray-700'>Manage My <span className='text-green-500'>Food</span> Donations</h1>
                <p className='text-xl px-2 md:text-2xl text-gray-500'>View, edit, or remove your donated food items. Keep your listings up-to-date to help those in need.</p>
            </div>
            <div>

                <FoodList foodData={foodData}></FoodList>

            </div>
        </div>
    );
};

export default ManageMyFood;