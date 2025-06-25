import React from 'react';

const FoodReqCard = ({ req }) => {

    const { donor, expire, image, location, reqDate, note, food } = req


    return (
        <div>
            <div className=" mb-18">
                <div className="flex flex-col lg:flex-row-reverse  shadow-lg rounded-2xl">
                    <div className='md:flex-1/3 p-4'>
                        <img
                            src={image}
                            className="md:w-[400px] h-[30vh] md:h-[40vh] mx-auto rounded-2xl  "
                        />
                    </div>
                    <div className='md:flex-2/3 p-5 md:p-12 space-y-3'>
                        <h1 className="text-3xl md:text-4xl font-semibold">{food}</h1>
                        <p className="text-xl md:text-2xl">Donor: {donor}</p>
                        <p className="text-xl md:text-2xl">Request Date: {reqDate}</p>
                        <p className="text-xl md:text-2xl">Expired Date: {expire}</p>
                        <p className="text-xl md:text-2xl">Location: {location}</p>
                        <p className="text-xl md:text-2xl">About Food: {note}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodReqCard;