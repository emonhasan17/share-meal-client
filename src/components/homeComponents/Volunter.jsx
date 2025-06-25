import React from 'react';

const Volunter = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='space-y-4'>
                <img className='rounded-2xl' src="https://i.ibb.co/jkdxD4LJ/food-delivery-volunter.jpg" alt="" />
                <h1 className='text-3xl text-center'>Deliver Requested Food</h1>
                <p className='text-xl text-center'>As a delivery volunteer, you are the bridge between generosity and need. This section provides all the tools you need to fulfill food requests</p>
            </div>
            <div className='space-y-4'>
                <img className='rounded-2xl' src="https://i.ibb.co/zV8QGbR5/find-poor-people-image.jpg" alt="" />
                <h1 className='text-3xl text-center'>Find & Feed Those in Need</h1>
                <p className='text-xl text-center'>Search for people in your area who are facing hunger. Identify urgent needs, connect with them, and be the reason someone finds hope in their hardest moment.</p>
            </div>
            <div className='space-y-4'>
                <img className='rounded-2xl' src="https://i.ibb.co/JWwhcZT1/searching-for-new-donator.jpg" alt="" />
                <h1 className='text-3xl text-center'>Find Nearby Meal Donors</h1>
                <p className='text-xl text-center'>Search and connect with generous individuals who are ready to share their extra food. Help rescue good meals and deliver them to those who need them most.</p>
            </div>
            
        </div>
    );
};

export default Volunter;