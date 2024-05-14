"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { ForgotPasswordModal } from '../../../components/modals/forgotPasswordModal';


export const SignInForm = () => {
    
    useEffect(() => {
        const modalButton = document.getElementById('my_modal_button');
        const modal = document.getElementById('forgot-password-modal') as HTMLDialogElement | null;
        if (modalButton && modal) {
            modalButton.addEventListener('click', () => {
                modal.showModal();
            });
        }
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClick = (e:any) => {
        e.preventDefault(); 
        if (formData.email && formData.password) {
            window.location.href = '/portal';
        }
    };


    return (
        <div className="mt-7 bg-white  dark:bg-transparent mx-8 md:mx-12 xl:mx-20">
            <div className="p-4 sm:p-7">
                <div className="text-start">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Welcome Back</h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
                        Fill in your credentials to get started
                    </p>
                </div>

                <div className="mt-5 ">

                    {/* <!-- Form --> */}
                    <form onSubmit={handleClick}>
                        <div className="grid gap-y-4">
                            {/* <!-- Form Group --> */}
                            <div className="my-3">
                                <div className="relative">
                                    <label className="input input-bordered input-primary  bg-transparent border  border-gray-300 dark:border-gray-600  py-7 flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                        <input type="email" name="email" onChange={handleChange} id="email" className="grow py-4" placeholder="Email" required
                                            aria-describedby="email-error" />
                                    </label>
                                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                        <svg
                                            className="size-5 text-red-500"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="email-error">
                                    Please include a valid email address so we can get back to you
                                </p>
                            </div>
                            {/* <!-- End Form Group --> */}

                            {/* <!-- Form Group --> */}
                            <div>
                                <div className="relative">
                                    <label className="input input-bordered input-primary  bg-transparent border  border-gray-300 dark:border-gray-600  py-7 flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                        <input type="password" name="password" onChange={handleChange} id="password" className="grow py-4" placeholder="Password" required
                                            aria-describedby="password-error" />
                                    </label>
                                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                        <svg className="size-5 text-red-500"
                                            width="16" height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                <div className="text-sm py-3 text-primary  font-medium flex justify-end" >
                                    <button id="my_modal_button" >Forgot password?</button>
                                </div>
                            </div>
                            <button type="submit" className="w-full py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none font-bold"
                           >
                            Sign in
                            </button>

                        </div>
                        {/* google btn for sign-in */}

                        <div className="py-4 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

                        <button type="button" className="w-full py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                            </svg>
                            Sign in with Google
                        </button>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400 flex justify-center py-3">
                            Don’t have an account?
                            <Link href="/auth/signup" className="text-primary mx-2  decoration-2 hover:underline font-medium dark:text-primary" >
                                Create an Account
                            </Link>
                        </p>
                    </form>
                    {/* <!-- End Form --> */}
                    <ForgotPasswordModal />
                </div>
            </div>
        </div>
    )
}
