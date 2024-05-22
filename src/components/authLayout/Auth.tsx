import ThemeSwitch from '@/themeConfig/themeSwitch';
import Image from 'next/image'
import React, { ReactNode } from 'react';

interface AuthProps {
    image: string;
    children: ReactNode;
}

export const Auth = ({ image, children }: AuthProps) => {
    return (
        <section>
            <div className="grid  grid-cols-1 md:grid-cols-2 h-screen">
                <div className="bg-black relative hidden md:block">
                    {/* First image */}
                    <div className="absolute inset-0">
                        <Image src={image} alt="auth-image" layout="fill" objectFit="cover" />
                    </div>
                    {/* Second image */}
                    <div className="absolute inset-0 p-5">
                        <Image src="/logo.png" alt="logo" width={70} height={70} />
                    </div>
                </div>
                <div className="bg-white dark:bg-warning ">
                    <div className='p-5 '>
                        <ThemeSwitch />
                    </div>
                    <div className='flex flex-col justify-center min-h-[700px] h-[auto]'>
                    {children}
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
