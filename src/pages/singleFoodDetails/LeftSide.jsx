import React, { useEffect, useState } from 'react';
import RequestModal from './RequestModal';
import axios from 'axios';
import Swal from 'sweetalert2';

const LeftSide = ({ food }) => {
    const { _id, userProfile, image, status } = food

    const [texts, setTexts] = useState(status)
    // console.log(text)
    // useEffect(()=>{
    //     axios(`https://food-sharing-server-kappa.vercel.app/foods?status=${status}`)
    // },[])
    // console.log(texts)

    const handleRequest = (id) => {

        // console.log(texts)
        const updatedStatusAgain = {
            status: 'available'
        }


        if (texts === 'available') {
            document.getElementById(`${id}`).showModal()
        }
        if (texts !== 'available') {

            Swal.fire({
                title: "Do you want to delete your request?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {



                    // remove food request--------------
                    axios.delete(`https://food-sharing-server-kappa.vercel.app/request/${_id}`)
                        .then(res => {
                            // console.log(res.data)
                            if (res.data.deletedCount) {

                                // update status-------------------

                                axios.patch(`https://food-sharing-server-kappa.vercel.app/foods/${_id}`, updatedStatusAgain)
                                    .then(res => {
                                        // console.log(res.data)
                                        if (res.data.modifiedCount) {
                                            setTexts('available')
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })

                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })



                    Swal.fire({
                        title: "Deleted!",
                        text: "Your request has been deleted.",
                        icon: "success"
                    });
                }
            });
        }

        // document.getElementById(`${id}`).showModal()
    }


    return (
        <div>
            <div>
                <img className='rounded-2xl md:w-[1050px] md:h-[600px]' src={image} alt="" />
            </div>
            <div className='md:flex justify-between items-center mt-6 space-y-2'>
                <div>
                    <h1 className='md:text-5xl text-2xl'>Recipe Added By</h1>
                    <div className='flex md:mt-6 mt-3 gap-3'>
                        <img className=' w-10 rounded-full' src={userProfile.profile} alt="" />
                        <h1 className='md:text-4xl text-2xl'>{userProfile.donor}</h1></div>

                </div>
                <div className='pr-2'>
                    <button onClick={() => handleRequest(_id)} className='btn btn-success px-16 py-10 text-4xl'>{

                        texts === 'available' ? "Request" : "Requested"


                    }</button>
                    <RequestModal meal={food} setTexts={setTexts}></RequestModal>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default LeftSide;