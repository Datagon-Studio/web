"use client"

import React, { useState } from 'react'

export const UserProfileIndex = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabToggle = (tabID: number) => {
        setActiveTab(tabID)
    }

  return (
   <section>
     <div className='m-4 text-2xl text-black dark:text-white'>Account Information </div>
            <div className="flex   mx-4 w-[330px]  items-center rounded-md">
                <div className={activeTab == 1 ? "btn bg-primary w-[150px] text-center btn-sm  hover:bg-secondary border-0 text-white rounded-md" : "btn cursor-pointer w-[150px] btn-sm dark:bg-neutral-700 bg-white border-0 hover:bg-transparent"}
                    onClick={() => handleTabToggle(1)}>User Profile</div>
                <div className={activeTab == 2 ? "btn bg-primary w-[150px] text-center btn-sm  hover:bg-secondary border-0 text-white rounded-md" : "btn cursor-pointer w-[150px] btn-sm dark:bg-neutral-700 bg-white border-0 hover:bg-transparent"}
                    onClick={() => handleTabToggle(2)}>Security</div>
            </div>
            <>
                {activeTab == 1 ? (
                    <div>hello</div>
                ) : (
                    <div>yeah</div>
                )}
            </>
   </section>
  )
}
