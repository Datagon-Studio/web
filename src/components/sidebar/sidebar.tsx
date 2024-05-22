"use client"
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FolderIcon } from '@heroicons/react/24/outline'
import { TbLayoutDashboard } from "react-icons/tb";
import { RiSurveyLine } from "react-icons/ri";
import { RiSettings5Line } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { PiSignOut } from "react-icons/pi";
import ThemeSwitch from '@/themeConfig/themeSwitch'
import { RiCloseLargeLine } from "react-icons/ri";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import useWindowDimensions from '@/utils/windowSize'


type Props = {
    children: React.ReactNode,
    image: string
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar(props: Props) {

    const { height } = useWindowDimensions();
    const [newheight, setNewHeight] = useState(0)

    useEffect(() => {
        if (height) {
            setNewHeight(height - 20)
        }
    }, [newheight])

    console.log("height of window", height)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const segment = useSelectedLayoutSegment();

    const navigation = [
        { name: 'Dashboard', href: '/portal', icon: TbLayoutDashboard, current: !segment ? true : false },
        { name: 'Assessment', href: '/portal/assessment', icon: RiSurveyLine, current: `/${segment}` === '/assessment' ? true : false },
        { name: 'Recommendation', href: '/portal/recommendation', icon: FolderIcon, current: `/${segment}` === '/recommendation' ? true : false },
        { name: 'Settings', href: '/portal/settings', icon: RiSettings5Line, current: `/${segment}` === '/settings' ? true : false },
    ]

    return (
        <section className='bg-white dark:bg-neutral-900'>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <RiCloseLargeLine className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto dark:bg-warning bg-gray-100  px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center my-4 flex justify-center">
                                            <Image
                                                className="h-16 w-auto "
                                                src={props.image}
                                                alt="logo"
                                                width={300}
                                                height={300}
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-primary text-white'
                                                                            : 'text-neutral-700 hover:text-white hover:bg-secondary',
                                                                        'group flex gap-x-3  dark:text-white rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-white' : 'text-neutral-700 dark:text-white group-hover:text-white',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className='absolute bottom-5 left-0 '>
                                                    <div className="dropdown dropdown-top w-full ">

                                                        <div tabIndex={0} role="button" className="btn m-1 btn-md mx-3 w-64 hover:bg-info bg-gray-300 dark:bg-neutral-600 border-0 text-white">
                                                            <div className="flex items-center justify-between gap-16 ">
                                                                <div className='flex items-center '>
                                                                    <Image
                                                                        className="h-8 w-8 rounded-md me-4 bg-gray-50"
                                                                        src="/user.png"
                                                                        alt=""
                                                                        width={30}
                                                                        height={30}
                                                                    />
                                                                    <div>Nana Boafo</div>
                                                                </div>

                                                                <div><MdOutlineKeyboardArrowUp /></div>
                                                            </div>
                                                        </div>
                                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:text-white dark:bg-neutral-600 rounded-box w-64 mx-3">
                                                            <li>
                                                                <div className='text-sm text-black dark:text-white   flex justify-between items-center'>
                                                                    <div className=''>Dark</div>
                                                                    <ThemeSwitch />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className=" flex justify-between text-black  dark:text-white items-center">
                                                                    <div className='py-2'> User Profile </div>
                                                                    <div className=''> <LuUser size={20} className="text-black dark:text-gray-300" /></div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className=" flex justify-between dark:text-white text-black items-center">
                                                                    <div className='py-2'> Sign out </div>
                                                                    <PiSignOut size={20} className="text-black dark:text-gray-300" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto  dark:bg-warning bg-gray-100  px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center my-4 flex justify-center ">
                            <Image
                                className="h-16 w-auto "
                                src={props.image}
                                alt="logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-primary text-white'
                                                            : 'text-neutral-700 hover:text-white hover:bg-secondary',
                                                        'group flex gap-x-3 dark:text-white rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-neutral-700 dark:text-white group-hover:text-white',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className='absolute bottom-5 left-0 '>
                                    <div className="dropdown dropdown-top w-full ">

                                        <div tabIndex={0} role="button" className="btn m-1 btn-md mx-3 w-64 hover:bg-info bg-gray-300 dark:bg-neutral-600 border-0 text-white">
                                            <div className="flex items-center justify-between gap-16 ">
                                                <div className='flex items-center '>
                                                    <Image
                                                        className="h-8 w-8 rounded-md me-4 bg-gray-50 border-2 border-white"
                                                        src="/user.png"
                                                        alt=""
                                                        width={30}
                                                        height={30}
                                                    />
                                                    <div>Nana Boafo</div>
                                                </div>

                                                <div><MdOutlineKeyboardArrowUp /></div>
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:text-white dark:bg-neutral-600 rounded-box w-64 mx-3">
                                            <li>
                                                <div className='text-sm text-black dark:text-white flex justify-between items-center'>
                                                    <div className=''>Dark</div>
                                                    <ThemeSwitch />
                                                </div>
                                            </li>
                                            <li>
                                                <div className=" flex justify-between text-black  dark:text-white items-center">
                                                    <div className='py-2'> <a href="/portal/userProfile">User Profile</a> </div>
                                                    <div className=''> <LuUser size={20} className="text-black dark:text-gray-300" /></div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className=" flex justify-between dark:text-white text-black items-center">
                                                    <div className='py-2'> Sign out </div>
                                                    <PiSignOut size={20} className="text-black dark:text-gray-300" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 mx-4 py-3   ">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 block   bg-gray-100 lg:hidden dark:bg-warning rounded-2xl px-4 shadow-sm sm:gap-x-6 mb-2 sm:px-4 lg:px-4">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <RiMenu4Line className="h-6 w-6" aria-hidden="true" />
                        </button>


                        <div className="flex flex-1 justify-between items-center gap-x-4 self-stretch lg:gap-x-6 ">
                            {/* 
                            <div className="hidden sm:block">
                                <label className="sr-only">Search</label>
                                <div className="relative min-w-72 md:min-w-80">
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                        <button>
                                            <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        </button>
                                    </div>
                                    <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-2xl bg-white text-sm input input-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-600 dark:text-gray-200 dark:placeholder-neutral-500 " placeholder="Search" />
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <main className="py-6  bg-gray-100 rounded-2xl dark:bg-warning w-full h-[auto]" style={{ minHeight: `${newheight}px` }} >
                        <div className="px-4 sm:px-4 lg:px-4">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}
