import Lottie from 'lottie-react';
import React from 'react';
import signinLottie from '../../assets/lotties/login.json'
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import GoogleUser from '../../components/shared/GoogleUser';

const Login = () => {

    const { loginUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        // login user via email-----------
        loginUser(email, password)
            .then(result => {
                // console.log(result.user)
                toast.success('successfully logged in')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log(error)
                toast.error('invalid email or password')
            })


    }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie style={{ width: '400px' }} animationData={signinLottie} loop={true}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" required />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    <p className='text-center text-[16px] mt-4'>Don't have any account? <Link className='text-violet-500 ' to='/signUp'>Sign Up</Link></p>
                                </fieldset>
                            </form>
                            <div>
                                <GoogleUser></GoogleUser>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;