import SubscribersData from '@src/components/data/placeholderData.json';
import { User } from '@src/core/icons';
import classNames from 'classnames';
import { Fragment } from 'react';

const Userbox = ({ onClick, selectedId }) => {
    const subscribersData = SubscribersData.subscribers;

    const handleClick = (subscriber) => {
        onClick(subscriber);
    };

    return (
        <Fragment>
            {subscribersData.map(subscriber => (
                <div
                    key={subscriber.id}
                    className={classNames(
                        'flex flex-row border rounded-md py-2 mb-3 hover:cursor-pointer',
                        {
                            'border-2 border-primary-500': selectedId === subscriber.id,
                            'border-black': selectedId !== subscriber.id,
                        }
                    )}
                    onClick={() => handleClick(subscriber)}
                >
                    <div className='px-2'>
                        <User />
                    </div>

                    <div className='lg:text-xs xl:text-sm space-y-1 font-light w-full px-2'>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='font-semibold'>{subscriber.name}</span>
                            <span className={classNames(
                                'w-2 h-2 rounded-full mr-4',
                                {
                                    'bg-primary-500': subscriber.isSubscribed === 'Active',
                                    ' bg-red-500': subscriber.isSubscribed !== 'Active'
                                }
                            )}></span>
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
            ))}
        </Fragment>
    );
};

export default Userbox;
