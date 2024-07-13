'use client'
import SubscribersData from '@src/components/data/SubscribersData.json'
import { pen, search, submit } from '@src/core/icons.js'
import Breakfast from 'public/breakfast.jpg'
import Dinner from 'public/dinner.jpg'
import Lunch from 'public/lunch.jpg'
import React, { useState } from 'react'

import MealBox from './MealBox'
import Userbox from './Userbox'

const Subscriber = () => {
  const [activeButton, setActiveButton] = useState('schedule')
  const [selectedSubscriber, setSelectedSubscriber] = useState(null)

  const handleUserboxClick = (subscriber) => {
    setSelectedSubscriber(subscriber)
  }

  return (
    <>

      <div className="flex flex-col text-sm min-w-[80vw] min-h-full px-4 py-3">
        <div className=''>
          <h1 className="text-5xl font-normal uppercase tracking-wider">Subscribers</h1>
        </div>

        <div className="w-[23vw]">
          <div className="mt-8 flex flex-row items-center rounded-md border-[1.5px] border-black px-4">
            {search}
            <input
              className="border-none text-sm font-light outline-none focus:outline-none focus:ring-0"
              type="text"
              placeholder="Search Subscriber"
            />
          </div>

          <div className='w-[78vw] h-full flex flex-row my-4 gap-6 py-4'>
            {/* Left Section */}
            <div className="h-[70vh] no-scrollbar flex flex-col overflow-hidden overflow-scroll w-[23vw]  ">
              <Userbox onClick={handleUserboxClick} selectedId={selectedSubscriber?.id} />
            </div>


            <div className='w-0 border-[1.5px] border-black h-[65vh] mt-2'></div>


            {/* Right Section */}
            {selectedSubscriber && (
              <div className="w-[51vw] h-[70vh] space-y-6 text-sm overflow-hidden overflow-scroll no-scrollbar">
                <div className="rounded-md bg-grey px-4 py-2 font-light">
                  <div className="flex flex-row justify-between">
                    <span className="font-semibold text-base">{selectedSubscriber.name}</span>
                    <span className={`font-normal text-[10px] ${selectedSubscriber.isSubscribed === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{selectedSubscriber.isSubscribed}</span>
                  </div>
                  <div className="space-x-1">
                    <span>{selectedSubscriber.subscription_details.subscription_type}</span>
                    <span>|</span>
                    <span>BF . L . D</span>
                  </div>
                  <div className="space-x-1">
                    <span>{selectedSubscriber.id}</span>
                    <span>|</span>
                    <span>Total: {selectedSubscriber.total_order}</span>
                    <span>|</span>
                    <span>Cooking</span>
                  </div>
                </div>

                <div className="flex w-full rounded-md">
                  <button
                    className={`flex-1 rounded-md py-2 ${activeButton === 'schedule' ? 'bg-green-500 text-white border-[1px] border-black' : 'bg-grey text-black'}`}
                    onClick={() => setActiveButton('schedule')}
                  >
                    Order Schedule
                  </button>
                  <button
                    className={`flex-1 rounded-md py-2 ${activeButton === 'history' ? 'bg-green-500 text-white border-[1px] border-black' : 'bg-grey text-black'}`}
                    onClick={() => setActiveButton('history')}
                  >
                    Order History
                  </button>
                </div>

                {activeButton === 'schedule' ? (
                  <div className='space-y-10'>
                    <MealBox meal="B-fast" image={Breakfast} />
                    <MealBox meal="Lunch" image={Lunch} />
                    <MealBox meal="Dinner" image={Dinner} />
                  </div>
                ) : (
                  <div className="text-center">No history available.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscriber



