import React from 'react'
import { IoMdClose } from "react-icons/io";

export const ForgotPasswordModal = ({ }) => {
    const handleCloseModal = () => {
        alert("yeah")
    }

    return (
        <>
            <dialog id="forgot-password-modal" className="modal">
                <div className="modal-box w-11/12 max-w-3xl  bg-white dark:bg-warning">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="w-full mt-[-20px]" >
                                <IoMdClose />
                            </button>
                        </form>
                    </div>
                    <div className='px-20'>
                        <h3 className="font-bold text-center text-2xl mb-3">Forgot Your Password?</h3>
                        <form>
                            <div className="mt-6">
                                <div className="relative">
                                    <label className="input input-bordered input-primary  bg-transparent border  border-gray-300 dark:border-gray-600  py-7 flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                        <input type="email" name="email" id="email" className="grow py-4" placeholder="Email" required
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
                        </form>
                    </div>

                    <div className="modal-action mx-20 mb-10">
                        <form method="dialog " className='w-full'>
                            <button className="w-full btn btn-primary hover:btn-secondary text-white" onClick={handleCloseModal}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    )
}
