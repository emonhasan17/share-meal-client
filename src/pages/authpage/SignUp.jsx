import Lottie from 'lottie-react';
import React, { useState } from 'react';
import signinLottie from '../../assets/lotties/login.json'
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import GoogleUser from '../../components/shared/GoogleUser';
const SignUp = () => {

    const { createUser, updateUser } = useAuth()
    const [error, setError] = useState('')

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, photo, email, password)

        // password validate------------------------
        const passLowerCase = /(?=.*[a-z])/
        const passUpperCase = /(?=.*[A-Z])/
        const passLength = /(?=.*.{6,})/
        setError('')
        if (!passLowerCase.test(password)) return setError('Password must have one small latter')
        if (!passUpperCase.test(password)) return setError('Password must have one capital latter')
        if (!passLength.test(password)) return setError('Password must have six carachter or longer')


        // create user via email--------------------

        createUser(email, password)
            .then(result => {

                // console.log(result.user)
                // update user profile-----------
                const profile = {
                    displayName: name,
                    photoURL: photo
                }

                updateUser(profile)
                    .then(() => {
                        // user updated
                    })
                    .catch(error => {
                        toast.error(error.code)
                    })

                toast.success(`${name} sign up successfully`)

            })
            .catch(error => {
                console.log(error)
                const errorCode = error.error
                const errorMessage = error.message
                toast.error(errorMessage)
                toast.error(errorCode)
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
                            <form onSubmit={handleSignUp}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="User Name" required />
                                    <label className="label">Photo URL</label>
                                    <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" required />

                                    {error && <p className='text-red-400'>{error}</p>}


                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    <p className='text-center text-[16px] mt-4'>Already have an account? <Link className='text-violet-500 ' to='/login'>Login</Link></p>
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

export default SignUp;