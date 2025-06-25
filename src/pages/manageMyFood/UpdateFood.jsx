import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const meal = useLoaderData()
    const { date, food, image, location, note, quantity, status, _id } = meal
    // console.log(meal)


    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        // console.log(data)


        // update data in the server-----------------------
        axios.put(`https://food-sharing-server-kappa.vercel.app/foods/${_id}`,data)
            .then(res => {
                // console.log(res.data)
                if(res.data.modifiedCount){
                    Swal.fire('Data updated successfully')
                }
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })


    }


    return (
        <div>
            <h1 className='text-6xl text-center mt-16 mb-16'>Update Food</h1>
            <form onSubmit={handleUpdate} className='w-11/12 md:max-w-8/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 o gap-6 mb-6'>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Name </label>
                        <input type="text" name='food' defaultValue={food} className="input w-full h-[6vh]" placeholder="Food Name " />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Image</label>
                        <input type="text" name='image' defaultValue={image} className="input w-full h-[6vh]" placeholder="Food Image" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Food Quantity</label>
                        <input type="text" name='foodQuantity' defaultValue={quantity} className="input w-full h-[6vh]" placeholder="Food Quantity" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Pickup Location</label>
                        <input type="text" name='location' defaultValue={location} className="input w-full h-[6vh]" placeholder="Pickup Location" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Expired Date</label>
                        <input type="date" name='date' defaultValue={date} className="input w-full h-[6vh]" placeholder="Expired Date" />
                    </fieldset>


                    <fieldset className="fieldset rounded-box  p-4">
                        <label className="label">Additional Notes</label>
                        <input type="text" name='note' defaultValue={note} className="input w-full h-[6vh]" placeholder="Additional Notes" />
                    </fieldset>



                </div>


                <fieldset className="fieldset rounded-box  p-4">
                    <label className="label">Food Status</label>
                    <input type="text" name='status' defaultValue={status} className="input w-full h-[6vh]" placeholder="Food Status" />
                </fieldset>

                <div className=''>
                    <input className='btn w-full btn-success h-[6vh]' type="submit" value="Update Food" />
                </div>



            </form>
        </div>

    );
};

export default UpdateFood;