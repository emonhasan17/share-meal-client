import './Slider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router';
// import vibecreative from '../../assets/thumbnail for Vibe Creative Suite a online school (1).jpg'
// import gamebox from '../../assets/gamebox unlimited.jpg'
// import edu from '../../assets/EduSphere Plusr.jpg'

export default function Slider() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className='h-full relative bg-cover bg-center bg-[url("https://i.ibb.co/dw5gvDrk/begging-bridge-with-person-who-handed-bread.jpg")] '>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                        <div className=' relative z-10 w-9/12 mx-auto h-full pt-6 md:pt-28 md:space-y-6'>
                            <h1 className=' text-gray-200 md:text-5xl text-2xl '>Support Humanity — Share Your Extra Food</h1>
                            <p className='md:text-2xl text-[16px] text-gray-400'>Every day, good food goes to waste while millions go to bed hungry. Together, we can change that. By sharing your extra meals, you’re not just feeding someone — you’re restoring dignity, hope, and compassion in your community. Join the movement and help build a world where no one is left behind.</p>
                            <Link to='/addFood'> 
                                <button className='bg-green-600 md:text-xl px-4 py-3 cursor-pointer rounded-xl text-white mt-3 md:mt-6'>Donate Your Extra Food</button>
                            </Link>

                        </div>
                    </div>
                    {/* <div><img src={butterChicken} alt="" /></div> */}
                </div>
                </SwiperSlide>


                <SwiperSlide><div className='h-full relative bg-cover bg-center bg-[url("https://i.ibb.co/TDngh7Ww/give-starbing-people-food-image.jpg")] '>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40">
                        <div className=' relative z-10 w-9/12 mx-auto h-full pt-6 md:pt-28 space-y-3  md:space-y-6'>
                            <h1 className=' text-gray-200 md:text-5xl text-2xl '>Searching for Food? You’re Not Alone</h1>
                            <p className='md:text-2xl text-[16px] text-gray-400'>Browse available meals near you. Whether you're struggling or just need a helping hand — food is waiting, with love.Our community shares extra food so no one has to go hungry. Request now and eat with dignity.</p>
                            <Link to='/availableFood'> 
                                <button className='bg-green-600 md:text-xl px-4 py-3 cursor-pointer rounded-xl text-white mt-3 md:mt-6'>Available Food</button>
                            </Link>

                        </div>
                    </div>
                    {/* <div><img src={butterChicken} alt="" /></div> */}
                </div>
                </SwiperSlide>


                <SwiperSlide><div className='h-full relative bg-cover bg-center bg-[url("https://i.ibb.co/jkdxD4LJ/food-delivery-volunter.jpg")] '>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40">
                        <div className=' relative z-10 w-9/12 mx-auto h-full pt-6 md:pt-28 space-y-3 md:space-y-6'>
                            <h1 className=' text-gray-200 md:text-5xl  '>Help Us Feed the Hungry</h1>
                            <p className='md:text-2xl text-[16px] text-gray-400'>Become a volunteer and help deliver meals to those who need it most. Your time and kindness can turn someone’s hunger into hope. Together, we can make sure no one is left behind.A few hours of your time can change someone’s entire day.</p>
                            <Link > 
                                <button className='bg-green-600 md:text-xl px-4 py-3 cursor-pointer rounded-xl text-white mt-3 md:mt-6'>Join Our Team</button>
                            </Link>

                        </div>
                    </div>
                    {/* <div><img src={butterChicken} alt="" /></div> */}
                </div>
                </SwiperSlide>

                

            </Swiper>
        </>
    );
}