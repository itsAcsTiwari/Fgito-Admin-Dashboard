'use client'

import OrderHistory from '@src/components/common/OrderHistory'
import { Search } from '@src/core/icons.js'
import classNames from 'classnames'
import { Fragment, useState } from 'react'

import ChefBox from './ChefBox'
import CurrentOrder from './CurrentOrder'
import MenuBox from './MenuBox'

const HomeChef = () => {
    const [activeButton, setActiveButton] = useState('menu')
    const [selectedSubscriber, setSelectedSubscriber] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleUserboxClick = (subscriber) => {
        setSelectedSubscriber(subscriber)
    }

    const buttonClass = (buttonType) => classNames(
        'flex-1 rounded-md py-2 border border-grey-300',
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
        }, 1000)
    }

    return (
        <Fragment>
            <div className='py-3 px-4 space-y-8'>
                <h1 className='text-5xl uppercase tracking-wider'>Homechefs</h1>

                <div className='flex items-center border border-black rounded-md w-full md:w-1/2 lg:w-1/3 px-4'>
                    <Search />
                    <input type="text" className='border-none focus:border-none focus:ring-0 w-full' placeholder='Search Homechef' />
                </div>
            </div>

            <div className='flex h-[calc(100vh-200px)] px-4 mt-4 mb-8 space-x-6'>
                {/* Left section */}
                <div className='w-1/3 overflow-auto scrollbar-hide'>
                    <ChefBox onClick={handleUserboxClick} selectedId={selectedSubscriber?.id} />
                </div>

                <div className='w-0 h-full border border-black'></div>

                {/* Right Section */}
                {selectedSubscriber && (
                    <div className="w-3/5 space-y-6 text-sm overflow-auto scrollbar-hide">
                        <div className="rounded-md bg-grey px-4 py-2 font-light">
                            <div className="flex flex-row justify-between items-center">
                                <span className="font-semibold text-base">{selectedSubscriber.name}</span>
                                <span className={classNames(
                                    'text-xs font-normal',
                                    {
                                        'text-primary-500': selectedSubscriber.status === 'Live | Open' || selectedSubscriber.status === 'Open',
                                        'text-red-500': selectedSubscriber.status !== 'Live | Open' && selectedSubscriber.status !== 'Open'
                                    }
                                )}>{selectedSubscriber.status}</span>
                            </div>

                            <div className="space-x-1">
                                <span>{selectedSubscriber.weekDays}</span>
                                <span>|</span>
                                <span>BF . L . D</span>
                            </div>
                            <div className="space-x-1">
                                <span>{selectedSubscriber.id}</span>
                                <span>|</span>
                                <span>Total: {selectedSubscriber.total_order}</span>
                            </div>
                        </div>

                        <div className="flex w-full rounded-md">
                            <button
                                className={buttonClass('menu')}
                                onClick={() => handleButtonClick('menu')}
                                disabled={isLoading}
                            >
                                {isLoading && activeButton === 'menu' ? 'Loading...' : 'Menu Upload'}
                            </button>
                            <button
                                className={buttonClass('order')}
                                onClick={() => handleButtonClick('order')}
                                disabled={isLoading}
                            >
                                {isLoading && activeButton === 'order' ? 'Loading...' : 'Current Order'}
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
                        ) : activeButton === 'menu' ? (
                            <div className='space-y-6'>
                                <MenuBox key={selectedSubscriber.id} />
                            </div>
                        ) : activeButton === 'order' ? (
                            <div><CurrentOrder /></div>
                        ) : (
                            <div>
                                <OrderHistory />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default HomeChef
