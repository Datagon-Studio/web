import React from 'react'

const SettingsInstitutionForm = () => {
    return (
        <section>
            <div className="w-fulll px-4 py-5 sm:px-4 lg:px-4 ">
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">


                    <form className='mb-6'>

                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-center">
                            <div className="sm:col-span-3">
                                <div className="">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                                        Institution
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Update your Institution Details here                        </p>
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
                                  Name of Institution
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="nameOfInst" id="nameOfInst"
                                        className="grow py-4 w-full" placeholder="Google" required
                                        aria-describedby="nameOfInst-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="nameOfInst-error">
                                    Please enter a valid phone number .
                                </p>
                            </div>


                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                  Type of Institution
                                </label>
                            </div>

                            <div className="sm:col-span-9">
                                <div className="space-y-2">
                                    <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                        <input type="text" name="typeOfInsti" id="typeOfInsti"
                                            className="grow py-4 w-full" required
                                            aria-describedby="typeOfInsti-error" />
                                    </label>
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="typeOfInsti-error">
                                    Please enter  date of birth .
                                </p>
                            </div>


                           


                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Country
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="country" id="country"
                                        className="grow py-4 w-full" placeholder="Ghana" required
                                        aria-describedby="country-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="country-error">
                                    Please enter your nationality .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Location
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="location" id="location"
                                        className="grow py-4 w-full" placeholder="Accra" required
                                        aria-describedby="location-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="location-error">
                                    Please enter the name of your institution .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                 Number of Academic Staff
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="number" name="numberOfAcademicStaff" id="numberOfAcademicStaff"
                                        className="grow py-4 w-full" placeholder="10" required
                                        aria-describedby="numberOfAcademicStaff-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="numberOfAcademicStaff-error">
                                    Please enter your occupation .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                Number of Non-Academic Staff
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="number" name="numberOfNonAcademicStaff" id="numberOfNonAcademicStaff"
                                        className="grow py-4 w-full" placeholder="30" required
                                        aria-describedby="numberOfNonAcademicStaff-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="numberOfNonAcademicStaff-error">
                                    Please enter your user role .
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                              Year of Establishment
                                </label>
                            </div>


                            <div className="sm:col-span-9">
                                <label className="input input-bordered input-primary w-full bg-transparent border  border-gray-300 dark:border-gray-600  py-4 flex items-center gap-3">
                                    <input type="text" name="yearOfEstablishment" id="yearOfEstablishment"
                                        className="grow py-4 w-full" placeholder="2005" required
                                        aria-describedby="yearOfEstablishment-error" />
                                </label>
                                <p className="hidden text-xs text-red-600 mt-2"
                                    id="yearOfEstablishment-error">
                                    Please enter your user role .
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
                           
                        </div>



                    </form>
                </div>
            </div>
        </section>
    )
}


export default SettingsInstitutionForm;