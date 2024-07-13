
import SubscribersData from '@src/components/data/SubscribersData.json'
import { user } from '@src/core/icons'
import React from 'react'

const Userbox = ({ onClick, selectedId }) => {
    const subscribersData = SubscribersData.subscribers

    return (
        <div>
            {subscribersData.map(subscriber => (
                <div
                    key={subscriber.id}
                    className={`flex flex-row border-[1.5px] rounded-md justify-around py-2 mb-4 hover:cursor-pointer ${selectedId === subscriber.id ? 'border-[2px] border-green-500' : 'border-black'
                        }`}
                    onClick={() => onClick(subscriber)}
                >
                    <div className='flex justify-center'>{user}</div>
                    <div className='text-sm space-y-1 font-light'>
                        <div className='flex flex-row justify-between'>
                            <span className='font-semibold'>{subscriber.name}</span>
                            <span className={`text-[10px] font-normal ${subscriber.isSubscribed === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{subscriber.isSubscribed}</span>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <span>{subscriber.subscription_details.subscription_type}</span>
                            <span>|</span>
                            <span>BF . L . D</span>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <span>{subscriber.id}</span>
                            <span>|</span>
                            <span>Total: {subscriber.total_order}</span>
                            <span>|</span>
                            <span>Cooking</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Userbox
