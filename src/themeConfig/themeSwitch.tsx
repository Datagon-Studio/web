'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { RxSwitch } from "react-icons/rx";


export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <div className="flex justify-end ">
            <RxSwitch size={20} />
        </div>
    )

    if (resolvedTheme === 'dark') {
        return (
            <div className="flex justify-end m-5 ">
                <button className=" bg-white rounded-full text-black shadow-lg items-center " onClick={() => setTheme('light')}>
                    <FiSun size={20} className="" />
                </button>
            </div>
        )
    }

    if (resolvedTheme === 'light') {
        return (
            <div className="flex justify-end  ">
                <button className=" bg-white rounded-full text-black shadow-lg items-center " onClick={() => setTheme('dark')}>
                    <FiMoon size={20} className="" />
                </button>
            </div>
        )
    }

}
