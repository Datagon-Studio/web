"use client"
import React, { useState } from 'react'


 const ResetPasswordForm = () => {
    

    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
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
        if (formData.newPassword && formData.confirmPassword) {
            window.location.href = '/portal';
        }
    };


    return (
        <div className="mt-7 bg-white  dark:bg-transparent mx-8 md:mx-12 xl:mx-20">
            <div className="p-4 sm:p-7">
                <div className="text-start">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Reset your password</h1>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                        <input type="password" name="newPassword" onChange={handleChange} id="newPassword" className="grow py-4" placeholder="New Password" required
                                            aria-describedby="newPassword-error" />
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
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="newPassword-error">
                                    Please enter new password
                                </p>
                            </div>
                            {/* <!-- End Form Group --> */}

                            {/* <!-- Form Group --> */}
                            <div>
                                <div className="relative">
                                    <label className="input input-bordered input-primary  bg-transparent border  border-gray-300 dark:border-gray-600  py-7 flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                        <input type="password" name="confirmPassword" onChange={handleChange} id="confirmPassword" className="grow py-4" placeholder="Confirm Password" required
                                            aria-describedby="confirmPassword-error" />
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
                                <p className="hidden text-xs text-red-600 mt-2" id="confirmPassword-error">Password mismatch  </p>
                             
                            </div>
                            <button type="submit" className="w-full py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none font-bold"
                           >
                            Reset
                            </button>

                        </div>      
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordForm;