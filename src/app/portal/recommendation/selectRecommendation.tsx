"use client"
import React, { useState } from 'react'
import { RecommendationDummyData } from './recommendationDummyData';


type IDType = number;

const SelectRecommendation = () => {

    const [selectedIds, setSelectedIds] = useState<IDType[]>([]);

    const handleSelectRecommendation = (id: any) => {
        setSelectedIds(prevSelectedIds =>
            prevSelectedIds.includes(id)
                ? prevSelectedIds.filter(itemId => itemId !== id)
                : [...prevSelectedIds, id]
        );
    };

    return (
        <section className='p-4'>
            <div className='text-2xl dark:text-white text-black my-3'>Recommendation</div>
            <div className='pb-3'>In your opinion, what are the key enablers that contribute to [specific objective or outcome]?</div>
            <div>
                {
                    RecommendationDummyData.map(({ id, category }: any) => (
                        <>
                            <button key={id} className="btn border-0 justify-start w-[auto] hover:bg-primary hover:text-white  dark:text-white bg-gray-200 dark:bg-neutral-700 me-4 my-2 text-black"
                                onClick={() => handleSelectRecommendation(id)}>
                                <div className='flex justify-start items-center'>
                                    <div className=" flex justify-start">
                                        <label className="flex">
                                            <input type="checkbox" key={id} checked={selectedIds.includes(id)} onChange={(e) => handleSelectRecommendation(e.target.checked ? id : null)} className="checkbox checkbox-primary checkbox-sm me-2 border-info [--chkfg:white] text-white" />
                                            <span className="sr-only">Checkbox</span>
                                        </label>
                                    </div>
                                    <div>{category}</div>
                                </div>
                            </button>
                        </>
                    ))
                }
            </div>


            <div className="border-2 border-dashed mt-5 dark:border-gray-300 border-gray-400 rounded-2xl mx-2 dark:border-gray-800 h-[60vh] w-full flex justify-center items-center top-50 left-50 overflow-y-auto">
                <div className='inline text-center'>
                    <div>No result generated</div>
                </div>
            </div>

            <div className='flex justify-end  mt-6'>
                <button className='btn btn-primary text-white w-[200px] '>Generate Report</button>
            </div>
        </section>
    )
}

export default SelectRecommendation;