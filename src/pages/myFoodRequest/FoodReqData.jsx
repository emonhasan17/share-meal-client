
import FoodReqCard from './FoodReqCard';

const FoodReqData = ({ foodReq }) => {
    // console.log(foodReq)
    if (foodReq.length === 0) {
        return <h1 className='text-4xl text-center mt-34'>You have not requested any food!!!</h1>
    }
    return (
        <div>
            <div className='text-center space-y-3 mt-7 mb-10 '>
                <h1 className='text-5xl md:text-6xl font-semibold text-[#FCBC58]'>My Requested Meals</h1>
                <p className='text-xl text-[#38B4D0]'>See all the food you’ve requested from kind-hearted donors.</p>
            </div>
            <div className=' md:max-w-8/12 mx-auto'>
                {
                    foodReq.map(req => <FoodReqCard key={req._id} req={req}></FoodReqCard>)
                }
            </div>
        </div>
    );
};

export default FoodReqData;