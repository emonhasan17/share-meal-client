import React from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AddFood = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        

        const{foodQuantity,donor,profile,email,...food} = data
        const quantity = parseInt(foodQuantity)
        food.userProfile = {donor,profile,email}
        food.quantity = quantity
        // console.log(food)

        // add food in the server----------------
        axiosSecure.post(`/foods?email=${user.email}`,food)
        .then(res => {
            if(res.data.insertedId){
                toast.success('food added successfully')
                form.reset()
            }
        })
        .catch(error => {
            console.log(error)
        })

    }


    return (
        <div>
            <div className='text-center space-y-4 mt-3'>
                <h1 className='text-5xl md:text-6xl px-2 font-semibold'>Donate Your Extra Food</h1>
                <p className='text-xl md:text-2xl px-2'>Post extra food you have, and help someone in need eat today.</p>
            </div>


            <form onSubmit={handleAddFood}>
                <div className='w-10/12 md:max-w-8/12 mx-auto'>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Name </label>
                        <input type="text" name='food' className="input w-full h-[6vh]" placeholder="Food Name " />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Image</label>
                        <input type="text" name='image' className="input w-full h-[6vh]" placeholder="Food Image" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Quantity</label>
                        <input type="text" name='foodQuantity' className="input w-full h-[6vh]" placeholder="Food Quantity" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Pickup Location</label>
                        <input type="text" name='location' className="input w-full h-[6vh]" placeholder="Pickup Location" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Expired Date</label>
                        <input type="date" name='date' className="input w-full h-[6vh]" placeholder="Expired Date"/>
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Additional Notes</label>
                        <input type="text" name='note' className="input w-full h-[6vh]" placeholder="Additional Notes"/>
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Donor Name</label>
                        <input type="text" name='donor' defaultValue={user?.displayName} className="input w-full h-[6vh]" placeholder="Donor Name"/>
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Donor Image</label>
                        <input type="text" name='profile' defaultValue={user?.photoURL} className="input w-full h-[6vh]" placeholder="Donor Image"/>
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Donor Email</label>
                        <input type="text" name='email' defaultValue={user?.email} className="input w-full h-[6vh]" placeholder="Donor Email"/>
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Status</label>
                        <input type="text" name='status' defaultValue='available' className="input w-full h-[6vh]" placeholder="Food Status"/>
                    </fieldset>


                </div>

                <div className='w-10/12 md:w-8/12 mx-auto'>
                    <input className='btn w-full bg-success' type="submit" value="Add Food" />
                </div>

                
            </form>

        </div>
    );
};

export default AddFood;