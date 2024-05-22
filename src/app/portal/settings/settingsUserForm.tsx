import React from 'react'

const SettingsUserForm = () => {
    return (
        <section>
            <div className="w-fulll px-4 py-5 sm:px-4 lg:px-4 ">
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">


                    <form className='mb-6'>

                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-center">
                            <div className="sm:col-span-3">
                                <div className="">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                                        User
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Invite users                 
                                     </p>
                                </div>
                            </div>


                            <div className="sm:col-span-9">
                                <div className="mt-5 flex justify-end gap-x-2">
                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                        Cancel
                                    </button>
                                    <button type="button" className="py-2 px-7 inline-flex btn btn-primary items-center gap-x-2 text-sm  text-white">
                                        Invite
                                    </button>
                                </div>
                            </div>





                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    user
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="email" name="email" id="email"
                                        className="grow py-4 w-full" placeholder="sample@email.com" required
                                        aria-describedby="email-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="nameOfInst-error">
                                    Please enter a valid email .
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}


export default SettingsUserForm;