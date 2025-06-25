import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const RequestModal = ({ meal,setTexts }) => {

    const { user } = useAuth()

    const { food, image, _id, userProfile, location, date, note } = meal

    const today = new Date().toLocaleString().split(',')[0]
    // console.log(meal)



    const handleRequest = (e) => {

        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        // console.log(data)
        const updatedStatus = {
            status: 'requested'
        }
        

        // post request food in server----------------

        axios.post(`https://food-sharing-server-kappa.vercel.app/request?id=${_id}`, data)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    toast.success(`request added for ${food} successfully`)

                    // update status---------------------
                    axios.patch(`https://food-sharing-server-kappa.vercel.app/foods/${_id}`, updatedStatus)
                        .then(res => {
                            // console.log(res.data)
                            if(res.data.modifiedCount){
                                setTexts('requested')
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


        document.getElementById(`${_id}`).close()

    }


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id={`${_id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form onSubmit={handleRequest}>
                        <div className='max-w-8/12 mx-auto'>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Food Name </label>
                                <input type="text" name='food' value={food} className="input w-full h-[6vh]" placeholder="Food Name " readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Food Image</label>
                                <input type="text" name='image' value={image} className="input w-full h-[6vh]" placeholder="Food Image" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Food Id</label>
                                <input type="text" name='id' value={_id} className="input w-full h-[6vh]" placeholder="Food Id" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Donor Name</label>
                                <input type="text" name='donor' value={userProfile?.donor} className="input w-full h-[6vh]" placeholder="Donor Name" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Donor Email</label>
                                <input type="text" name='donorEmail' value={userProfile?.email} className="input w-full h-[6vh]" placeholder="Donor Email" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">User Email</label>
                                <input type="text" name='userEmail' defaultValue={user?.email} className="input w-full h-[6vh]" placeholder="Donor Email" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Request Date</label>
                                <input type="text" name='reqDate' value={today} className="input w-full h-[6vh]" placeholder="Donor Email" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Pickup Location</label>
                                <input type="text" name='location' value={location} className="input w-full h-[6vh]" placeholder="Pickup Location" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Expired Date</label>
                                <input type="date" name='expire' value={date} className="input w-full h-[6vh]" placeholder="Expired Date" readOnly />
                            </fieldset>


                            <fieldset className="fieldset rounded-box  p-4">
                                <label className="label">Additional Notes</label>
                                <input type="text" name='note' defaultValue={note} className="input w-full h-[6vh]" placeholder="Additional Notes" />
                            </fieldset>


                        </div>

                        <div className='w-8/12 mx-auto'>
                            <input className='btn w-full' type="submit" value="Request" />
                        </div>


                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default RequestModal;