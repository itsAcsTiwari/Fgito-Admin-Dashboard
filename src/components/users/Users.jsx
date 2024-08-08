'use client'

import { Search } from '@src/core/icons.js'
import { Fragment, useState } from 'react'

import DeliveryBoyForm from './DeliveryBoyForm'
import SubscriberForm from './SubscriberForm'
import UserBox from './UserBox'
import UserForm from './UserForm'


const Users = () => {
    const [selectedUser, setSelectedUser] = useState(null)

    const handleUserboxClick = (users) => {
        setSelectedUser(users)
    }

    return (
        <Fragment>
            <div className='py-3 px-4 space-y-6'>
                <h1 className='text-5xl uppercase tracking-wider'>users</h1>

                <div className='flex gap-12'>
                    <div className='flex items-center border border-black rounded-md w-1/3 px-4'>
                        <Search />
                        <input type="text" className='border-none focus:border-none focus:ring-0' placeholder='Search Users' />
                    </div>

                    <button className='bg-primary-500 text-white rounded-full text-xs py-1 px-10'>New User</button>
                </div>
            </div>

            <div className='flex h-96 px-4 mt-4 mb-8 space-x-6'>
                {/* Left section */}
                <div className='w-1/3  overflow-scroll no-scrollbar'>
                    <UserBox onClick={handleUserboxClick} selectedId={selectedUser?.id} />
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
                        {selectedUser.type === "Homechef" ? (
                            <UserForm key={selectedUser.id} />
                        ) : selectedUser.type === "Subscriber" ? (
                            <SubscriberForm key={selectedUser.id} />
                        ) : selectedUser.type === "Delivery Partner" ? (
                            <DeliveryBoyForm key={selectedUser.id} />
                        ) : null}
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Users
