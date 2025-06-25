import React, { useEffect, useState } from 'react';
import AvailableFoodCard from '../components/AvailableFoodCard';
import axios from 'axios';

const AvailableFood = () => {
    const [availableFood, setAvailableFood] = useState([])
    const [search, setSearch] = useState('')
    const [display,setDisplay] = useState(false)
    useEffect(() => {
        axios.get(`https://food-sharing-server-kappa.vercel.app/foods?search=${search}`)
            .then(res => setAvailableFood(res.data))
    }, [search])
    // console.log(availableFood)

    const layout = true

    const handleLayout = () => {
        setDisplay(!display)
    }


    return (
        <div>
            <div className='text-center mt-3 space-y-4'>
                <h1 className='text-5xl md:text-6xl font-semibold'>Available Food Items</h1>
                <p className='text-xl md:text-2xl'>Browse meals currently available for pickup from kind donors around your area.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between md:max-w-8/12 mx-auto mt-4'>
                <fieldset className="fieldset w-full rounded-box flex-1 p-4">
                    <input type="text" name='food' onChange={e => setSearch(e.target.value)} className="input w-full h-[6vh]" placeholder="Food Name " />
                </fieldset>
                <button onClick={handleLayout} className='btn bg-violet-500 px-2 py-7 text-xl text-white'>Change Layout</button>
            </div>

            <div className={`${display ? 'grid-cols-1 md:grid-cols-2 md:w-6/12 w-9/12' : 'grid-cols-2 md:grid-cols-3 md:w-10/12 w-11/12'} grid   mx-auto  gap-4 md:gap-8 mt-10`}>
                {
                    availableFood.map((food) => <AvailableFoodCard key={food._id}
                        meal={food}
                        layout={layout}></AvailableFoodCard>)
                }
            </div>

        </div>
    );
};

export default AvailableFood;