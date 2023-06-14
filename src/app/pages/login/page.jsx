'use client'
import { AuthContext } from '@/app/share/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const LogIn = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    const router = useRouter()

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [fireBaseError, setFireBaseError] = useState('')
    const [state, setState] = useState("login");


    const [show, setShow] = useState({
        // as password one and password to toggle to password show hidden seperately
        p1: false,
        p2: false
    });


    


    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        googleLogin(provider)
            .then(res => {
                const user = res.user
                router.push('/')
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleLogin = (data) => {
        const { email, password } = (data);
        loginUser(email, password)
            .then(result => {
                const user = result.user
                router.push('/')
                setFireBaseError("");
                reset();
            })
            .catch(error => {
                setFireBaseError(error.message)
            })
        console.log(email, password);
    };



    return (
        <section className="-mt-32 ">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <div className="w-full max-w-md">

                    <div className="flex items-center justify-center mt-6 duration-300">


                        <button className={`w-1/3 pb-4 duration-200 ease-linear  transition-all font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 `}>
                            sign in
                        </button>
                    </div>


                    <form className="w-full px-6  md:px-8 max-w-md" onSubmit={handleSubmit(handleLogin)}>
                        <div onClick={handleGoogle} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg ">
                            <div className="px-4 py-2">
                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>

                            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  lg:w-1/4"></span>

                            <a href="#" className="text-xs text-center text-gray-500 uppercase  hover:underline">or login
                                with email</a>

                            <span className="w-1/5 border-b  lg:w-1/4"></span>
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`} placeholder="Email address" name="email" required
                                {...register("email", { required: "email is required" })}

                            />
                        </div>
                        {errors.email && <p className="text-error font-medium">⚠ Please provide valid email address</p>}


                        {errors.email && <p className="text-error font-semibold">⚠ Please check the Email</p>}

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type={show.p1 ? "text" : "password"} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" name="password"
                                {...register("password", {
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    },
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                })}
                            />
                            {show.p1 ? <AiFillEye className="absolute right-2 text-gray-600" onClick={() => {
                                setShow({ ...show, p1: !show.p1 })
                                console.log(show)
                            }
                            } />

                                : <AiFillEyeInvisible className="absolute right-2 text-gray-600" onClick={() => {
                                    setShow({ ...show, p1: !show.p1 })
                                    console.log(show)
                                }} />}
                        </div>




                        {
                            fireBaseError && <>


                                <p className="text-error font-semibold text-red-600 mt-2">⚠ {fireBaseError}</p>

                            </>
                        }
                        <div className="mt-6">
                            <div className="inline-block text-center  w-full rounded border border-current px-8 py-3 uppercase font-serif text-xl text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
                                sign in
                            </div>
                        </div>
                        <div className="mt-6 text-center ">
                            <Link href="/pages/register" className="text-lg font-serif text-blue-500 hover:underline">
                                create a new account
                            </Link>
                        </div>

                    </form>



                </div>
            </div>
        </section>
    );
};

export default LogIn;