import { pen, submit } from '@src/core/icons'
import Image from 'next/image'
import React from 'react'

const MealBox = ({ meal, image }) => {
    return (
        <div className="flex flex-row items-center justify-around rounded-md border-[1.5px] border-green-500 py-3">
            <span className="rotate-90 transform uppercase ">{meal}</span>

            <Image
                src={image}
                alt='icon'
                className='w-[4rem] h-[4rem] rounded-md'

            />
            <div className="mx-4 flex items-center space-x-2 rounded-md border-[1.5px] border-green-500 px-4 py-2">
                <div className="flex flex-row items-center gap-2 rounded-full bg-green-500 px-4 py-2">
                    {pen}
                    <span className="text-white">Select Homechef</span>
                </div>
                <div className="flex flex-row items-center gap-2 rounded-full bg-green-500 px-4 py-2">
                    {pen}
                    <span className="text-white">Select Delivery Boy</span>
                </div>
                <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-green-700">
                    {submit}
                </div>
            </div>
        </div>
    )
}
export default MealBox
