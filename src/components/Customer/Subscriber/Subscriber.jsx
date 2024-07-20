'use client'

import { ApiRoutes } from '@src/core'
import { Search } from '@src/core/icons'
import classNames from 'classnames'
import { Fragment, useState } from 'react'

import MealBox from './MealBox'
import Userbox from './Userbox'

const Subscriber = () => {
  const [activeButton, setActiveButton] = useState('schedule')
  const [selectedSubscriber, setSelectedSubscriber] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleUserboxClick = (subscriber) => {
    setSelectedSubscriber(subscriber)
  }

  const buttonClass = (buttonType) => classNames(
    'flex-1 rounded-md py-2 border border-[#D7D7D7]',
    {
      'bg-primary-500 text-white border border-black': activeButton === buttonType,
      'bg-grey text-black': activeButton !== buttonType,
      'opacity-50 cursor-not-allowed': isLoading
    }
  )

  const handleButtonClick = (buttonType) => {
    setIsLoading(true)
    setActiveButton(buttonType)
    //API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Fragment>
      <div className='py-3 px-4 space-y-8'>
        <h1 className='text-5xl uppercase tracking-wider'>Subscribers</h1>

        <div className='flex items-center border border-black rounded-md w-1/3 px-4'>
          <Search className="h-4 w-4" />
          <input type="text" className='border-none focus:border-none focus:ring-0' placeholder='Search Subscriber' />
        </div>
      </div>

      <div className='flex h-96 px-4 mt-4 space-x-6'>
        {/* Left section */}
        <div className='w-1/3 overflow-scroll no-scrollbar'>
          <Userbox onClick={handleUserboxClick} selectedId={selectedSubscriber?.id} />
        </div>

        <div className='w-0 h-96 border border-black'></div>

        {/* Right Section */}
        {selectedSubscriber && (
          <div className="w-3/5 space-y-6 text-sm overflow-scroll no-scrollbar">
            <div className="rounded-md bg-grey px-4 py-2 font-light">

              <div className="flex flex-row justify-between items-center">
                <span className="font-semibold text-base">{selectedSubscriber.name}</span>
                <span className={classNames(
                  'text-xs font-normal',
                  {
                    'text-primary-500': selectedSubscriber.isSubscribed === 'Active',
                    'text-red-500': selectedSubscriber.isSubscribed !== 'Active'
                  }
                )}>
                  {selectedSubscriber.isSubscribed}
                </span>
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
                className={buttonClass('schedule')}
                onClick={() => handleButtonClick('schedule')}
                disabled={isLoading}
              >
                {isLoading && activeButton === 'schedule' ? 'Loading...' : 'Order Schedule'}
              </button>
              <button
                className={buttonClass('history')}
                onClick={() => handleButtonClick('history')}
                disabled={isLoading}
              >
                {isLoading && activeButton === 'history' ? 'Loading...' : 'Order History'}
              </button>
            </div>

            {isLoading ? (
              <div className="text-center">Loading...</div>
            ) : activeButton === 'schedule' ? (
              <div className='lg:space-y-6 py-2 xl:space-y-8'>
                {ApiRoutes.meals.map((meal, index) => (
                  <MealBox key={index} meal={meal.name} image={meal.image} />
                ))}
              </div>
            ) : (
              <div className="text-center">No history available.</div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Subscriber
