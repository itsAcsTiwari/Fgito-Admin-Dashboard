'use client'

import { Search } from '@src/core';
import { Fragment, useState } from 'react';

import DeliveryBoyForm from './DeliveryBoyForm';
import DeliveryBoyModal from './DeliveryBoyModal';
import HomeChefForm from './HomechefForm';
import HomechefModal from './HomechefModal';
import SubscriberForm from './SubscriberForm';
import SubscriberModal from './SubscriberModal';
import UserBox from './UserBox';

const Users = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState('');

    const handleUserboxClick = (users) => {
        setSelectedUser(users);
    };

    const handleSelectChange = (event) => {
        setSelectedUserType(event.target.value);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Fragment>
            <div className='py-3 px-4 space-y-6'>
                <h1 className='text-5xl uppercase tracking-wider'>Users</h1>

                <div className='flex gap-12 items-center'>
                    <div className='flex items-center border border-black rounded-md w-1/3 px-4 h-12'>
                        <Search />
                        <input type="text" className='border-none focus:border-none focus:ring-0' placeholder='Search Users' />
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        <label className="text-sm" htmlFor="userType">
                            Select User Type
                        </label>
                        <select
                            className="text-sm rounded-md"
                            name="userType"
                            id="userType"
                            onChange={handleSelectChange}
                            value={selectedUserType}
                        >
                            <option value="">Select an option</option>
                            <option value="homechef">Homechef</option>
                            <option value="subscriber">Subscriber</option>
                            <option value="deliveryBoy">Delivery Boy</option>
                        </select>
                    </div>

                    <button
                        className='bg-primary-500 text-white rounded-full text-xs py-3 px-10 hover:bg-primary-600 duration-200'
                        onClick={handleOpenModal}
                    >
                        New User
                    </button>

                    {/* Rendering the modals */}
                    {isModalOpen && selectedUserType === "homechef" && (
                        <HomechefModal onClose={handleCloseModal} />
                    )}
                    {isModalOpen && selectedUserType === "subscriber" && (
                        <SubscriberModal onClose={handleCloseModal} />
                    )},
                    {isModalOpen && selectedUserType === "deliveryBoy" && (
                        <DeliveryBoyModal onClose={handleCloseModal} />
                    )}
                </div>
            </div>

            <div className='flex h-[calc(100vh-200px)] px-4 mb-8 space-x-6'>
                <div className='w-1/3 h-full overflow-scroll scrollbar-hide'>
                    <UserBox onClick={handleUserboxClick} selectedId={selectedUser?.id} />
                </div>

                <div className='w-0 h-full border border-black'></div>

                {selectedUser && (
                    <div className="w-3/5 h-full space-y-4 pb-2 text-sm overflow-scroll scrollbar-hide">
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
                            <HomeChefForm key={selectedUser.id} />
                        ) : selectedUser.type === "Subscriber" ? (
                            <SubscriberForm key={selectedUser.id} />
                        ) : selectedUser.type === "Delivery Partner" ? (
                            <DeliveryBoyForm key={selectedUser.id} />
                        ) : null}
                    </div>
                )}
            </div>


        </Fragment>
    );
};

export default Users;
