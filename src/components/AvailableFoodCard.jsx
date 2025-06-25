import React from 'react';
import { Link } from 'react-router';

const AvailableFoodCard = ({ meal, layout }) => {
    const { _id, food, image, location, note, quantity, status } = meal

    if (layout) {

        if (status !== 'available') {
            return console.log('data nai')
        }

    }



    return (
        <div>
            <div className="card bg-base-200 shadow-xl">
                <div className="md:card-body  md:flex px-3">
                    <h2 className="text-center md:text-3xl h-[5vh] md:h-[8vh] font-bold  md:pb-4 border-b-1 border-gray-400">{food}</h2>
                    <div className='h-[18vh] mt-1 md:space-y-3 flex flex-col'>
                        <p className='md:text-[18px] md:py-1 flex-1'><span className='md:text-[18px] font-semibold'>Quantity : </span> {quantity}</p>
                        <p className='md:text-[18px] md:py-1 flex-1'><span className='md:text-[18px] font-semibold'>Location : </span> {location}</p>
                        <p className='md:text-[18px] md:py-1 flex-1'><span className='md:text-[18px] font-semibold'>About Food : </span> {note}</p>
                        <p className='md:text-[18px] md:py-1 flex-1'><span className='md:text-[18px] font-semibold'>Status : </span> {status}</p>
                    </div>
                    {/* <div>
                        <p className=' py-1 flex-1 h-[10vh]'>
                            <span className='md:text-xl'>Categories</span> :
                            {
                                categories.map(cat => <li>{cat}</li>)
                            }
                        </p>
                    </div> */}
                    <Link to={`/singleFood/${_id}`} className='flex justify-end text-right text-[16px] md:text-2xl md:mt-8 text-green-600'>See Details</Link>

                </div>
                <figure>
                    <img className='w-full md:h-[20vh]'
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
        </div>
    );
};

export default AvailableFoodCard;