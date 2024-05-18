import React from 'react'

const SettingsProfileForm = () => {
    return (
        <section>
            <div className="w-fulll px-4 py-5 sm:px-4 lg:px-4 ">
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">


                    <form className='mb-6'>

                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-center">
                            <div className="sm:col-span-3">
                                <div className="">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                                        Profile
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Update your Personal Details here                        </p>
                                </div>
                            </div>


                            <div className="sm:col-span-9">
                                <div className="mt-5 flex justify-end gap-x-2">
                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                        Cancel
                                    </button>
                                    <button type="button" className="py-2 px-3 inline-flex btn btn-primary items-center gap-x-2 text-sm  text-white">
                                        Save changes
                                    </button>
                                </div>
                            </div>


                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Full name
                                </label>
                                <div className="hs-tooltip inline-block">
                                    <button type="button" className="hs-tooltip-toggle ms-1">
                                        <svg className="inline-block size-3 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </button>
                                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                        Displayed on public forums, such as Preline
                                    </span>
                                </div>
                            </div>


                            <div className="sm:col-span-9">
                                <div className="sm:flex gap-4 ">
                                    <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                        <input type="text" name="firstName" id="firstName"
                                            className="grow py-4 w-full" placeholder="First Name" required
                                            aria-describedby="firstname-error" />
                                    </label>
                                    <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                        <input type="text" name="lastName" id="lastName"
                                            className="grow py-4 w-full" placeholder="Last Name" required
                                            aria-describedby="firstname-error" />
                                    </label>
                                    {/* <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Maria" />
                                    <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Boone" />
                                 */}
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="firstname-error">
                                    Please enter your first name .
                                </p>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="lastname-error">
                                    Please enter your first name .
                                </p>
                            </div>


                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Phone Number
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="tel" name="phoneNumber" id="phoneNumber"
                                        className="grow py-4 w-full" placeholder="Phone Number" required
                                        aria-describedby="phonenumber-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="phonenumber-error">
                                    Please enter a valid phone number .
                                </p>
                            </div>


                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Date of birth
                                </label>
                            </div>

                            <div className="sm:col-span-9">
                                <div className="space-y-2">
                                    <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                        <input type="date" name="dateOfBirth" id="dateOfBirth"
                                            className="grow py-4 w-full" required
                                            aria-describedby="dob-error" />
                                    </label>
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="dob-error">
                                    Please enter  date of birth .
                                </p>
                            </div>


                            <div className="sm:col-span-3">
                                <div className="inline-block">
                                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Verified Status
                                    </label>
                                </div>
                            </div>


                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <select className="select select-bordered  border-gray-300 dark:border-gray-600 bg-transparent w-full select-primary">
                                        <option disabled selected>Who shot first?</option>
                                        <option>Verified</option>
                                        <option>Unverified</option>
                                    </select>
                                </div>
                            </div>


                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Nationality
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="nationality" id="nationality"
                                        className="grow py-4 w-full" placeholder="Ghanaian" required
                                        aria-describedby="nationality-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="nationality-error">
                                    Please enter your nationality .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Name of Institution
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="nameOfInstitution" id="nameOfInstitution"
                                        className="grow py-4 w-full" placeholder="Google" required
                                        aria-describedby="nameOfInstitution-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="nameOfInstitution-error">
                                    Please enter the name of your institution .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Occupation
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="occupation" id="occupation"
                                        className="grow py-4 w-full" placeholder="Developer" required
                                        aria-describedby="occupation-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="occupation-error">
                                    Please enter your occupation .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    User role
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="userRole" id="userRole"
                                        className="grow py-4 w-full" placeholder="Admin" required
                                        aria-describedby="userRole-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="userRole-error">
                                    Please enter your user role .
                                </p>
                            </div>

                           
                        </div>



                    </form>
                </div>
            </div>
        </section>
    )
}


export default SettingsProfileForm;