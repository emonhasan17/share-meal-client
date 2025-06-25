import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import titleLottie from '../../assets/lotties/title.json'
import Lottie from 'lottie-react';

const Navbar = () => {

    const { user, signOutUser } = useAuth()



    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'underline underline-offset-8 text-green-500' : ''}>Home</NavLink></li>
        <li><NavLink to='/availableFood' className={({ isActive }) => isActive ? 'underline underline-offset-8' : ''}>Available Foods</NavLink></li>
        <li><NavLink to='/addFood' className={({ isActive }) => isActive ? 'underline underline-offset-8' : ''}>Add Food</NavLink></li>
        <li><NavLink to='/manageMyFood' className={({ isActive }) => isActive ? 'underline underline-offset-8' : ''}>Manage My Foods</NavLink></li>
        <li><NavLink to='/myFoodRequest' className={({ isActive }) => isActive ? 'underline underline-offset-8' : ''}>My Food Request</NavLink></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                // console.log('sign out user')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="navbar bg-base-100 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {links}


                        </ul>
                    </div>
                    <a className=" md:text-2xl flex">
                    <Lottie className='w-10 md:w-[70px]'  animationData={titleLottie} loop={true}></Lottie>
                        <p className='lg:font-semibold lg:text-4xl'>Share <br /><span className='text-green-600'>MEAL</span></p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">


                        {links}


                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex gap-4'>
                            <img className='w-10 md:w-12 rounded-full' src={user.photoURL} alt="" />
                            <button onClick={handleSignOut} className='btn'>Sign Out</button>
                        </div> :
                            <div className='flex gap-4'>
                                <Link to='/login' className='btn'>Login</Link>
                                <Link to='/signUp' className='btn'>Sign Up</Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;