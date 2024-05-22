import React, { useState } from 'react'
import { PiStrategyBold } from "react-icons/pi";
import { TbCirclesRelation } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { GiStairsGoal } from "react-icons/gi";
import { LuActivitySquare } from "react-icons/lu";



const pyramidAccordion = [
    {
        icon: PiStrategyBold,
        color: '#33badb',
        module: "Strategic Enablers",
        info: "Figma ipsum component variant main layer. Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create. Project team line selection image export."
    },
    {
        icon: TbCirclesRelation,
        module: "Operational Relations Enablers",
        color: '#ef299a',
        info: "Figma ipsum component variant main layer. Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create. Project team line selection image export."
    },
    {
        icon: FiExternalLink
        ,
        color: '#f46f1f',
        module: "External Relations Enablers",
        info: "Figma ipsum component variant main layer. Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create. Project team line selection image export."
    },
    {
        icon: GiStairsGoal,
        color: '#ee2f73',
        module: "Aspirations",
        info: "Figma ipsum component variant main layer. Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create. Project team line selection image export."
    },
    {
        icon: LuActivitySquare,
        color: '#924fad',
        module: "Activities",
        info: "Figma ipsum component variant main layer. Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create. Project team line selection image export."
    },
]


export const BeginAssessment = () => {

    const [openIndex, setOpenIndex] = useState(0);
    const [iconSize, setIconSize] = useState(false)
    const handleAccordionClick = (index: any) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <section className="py-7 px-12">
            <div className='text-black text-xl font-bold dark:text-white'>Begin Your Assessment</div>
            <div className='my-6'>
                <p className='pb-4 text-gray-600 dark:text-gray-400'>
                    Figma ipsum component variant main layer.
                    Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create.
                    Project team line selection image export.</p>
                <p className='text-gray-600 dark:text-gray-400'>
                    Figma ipsum component variant main layer.
                    Comment rotate flows figjam pen. Plugin shadow style connection subtract inspect arrow hand. Scrolling image team layer comment plugin create.
                    Project team line selection image export.
                </p>
            </div>
            <div className='text-center font-bold text-xl mt-12 text-black dark:text-white'>
                Begin the self assessment by clicking on any of the five modules
            </div>

            <div className="flex gap-4 items-center justify-center my-12 flex-wrap">
                {pyramidAccordion.map((item, index) => (
                    <div key={index} className="border-4  shadow-2xl rounded-2xl text-white border-blue-100/50 w-[200px] h-[180px] 
                transition-transform transform hover:translate-y-[-10px]"
                        style={{ background: `${item.color}` }}>
                        <div className="flex justify-center my-6 "><item.icon className='text-4xl' /></div>
                        <div className='text-md font-medium text-center dark:text-white'>{item.module}</div>
                    </div>
                ))}
            </div>

            {pyramidAccordion.map((item, index) => (
                <div key={index} >
                    <div className="collapse collapse-arrow border border-gray-300 p-2 shadow-2xl bg-gray-200 my-2 dark:bg-neutral-700">
                        <input type="radio" name="my-accordion" onChange={() => handleAccordionClick(index)} checked={index === openIndex} />
                        <div className="collapse-title flex items-center text-xl font-medium text-black dark:text-white">
                            <p className={` rounded-full p-3 me-4 border-4 text-white border-blue-100/50 shadow-2xl`} style={{ background: `${item.color}` }}>
                                <item.icon />
                            </p>
                            <p>
                                {item.module}
                            </p>
                        </div>
                        <div className="collapse-content text-gray-700 dark:text-gray-300">
                            <p>{item.info}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div>

            </div>
        </section>
    )
}
