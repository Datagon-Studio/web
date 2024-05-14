"use client"
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { FolderIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { TbLayoutDashboard } from "react-icons/tb";
import { RiSurveyLine } from "react-icons/ri";
import { RiSettings5Line } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { PiSignOut } from "react-icons/pi";
import ThemeSwitch from '@/themeConfig/themeSwitch'
import { RiCloseLargeLine } from "react-icons/ri";
import  {useSelectedLayoutSegment} from "next/navigation";
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    children: React.ReactNode,
    image: string
}



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar(props: Props) {
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
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center my-4 flex justify-center">
                                            <Image
                                                className="h-16 w-auto filter invert blend-screen"
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
                                                                            ? 'bg-white text-primary'
                                                                            : 'text-white hover:text-white hover:bg-secondary',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-primary' : 'text-white group-hover:text-white',
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
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto  bg-primary px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center my-4 flex justify-center ">
                            <Image
                                className="h-16 w-auto filter invert blend-screen"
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
                                                            ? 'bg-white text-primary'
                                                            : 'text-white hover:text-white hover:bg-secondary',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-primary' : 'text-white group-hover:text-white',
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
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 mx-4 py-3   ">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4   bg-gray-100 dark:bg-warning rounded-2xl px-4 shadow-sm sm:gap-x-6 mb-2 sm:px-4 lg:px-4">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <RiMenu4Line className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Separator */}
                        {/* <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" /> */}

                        <div className="flex flex-1 justify-between items-center gap-x-4 self-stretch lg:gap-x-6 ">

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
                            </div>

                            <div className="flex items-center gap-x-4 lg:gap-x-6">

                                {/* Separator */}
                                {/* <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" /> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative bg-white dark:bg-neutral-700 border border-gray-200  dark:border-gray-600 rounded-2xl p-1 ">
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <Image
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src="/user.png"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white" aria-hidden="true">
                                                Tom Cook
                                            </span>
                                            <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 px-4 gap-y-4 origin-top-right rounded-md bg-white dark:bg-neutral-700 dark:text-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            <Menu.Item>
                                                <div className='text-sm my-3 text-black dark:text-gray-300 flex justify-between'>
                                                    <div>Dark</div>
                                                    <ThemeSwitch />
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href="#" className="mb-2 text-sm text-black dark:text-gray-300">
                                                    <div className="my-2 flex justify-between ">
                                                        <> User Profile </>
                                                        <LuUser size={20} className="text-black dark:text-gray-300" />
                                                    </div>
                                                </Link>
                                            </Menu.Item>

                                            <Menu.Item>
                                                <Link href="#" className="mb-2 text-sm text-black dark:text-gray-300">
                                                    <div className="my-2 flex justify-between">
                                                        <> Sign out </>
                                                        <PiSignOut size={20} className="text-black dark:text-gray-300" />
                                                    </div>
                                                </Link>
                                            </Menu.Item>
                                        </Menu.Items>

                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-6 bg-gray-100 rounded-2xl dark:bg-warning h-screen w-full">
                        <div className="px-4 sm:px-4 lg:px-4">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}
