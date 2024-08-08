'use client'

import { Search } from '@src/core/icons.js'
import classNames from 'classnames'
import { Fragment, useState } from 'react'

import CurrentOrder from './CurrentOrder'
import OrderHistory from './OrderHistory'
import PartnerBox from './PartnerBox'

const DeliveryPartners = () => {

    const [activeButton, setActiveButton] = useState('current')
    const [isLoading, setIsLoading] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    const handleUserboxClick = (users) => {
        setSelectedUser(users)
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
        }, 2000)
    }

    return (
        <Fragment>
            <div className='py-3 px-4 space-y-6'>
                <h1 className='text-5xl uppercase tracking-wider'>delivery partner</h1>
                <div className='flex items-center border border-black rounded-md w-1/3 px-4'>
                    <Search />
                    <input type="text" className='border-none focus:border-none focus:ring-0' placeholder='Search Partners' />
                </div>
            </div>

            <div className='flex h-96 px-4 mt-4 mb-8 space-x-6'>
                {/* Left section */}
                <div className='w-1/3  overflow-scroll no-scrollbar'>
                    <PartnerBox onClick={handleUserboxClick} selectedId={selectedUser?.id} />
                </div>

                <div className='w-0 h-96 border border-black'></div>

                {/* Right Section */}
                {selectedUser && (
                    <div className="w-3/5 space-y-4 text-sm overflow-scroll no-scrollbar">
                        <div className="rounded-md bg-grey px-4 py-2 font-light">
                            <div className="flex flex-row justify-between items-center">
                                <span className="font-semibold text-base">{selectedUser.name}</span>
                            </div>

                            <div className="space-x-1">
                                <span>{selectedUser.type}</span>
                                <span>|</span>
                                <span>{selectedUser.contact_number}</span>
                            </div>
                            <div className="space-x-1 flex">
                                <span>{selectedUser.id}</span>
                                {(selectedUser.type === "Homechef" || selectedUser.type === "Subscriber") && <span>|</span>}
                                <span>
                                    {selectedUser.type === "Homechef" ? selectedUser.POC_Name : selectedUser.type === "Subscriber" ? selectedUser.mealsPerDay : ""}
                                </span>
                                {selectedUser.type === "Subscriber" && (
                                    <div className="space-x-1">
                                        <span>|</span>
                                        <span>{selectedUser.meal_time}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full rounded-md">
                            <button
                                className={buttonClass('current')}
                                onClick={() => handleButtonClick('current')}
                                disabled={isLoading}
                            >
                                {isLoading && activeButton === 'current' ? 'Loading...' : 'Current Order'}
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
                        ) : activeButton === 'current' ? (
                            <div className=''>
                                <CurrentOrder key={selectedUser.id} />
                            </div>
                        ) : activeButton === 'history' ? (
                            <div className="space-y-6">
                                <OrderHistory />
                            </div>
                        ) : null}

                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default DeliveryPartners;
