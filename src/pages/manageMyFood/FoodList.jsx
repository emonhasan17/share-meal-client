import React, {  useEffect, useState } from 'react';
import deleteLottie from '../../assets/lotties/delete.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const FoodList = ({ foodData }) => {


    const [manage, setManage] = useState([])

    useEffect(() => {
        setManage(foodData)
    }, [foodData])
    // console.log(manage)



    const handleDelete = (id, food) => {
        // console.log(id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete food from server-----------------
                axios.delete(`https://food-sharing-server-kappa.vercel.app/foods/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount) {
                            toast.success(`${food} deleted successfully`)
                            const updatedMeal = manage.filter(manages => manages._id !== id)
                            setManage(updatedMeal)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })


                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });



    }


    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-lg'>Food Name</th>
                            <th className='text-lg'>Status</th>
                            <th className='text-lg'>Expire Date</th>
                            <th className='text-lg'>Pickup Location</th>
                            <th className='text-lg'>Update Food</th>
                            <th className='text-lg'>Delete Food</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                         manage &&  manage.map((meal, index) => <tr key={meal._id}>
                                <th className='text-lg'>{index + 1}</th>
                                <td>
                                    <div className='md:flex items-center gap-4'>
                                        <img className='w-28 rounded-2xl' src={meal.image} alt="" />
                                        <p className='text-lg text-center'>{meal.food}</p>
                                    </div>
                                </td>
                                <td className='text-lg'>{meal.status}</td>
                                <td className='text-lg'>{meal.date}</td>
                                <td className='text-lg'>{meal.location}</td>
                                <td >

                                    <Link to={`/updateFood/${meal._id}`} className='btn'><img className='w-6' src="https://img.icons8.com/?size=80&id=8cZr8xZlNbXw&format=png" alt="" /> Update</Link>
                                </td>
                                <td><div>
                                    <button className='cursor-pointer' onClick={() => handleDelete(meal._id, meal.food)}>
                                        <Lottie style={{ width: '80px' }} animationData={deleteLottie} loop={true}></Lottie>
                                    </button>
                                </div></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodList;